import React, { useEffect } from "react";
import "./No.scss";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleYesClick = () => {
    navigate("/yes");
  };

  const handleNoClick = () => {
    navigate("/yes");
  };

  return (
    <div className="container">
      <div
        className="tenor-gif-embed"
        data-postid="22050818"
        data-share-method="host"
        data-aspect-ratio="1"
        data-width="100%"
      >
        <a href="https://tenor.com/view/mochi-gif-22050818">Mochi Sticker</a> from
        <a href="https://tenor.com/search/mochi-stickers">Mochi Stickers</a>
      </div>
      <h1>Dost bhi tum, pyaar bhi tum 😊</h1>
      <p>ek bhi tum aur hazar bhi tum Maan jaon nah🤩</p>

      <div className="btn">
        <button id="yesButton" onClick={handleYesClick}>Yes</button>
        <button id="noButton" onClick={handleNoClick}>Obviouly</button>
      </div>
    </div>
  );
};

export default NoPage;
