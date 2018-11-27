// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// add commnet
export function addComment(postId, author, comment) {
  console.log("dispatch");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// removeComment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  };
}
