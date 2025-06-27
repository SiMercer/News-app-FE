import React, { useEffect, useState } from "react";
import { getArticleById, getUsers } from "../api";
import { useParams } from "react-router-dom";
import Comment_Container from "./Comment_Container";
import Errors from "./Errors";

const Article_Full = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        const articleData = res?.data?.article;
        if (!articleData) throw new Error("Article not found");
        setArticle(articleData);
      })
      .catch((err) => setError(err));

    getUsers()
      .then((res) => {
        const userData = res?.data?.users;
        if (!userData) throw new Error("Users not found");
        setUsers(userData);
      })
      .catch((err) => setError(err));
  }, [article_id]);

  if (error) return <Errors message={error.message} />;
  if (!article) return <p>Loading...</p>;

  const author = users.find((user) => user.username === article.author);

  return (
    <section className="full-article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <p>
        <strong>Author:</strong> {author ? author.name : article.author}
      </p>
      <p>
        <strong>Topic:</strong> {article.topic}
      </p>
      <Comment_Container article_id={article.article_id} />
    </section>
  );
};

export default Article_Full;
