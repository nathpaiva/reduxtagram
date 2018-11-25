import React, { PureComponent } from 'react';
import Photo from './Photo';

class PhotoGrid extends PureComponent {

  render() {
    const { posts } = this.props;

    return (
      <div className="photo-grid">
        {posts.map((post, i) => <Photo key={post.code} i={i} {...this.props} post={post} />)}
      </div>
    )
  }
}

export default PhotoGrid;
