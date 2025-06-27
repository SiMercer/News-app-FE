// Articles_Container.jsx
import React, { useEffect, useState } from "react";
import { getArticles, getUsers, getTopics } from "../api";
import Article_Preview from "./Article_Preview";
import Errors from "./Errors";

const Articles_Container = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticles()
      .then((res) => {
        const articlesData = res?.data?.articles;
        if (!articlesData) throw new Error("Articles not found in response");
        console.log("getArticles response:", res);
        setArticles(articlesData);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError(err);
      });

    getUsers()
      .then((res) => {
        const usersData = res?.data?.users;
        if (!usersData) throw new Error("Users not found in response");
        console.log("getUsers response:", res);
        setUsers(usersData);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError(err);
      });

    getTopics()
      .then((res) => {
        const topicsData = res?.data;
        if (!topicsData) throw new Error("Topics not found in response");
        console.log("getTopics response:", res);
        setTopics(topicsData);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setError(err);
      });
  }, []);

  if (error) return <Errors message={error.message} />;

  return (
    <section className="articles-container">
      {articles.map((article) => (
        <Article_Preview
          key={article.article_id}
          article={article}
          users={users}
          topics={topics}
        />
      ))}
    </section>
  );
};

export default Articles_Container;
