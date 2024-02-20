import React from 'react';
import headshot from './assets/images/my-photo.jpg';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Antonia Yovcheva</h1>
      <img src={headshot} alt="My Profile Photo" />
      <p>Hello! Welcome to my portfolio page.</p>
    </div>
  );
}

export default Home;
