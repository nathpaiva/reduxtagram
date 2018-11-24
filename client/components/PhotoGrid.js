import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="photo-grid">
        {posts.map((post) => <Photo key={post.code} {...this.props} post={post} />)}
      </div>
    )
  }
}

export default PhotoGrid;
