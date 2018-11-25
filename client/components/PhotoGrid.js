import React, { PureComponent } from 'react';
import Photo from './Photo';

class PhotoGrid extends PureComponent {

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
