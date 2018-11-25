import React, { PureComponent } from 'react';

class Comments extends PureComponent {
  renderComments(comment, i) {
		console.log("​Comments -> renderComments -> i", i)
		console.log("​Comments -> renderComments -> comment", comment)
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>{comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form">
          <input type="text" name="author" id="author" ref="author" placeholder="author" />
          <input type="text" name="comment" id="comment" ref="comment" placeholder="comment" />
          <input type="submit" hidden name="submit" />
        </form>
      </div>
    );
  }
}

export default Comments;
