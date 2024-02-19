import React from 'react';
import headshot from './assets/images/my-photo.jpg';
import './css';

function Home() {
  return (
    <div className="home">
      <h1>Antonia Yovcheva</h1>
      <img src={headshot} alt="My Profile Photo" />
      <p>brand statement and welcome message.</p>
      <p>This is my portfolio site.</p>
    </div>
  );
}

export default Home;
