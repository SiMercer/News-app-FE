import React from "react";

const Comments_Card = ({ comment, users }) => {
  const author = users.find((user) => user.username === comment.author);

  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>
        <strong>By:</strong> {author ? author.name : comment.author}
      </p>
      <p>
        <strong>Votes:</strong> {comment.votes}
      </p>
    </div>
  );
};

export default Comments_Card;
