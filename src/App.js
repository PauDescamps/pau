import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Pau from './Pau';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/pau" className="nav-link">Pau</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="barca-content">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
              className="barca-logo"
              alt="Escudo del FC Barcelona" />
            <h1>FC Barcelona</h1>
            <p className="motto">Més que un club</p>
            <section className="info-section">
              <h2>Historia</h2>
              <p>Fundado en 1899, el FC Barcelona es uno de los clubes más emblemáticos del fútbol mundial.</p>
            </section>
            <section className="info-section">
              <h2>Palmarés</h2>
              <ul>
                <li>5 Champions League</li>
                <li>26 Ligas</li>
                <li>31 Copas del Rey</li>
              </ul>
            </section>
          </div>
        } />
        <Route path="/pau" element={<Pau />} />
      </Routes>
    </div>
  );
}

export default App;
