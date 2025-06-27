import { Link } from "react-router-dom";

export default function Topics_Card({ topic }) {
  if (!topic || typeof topic !== "object") {
    console.warn("Invalid topic data:", topic);
    return null;
  }

  const { slug, description } = topic;

  return (
    <div className="topic_card">
      <h2>{slug?.toUpperCase() || "No Topic"}</h2>
      <p>{description || "No description available."}</p>
      <Link to={`/articles?topic=${slug}`}>
        <button>View Articles</button>
      </Link>
    </div>
  );
}
