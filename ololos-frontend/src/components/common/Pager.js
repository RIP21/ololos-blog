import React, {PropTypes} from 'react';

const Pager = () => {
  return (
    <nav>
      <ul className="pager">
        <li><a href="#">Previous</a></li>
        <li><a href="#">Next</a></li>
      </ul>
    </nav>
  );
};

Pager.propTypes = {};

export default Pager;
