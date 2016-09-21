import React from 'react';
import BlogHeader from "../common/BlogHeader";
import HomePageRow from "./HomePageRow";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <BlogHeader/>
        <HomePageRow/>
      </div>
    );
  }
}

export default HomePage;
