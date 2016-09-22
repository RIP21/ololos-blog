import React, {PropTypes} from 'react';
import BlogPost from '../common/BlogPost';
import Pager from '../common/Pager';

const HomeFeed = () => {
  return (
    <div className="col-sm-8 blog-main">
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <Pager/>
    </div>
  );
};

HomeFeed.propTypes = {};

export default HomeFeed;
