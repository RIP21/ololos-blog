import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from './../../selector/selectors';
import {withRouter} from 'react-router';
import _ from 'lodash';

export class ManageCoursePage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }


  componentDidMount() {
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      const isChanged = !_.isEqual(this.props.course, this.state.course);
      const newCourse = this.props.course.id == "";
      if (isChanged && !newCourse) {
        return 'You have unsaved changes. Are you sure you want to leave this page?';
      }
    });
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.course.id != nextProps.course.id) {
            // Necessary to populate form when existing course is loaded directly.
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }


  updateCourseState(event) {
    const field = event.target.name;
    const course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course});
  }

  courseFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors});
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();
    if (!this.courseFormIsValid()) {
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
            });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
            <CourseForm
              allAuthors={this.props.authors}
              onChange={this.updateCourseState}
              onSave={this.saveCourse}
              course={this.state.course}
              errors={this.state.errors}
              saving={this.state.saving}
            />
        );
  }
}

function getCourseById(courses, courseId) {
  const course = courses.filter(course => course.id == courseId);
  if (course.length) {
    return course[0];
  }
  return null;
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  router: PropTypes.object,
  route: PropTypes.object
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object,
};


function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id;

  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }

  return {
    course,
    authors: authorsFormattedForDropdown(state.authors),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
