import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Yes.scss';
import myImage from '../assets/images/image1.jpeg';

function YesPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main-navigation'); // Adjust the route as needed
  };

  return (
    <main>
      <h1 className="principal">Love you Motu!</h1>
      <h2>My Cutie...</h2>
      <p>Shambs thank you so much for being my rock through everything. 
      I know you're going through a really tough time right now, 
      and I wish I could do more to make it better. 
      I made this site to try to express just how much you mean to me and to remind you that you are not alone.
       Your strength and courage inspire me every day, and I hope this brings a little light to your eyes and a smile to your face. 
       Remember, I'm here for you, every step of the way. I hope you like it, my love. 💖.</p>
      <img className="displayed" src={myImage} alt="Couple picture" title="Click here" width="300" height="260" />
      <button className="click-button" onClick={handleClick}>Click Me</button>
    </main>
  );
}

export default YesPage;
