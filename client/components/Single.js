import React, { PureComponent } from 'react';
import Photo from './Photo'
import Comments from './Comments';

class Single extends PureComponent {

  render() {
    const { posts, match } = this.props;
    const i = posts.findIndex((post) => post.code == match.params.postId);
    const post = posts[i];

    return (
      <div className="single-photo">
        <Photo key={post.code} i={i} {...this.props} post={post} />
        <Comments />
      </div>
    );
  }
}

export default Single;
