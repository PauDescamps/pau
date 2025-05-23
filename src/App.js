import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Pau from './Pau';
import Palmares from './Palmares';
import CampNou from './CampNou';
import WebBarca from './WebBarca';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <Link to="/" className="nav-link">Inici</Link>
          <Link to="/pau" className="nav-link">Pau</Link>
          <Link to="/palmares" className="nav-link">Palmarès</Link>
          <Link to="/campnou" className="nav-link">Camp Nou</Link>
          <Link to="/jugadors" className="nav-link">Jugadors</Link>

        </nav>

        <Routes>
          <Route path="/" element={
            <div className="barca-content">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
                className="barca-logo"
                alt="Escut del FC Barcelona" />
              <h1>FC Barcelona</h1>
              <p className="motto">Més que un club</p>
              
              <div className="sections">
                <section className="info-section">
                  <h2>Història</h2>
                  <p>Fundat el 1899, el FC Barcelona és un dels clubs més emblemàtics del món.</p>
                  <p>El club representa els valors de Catalunya i ha esdevingut un símbol cultural.</p>
                </section>
                
                <section className="info-section">
                  <h2>Palmarès</h2>
                  <ul>
                    <li>5 Lligues de Campions</li>
                    <li>26 Lligues</li>
                    <li>31 Copes del Rei</li>
                    <li>3 Copes del Món de Clubs</li>
                  </ul>
                </section>
                
                <section className="info-section">
                  <h2>Valors</h2>
                  <ul>
                    <li>Humilitat</li>
                    <li>Esforç</li>
                    <li>Respecte</li>
                    <li>Compromís</li>
                  </ul>
                </section>
              </div>
            </div>
          } />
          <Route path="/pau" element={<Pau />} />
          <Route path="/palmares" element={<Palmares />} />
          <Route path="/campnou" element={<CampNou />} />
          <Route path="/jugadors" element={<WebBarca />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;