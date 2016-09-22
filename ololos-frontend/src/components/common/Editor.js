import SimpleMDE from 'react-simplemde-editor';
import React, {PropTypes} from 'react';

const Editor = ({handleChange}) => {

  return (
    <SimpleMDE onChange={handleChange}/>
  );
};

Editor.propTypes = {
  handleChange: PropTypes.function.isRequired
};

export default Editor;

