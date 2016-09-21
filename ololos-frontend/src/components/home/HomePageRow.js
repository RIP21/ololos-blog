import React, {PropTypes} from 'react';
import BlogSidebar from '../common/BlogSidebar';
import HomeFeed from './HomeFeed';


const HomePageRow = () => {
  return (
    <div className="row">
      <HomeFeed/>
      <BlogSidebar/>
    </div>
  );
};

HomePageRow.propTypes = {};

export default HomePageRow;



