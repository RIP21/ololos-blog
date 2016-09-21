import React, {PropTypes} from 'react';
import TextInput from './../common/TextInput';

const authorForm = ({author, saving, onChange, onSave, errors}) => {
  return (
        <form>
            <h1>Manage Author</h1>
            <TextInput
              name="firstName"
              label="First Name"
              value={author.firstName}
              onChange={onChange}
              error={errors.firstName}
            />

            <TextInput
              name="lastName"
              label="Last Name"
              value={author.lastName}
              onChange={onChange}
              error={errors.lastName}
            />

            <input
              type="submit"
              disabled={saving}
              value={saving ? 'Saving...' : 'Save'}
              className="btn btn-primary"
              onClick={onSave}
            />
        </form>
    );
};

authorForm.propTypes = {
  author: React.PropTypes.object,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object,
};

export default authorForm;
