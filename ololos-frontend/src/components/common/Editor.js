import SimpleMDE from "react-simplemde-editor";
import React, {PropTypes} from "react";

const Editor = ({handleChange = (value) => {this.setState({value: value});}, options}) => {

  return (
    <SimpleMDE onChange={handleChange} options={options}/>
  );
};

Editor.propTypes = {
  handleChange: PropTypes.function.isRequired,
  options: PropTypes.object
};

export default Editor;

