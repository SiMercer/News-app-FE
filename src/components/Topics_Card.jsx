import React from "react";

const Topics_Card = ({ topic }) => {
  return (
    <div className="topic-card">
      <h3>{topic.slug}</h3>
      <p>{topic.description}</p>
    </div>
  );
};

export default Topics_Card;
