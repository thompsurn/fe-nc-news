import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>Commenter: {comment.commenter}</p>
      <p>Date: {new Date(comment.date).toLocaleDateString()}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;



