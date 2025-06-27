import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import Topics_Card from "./Topics_Card";
import Errors from "./Errors";

export default function LandingPage() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErr(null);

    getTopics()
      .then((topicsData) => {
        console.log("getTopics response:", topicsData);
        if (topicsData && Array.isArray(topicsData.topics)) {
          setTopics(topicsData.topics);
        } else {
          throw new Error("Invalid format: topics not received as array");
        }
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
        setErr(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p className="status">Loading topics...</p>;

  if (err) return <Errors msg={err.message || "Failed to load topics"} />;

  return (
    <section className="topics_container">
      {Array.isArray(topics) && topics.length > 0 ? (
        topics.map((topic) => (
          <Topics_Card key={topic.slug} topic={topic} />
        ))
      ) : (
        <p>No topics available.</p>
      )}
    </section>
  );
}
