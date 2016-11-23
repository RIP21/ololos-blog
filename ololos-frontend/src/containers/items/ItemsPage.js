import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as itemsActions from "../../actions/item";

class ItemsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
          <table className="table">
            <tbody>
            {this.props.items.map( item =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.itemName}</td>
            </tr>
            )}
            </tbody>
          </table>
        );
    }
}

ItemsPage.propTypes = {
    items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);
