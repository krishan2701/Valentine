import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Reasons.scss';

const Reasons = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/main-navigation'); // Adjust the route as needed
  };

  return (
    <main className="reasons-container">
      <h1>Reasons to Love You</h1>
      <p>1 - Your delightful scent</p>
      <p>2 - Your beautiful eyes</p>
      <p>3 - Your hair</p>           
      <p>4 - Your grand smile</p>
      <p>5 - Your sensitive, sweet, and affectionate nature</p>
      <p>6 - Your true affection</p>
      <p>7 - Your soft voice</p>
      <p>8 - Your intensity</p>
      <p>9 - Your willpower, you are an exemplary person</p>
      <p>10 - Your strength, an example for many</p>
      <p>11 - Your faith</p>
      <p>12 - Your perseverance</p>
      <p>13 - Your loving embrace</p>
      <p>14 - Moments that only you can provide, like listening to me cry over a movie/game...</p>
      <p>15 - Your love... EVERYTHING ABOUT YOU, I LOVE YOU COMPLETELY!</p>
      <button className="back-button" onClick={handleBackClick}>Back</button>
    </main>
  );
}

export default Reasons;
