import { React, useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticlePreview from "./Article_Preview";

function ArticlesContainer() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then((res) => {
        setArticles(res.data.articles); // <-- fixed
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="articles_container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        articles.map((article) => (
          <ArticlePreview key={article.article_id} article={article} />
        ))
      )}
    </div>
  );
}

export default ArticlesContainer;
