import React from 'react';
import './CampNou.css';

const CampNou = () => {
  return (
    <div className="campnou-page">
      <div className="campnou-header">
        <h1>Camp Nou</h1>
        <p className="subtitle">L'emblema culer</p>
      </div>
      
      <div className="campnou-content">
        <div className="campnou-info">
          <div className="campnou-text">
            <section className="history-section">
              <h2>Història de l'estadi</h2>
              <p>El Camp Nou, inaugurat el 24 de setembre de 1957, és l'estadi del FC Barcelona i el més gran d'Europa amb una capacitat per a 99.354 espectadors.</p>
              <p>El nom oficial en català significa "Camp Nou" i va ser escollit pels socis en un referèndum.</p>
            </section>
            
            <section className="reforma-section">
              <h2>Reforma "Espai Barça"</h2>
              <p>Actualment l'estadi està en procés de renovació com a part del projecte "Espai Barça", que inclourà:</p>
              <ul className="reformes-lista">
                <li><span className="reforma-icon">🏗️</span> Nova coberta que cobrirà tot l'estadi</li>
                <li><span className="reforma-icon">👥</span> Augment de capacitat fins a 105.000 espectadors</li>
                <li><span className="reforma-icon">📱</span> Noves instal·lacions multimèdia i tecnològiques</li>
                <li><span className="reforma-icon">🛍️</span> Espais comercials i museu ampliats</li>
                <li><span className="reforma-icon">♿</span> Millores en accessibilitat i sostenibilitat</li>
              </ul>
            </section>
            
            <div className="estadistiques">
              <div className="estadistica">
                <span className="numero">99,354</span>
                <span className="label">Capacitat actual</span>
              </div>
              <div className="estadistica">
                <span className="numero">2,500+</span>
                <span className="label">Partits disputats</span>
              </div>
              <div className="estadistica">
                <span className="numero">1957</span>
                <span className="label">Any d'inauguració</span>
              </div>
            </div>
          </div>
          
          <div className="campnou-imagen">
            <img src="https://estaticos-cdn.prensaiberica.es/clip/b3ffbd0b-f55d-4972-be7d-48e505c3405a_16-9-discover-aspect-ratio_default_0.jpg" 
                 alt="Vista aèria del Camp Nou" 
                 className="campnou-img" />
            <div className="image-caption">Vista aèria de l'estadi més emblemàtic del món</div>
          </div>
        </div>
        
        <div className="tour-section">
          <h2>Experiència Virtual</h2>
          <p>Descobreix el Camp Nou des de casa amb el nostre tour virtual interactiu:</p>
          <button className="tour-btn">Iniciar Tour Virtual</button>
        </div>
      </div>
    </div>
  );
};

export default CampNou;