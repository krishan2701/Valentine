import React from 'react';
import './Songs.scss';

const Songs = () => {
  return (
    <main className="songs-container">
      <h1>Songs that remind me of you</h1>
      <a href="https://www.youtube.com/watch?v=6FURuLYrR_Q">
        <p>Ae dil Hain Mushkil</p>
      </a>
      <a href="https://www.youtube.com/watch?v=qoq8B8ThgEM">
        <p>Tujme Rab Dikhta hain</p>
      </a>
      <a href="https://www.youtube.com/watch?v=xRb8hxwN5zc">
        <p>Agar Tum Saath ho</p>
      </a>
      <a href="https://www.youtube.com/watch?v=_51KXfwcPMs">
        <p>Bulleya</p>
      </a>
      <a href="https://www.youtube.com/watch?v=w9Qo6p4XsXE&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn">
        <p>Yeh Tune Kya kia</p>
      </a>
      <a href="https://www.youtube.com/watch?v=mXkbWKr5ovU&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn&index=7">
        <p>Tumse milke dil ka hall</p>
      </a>
      <a href="https://www.youtube.com/watch?v=NFsEqOBG51M&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn&index=9">
        <p>Aaj se Teri</p>
      </a>
      <a href="https://www.youtube.com/watch?v=R95f7VwXqIw">
        <p>Baby blue</p>
      </a>
      <a href="https://www.youtube.com/watch?v=HEXWRTEbj1I">
        <p>What is love</p>
      </a>
      <a href="https://www.youtube.com/watch?v=cs1e0fRyI18&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn&index=10">
        <p>Hawayein</p>
      </a>
      <a href="https://www.youtube.com/watch?v=eM8Mjuq4MwQ&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn&index=11">
        <p>Aankein Khuli ho yah band</p>
      </a>
      <a href="https://www.youtube.com/watch?v=QXJyMpxd210&list=PLJvw2iL08t_Eyy6nIiNQ7wmcafbunegWn&index=17">
        <p>Kamleya</p>
      </a>
      <a href="https://www.youtube.com/watch?v=lp-EO5I60KA">
        <p>Thinking Out Loud</p>
      </a>
      <a href="https://www.youtube.com/watch?v=2Vv-BfVoq4g">
        <p>Perfect</p>
      </a>
      <a href="https://www.youtube.com/watch?v=3KFvoDDs0XM">
        <p>Pretty woman</p>
      </a>
      <a href="https://www.youtube.com/watch?v=LjhCEhWiKXk">
        <p>Just The Way You Are</p>
      </a>
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
    </main>
  );
}

export default Songs;
