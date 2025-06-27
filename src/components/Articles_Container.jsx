import { useEffect, useState } from "react";
import { getArticles, getUsers } from "../utils/api";
import Article_Preview from "./Article_Preview";
import Errors from "./Errors";

export default function Articles_Container() {
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);

    Promise.all([getArticles(), getUsers()])
      .then(([articlesData, usersData]) => {
        console.log("Articles data received:", articlesData);
        console.log("Users data received:", usersData);

        if (
          articlesData &&
          Array.isArray(articlesData.articles) &&
          usersData &&
          Array.isArray(usersData.users)
        ) {
          setArticles(articlesData.articles);
          setUsers(usersData.users);
        } else {
          throw new Error("Invalid data format from API");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setErr(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p className="status">Loading articles...</p>;

  if (err) return <Errors msg={err.message || "An error occurred"} />;

  return (
    <section className="articles_container">
      {Array.isArray(articles) ? (
        articles.map((article) => {
          const author = users.find((user) => user.username === article.author);
          return (
            <Article_Preview
              key={article.article_id}
              article={article}
              author={author || {}}
            />
          );
        })
      ) : (
        <p>No articles to display.</p>
      )}
    </section>
  );
}
