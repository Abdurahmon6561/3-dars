import React from "react";
import "../Hero/Hero.css";

const Card = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>What makes us different</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "90px",
        }}
      >
        <div className="cards">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span class="material-symbols-outlined">psychiatry</span>
          <h3>Grow as a photographer</h3>
          <p>
            Get immediate exposure with your first upload. Our Pulse algorithm
            surfaces new photographs and photographers, ensuring your photos are
            seen by the community so you receive valuable feedback on day one.
          </p>
        </div>
        <div className="cards">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,200"
          />
          <span className="material-symbols-outlined">design_services</span>
          <h3>Build your career</h3>
          <p>
            Market yourself as a professional photographer. Show that you’re
            available for hire on your Profile and get discovered in Search
            results, showcase your articles, presents, videos, and more with
            Resources, and create a Portfolio website to showcase your work.
          </p>
        </div>
        <div className="cards">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,700,0,200"
          />
          <span className="material-symbols-outlined">equalizer</span>
          <h3>See how you're performing</h3>
          <p>
            With Statistics and Pulse you get valuable insights into how your
            photos are performing and how you rank in comparison to other
            photographers in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
