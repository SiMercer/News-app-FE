import React, { useEffect, useState } from "react";
import { getCommentsByArticleId, getUsers } from "../api";
import Comments_Card from "./Comments_Card";
import Errors from "./Errors";

const Comment_Container = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((res) => {
        const commentsData = res?.data?.comments;
        if (!commentsData) throw new Error("Comments not found");
        setComments(commentsData);
      })
      .catch((err) => setError(err));

    getUsers()
      .then((res) => {
        const usersData = res?.data?.users;
        if (!usersData) throw new Error("Users not found");
        setUsers(usersData);
      })
      .catch((err) => setError(err));
  }, [article_id]);

  if (error) return <Errors message={error.message} />;

  return (
    <div className="comment-container">
      <h4>Comments</h4>
      {comments.map((comment) => (
        <Comments_Card key={comment.comment_id} comment={comment} users={users} />
      ))}
    </div>
  );
};

export default Comment_Container;
