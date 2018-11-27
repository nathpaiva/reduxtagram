import React, { PureComponent } from 'react';

class Comments extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  handlerSubmit(env) {
    env.preventDefault();
    const { match, addComment } = this.props;
    const { postId } = match.params;

    const { author, comment, commentForm } = this.refs;

    addComment(postId, author.value, comment.value);
    commentForm.reset();
    author.focus();
  }

  renderComments(comment, i) {
    const { match, removeComment } = this.props;
		console.log("​Comments -> renderComments -> removeComment", removeComment)
    const { postId } = match.params;

    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>{comment.text}
          <button className="remove-comment" onClick={removeComment.bind(null, postId, i)}>&times;</button>
        </p>
      </div>
    )
  }

  render() {
    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComments)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handlerSubmit}>
          <input type="text" name="author" id="author" ref="author" placeholder="author" />
          <input type="text" name="comment" id="comment" ref="comment" placeholder="comment" />
          <input type="submit" hidden name="submit" />
        </form>
      </div>
    );
  }
}

export default Comments;
