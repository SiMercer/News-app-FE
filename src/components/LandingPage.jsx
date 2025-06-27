import React from "react";
import Topics_Card from "./Topics_Card";

const LandingPage = ({ topics }) => {
  return (
    <section className="landing-page">
      <h2>Topics</h2>
      <div className="topics-list">
        {topics.map((topic) => (
          <Topics_Card key={topic.slug} topic={topic} />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;
