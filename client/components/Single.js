import React, { PureComponent } from 'react';
import Photo from './Photo'
import Comments from './Comments';

class Single extends PureComponent {

  render() {
    const { posts, match, comments } = this.props;
    const { postId } = match.params;

    const i = posts.findIndex((post) => post.code == postId);
    const post = posts[i];
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo key={post.code} i={i} {...this.props} post={post} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;
