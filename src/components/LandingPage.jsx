// src/components/LandingPage.jsx
import React, { useEffect, useState } from "react";
import { getArticles, getUsers, getTopics } from "../api";

const LandingPage = () => {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch articles
    getArticles()
      .then((data) => {
        if (data && Array.isArray(data.articles)) {
          console.log("Articles data received:", data.articles);
          setArticles(data.articles);
        } else {
          console.error("Invalid articles format", data);
          throw new Error("Invalid data format from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError("Failed to fetch articles");
      });

    // Fetch users
    getUsers()
      .then((data) => {
        if (data && Array.isArray(data.users)) {
          console.log("Users data received:", data.users);
          setUsers(data.users);
        } else {
          console.error("Invalid users format", data);
          throw new Error("Invalid data format from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setError("Failed to fetch users");
      });

    // Fetch topics
    getTopics()
      .then((data) => {
        if (data && Array.isArray(data)) {
          console.log("Topics data received:", data);
          setTopics(data);
        } else {
          console.error("Invalid topics format", data);
          throw new Error("Invalid data format from API");
        }
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setError("Failed to fetch topics");
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Landing Page</h1>

      <section>
        <h2>Topics</h2>
        {topics.length ? (
          <ul>
            {topics.map((topic, i) => (
              <li key={i}>{topic.slug}</li>
            ))}
          </ul>
        ) : (
          <p>No topics found.</p>
        )}
      </section>

      <section>
        <h2>Articles</h2>
        {articles.length ? (
          <ul>
            {articles.map((article, i) => (
              <li key={i}>{article.title} by {article.author}</li>
            ))}
          </ul>
        ) : (
          <p>No articles found.</p>
        )}
      </section>

      <section>
        <h2>Users</h2>
        {users.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
