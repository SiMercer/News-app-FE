import React from "react";
import { Link } from "react-router-dom";

const Article_Preview = ({ article, users, topics }) => {
  const author = users.find((user) => user.username === article.author);
  const topic = topics.find((topic) => topic.slug === article.topic);

  return (
    <article className="article-preview">
      <h3>
        <Link to={`/articles/${article.article_id}`}>{article.title}</Link>
      </h3>
      <p>By: {author ? author.name : article.author}</p>
      <p>Topic: {topic ? topic.description : article.topic}</p>
    </article>
  );
};

export default Article_Preview;
