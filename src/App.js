import React from "react";
import "./App.css";
import LaalaImage from "./laala3.jpg";
import User from "./back24.jpg";

const App = () => (
  <div className="app-container">
    <div className="orange-top-bar" />
    
    <div className="hero" style={{ backgroundImage: `url(${LaalaImage})` }}>
      <div className="hero-overlay" />
      
      <div className="profile">
        <img src={User} alt="" />
        <div className="profile-name">
          Stella AYI
          <span className="verified-badge">✓</span>
        </div>
      </div>
      
      <div className="hero-content">
        <h1>LA-A-LA FRIENDS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus
        </p>
      </div>
      
      <div className="date-category">
        <span>25 / 12 / 2025</span>
        <span>Categorie</span>
      </div>
    </div>

    <div className="info-section">
      <table className="stats-table">
        <tbody>
          <tr><td>Likes</td><td>0</td></tr>
          <tr><td>Nombre d'émoji</td><td>0</td></tr>
          <tr><td>Solde émoji</td><td>0</td></tr>
          <tr><td>Type</td><td>0</td></tr>
          <tr><td>Vue</td><td>0</td></tr>
          <tr><td>H-tag</td><td>0</td></tr>
          <tr><td>Participants</td><td>0</td></tr>
        </tbody>
      </table>

      <div className="content-wrapper">
        <div className="content-header">Contenus</div>
        <table className="content-table">
          <tbody>
            <tr><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>-</td><td>-</td><td>-</td></tr>
            <tr><td>-</td><td>-</td><td>-</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default App;