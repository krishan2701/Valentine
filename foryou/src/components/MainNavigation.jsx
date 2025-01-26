import React, { useEffect } from "react";
import "./MainNavigation.scss";
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleReasonsClick = () => {
    navigate("/reasons");
  };

  const handlePhotosClick = () => {
    navigate("/photos");
  };

  const handleSongsClick = () => {
    navigate("/songs");
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <main className="container">
      <div
        className="tenor-gif-embed"
        data-postid="10402284298245091480"
        data-share-method="host"
        data-aspect-ratio="1"
        data-width="100%"
      >
        <a href="https://tenor.com/view/bubu-dudu-sseeyall-gif-10402284298245091480">Bubu Dudu Sticker</a> from
        <a href="https://tenor.com/search/bubu-dudu-stickers">Bubu Dudu Stickers</a>
      </div>
      <button className="btn reasons" onClick={handleReasonsClick}>
        Reasons Why I Love You
      </button>
      <button className="btn photos" onClick={handlePhotosClick}>
        Favorite Photos
      </button>
      <button className="btn songs" onClick={handleSongsClick}>
        Songs That Remind Me of You
      </button>
    </main>
  );
};

export default MainNavigation;
