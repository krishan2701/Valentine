import React, { useEffect } from "react";
import "./LoveQuestion.scss";
import { useNavigate } from "react-router-dom";

const LoveQuestion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleYesClick = () => {
    navigate("/yes"); // Navigate to the "Yes" page
  };

  const handleNoClick = () => {
    navigate("/no"); // Navigate to the "No" page
  };

  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid="22885016"
        data-share-method="host"
        data-aspect-ratio="1.04918"
        data-width="100%"
      >
        <a href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</a> from
        <a href="https://tenor.com/search/manja-stickers">Manja Stickers</a>
      </div>
      <h1>Hello Shambs 🤗</h1>
      <p> Will you be my Valentine this Year💕</p>

      <div className="btn">
        <button onClick={handleYesClick}>Yes</button>
        <button onClick={handleNoClick}>No</button>
      </div>
    </div>
  );
};

export default LoveQuestion;
