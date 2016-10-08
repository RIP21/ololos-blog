import React, {PropTypes} from "react";
import TextInput from '../common/TextInput';

const LoginForm = ({credentials, onChange, errorMessage, onLogin}) => {
  return (
    <form>
      <h1>Login page</h1>

      <TextInput
        name="login"
        label="Login"
        value={credentials.user}
        onChange={onChange}
      />

      <TextInput
        type="password"
        name="password"
        label="Password"
        value={credentials.password}
        onChange={onChange}
        errorMessage={errorMessage}
      />

      <input
        type="submit"
        value="Login"
        className="btn btn-primary"
        onClick={onLogin}
      />
    </form>
  );
};

LoginForm.propTypes = {
  credentials: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};

export default LoginForm;
