import React from 'react';
import './Palmares.css'; // Pots crear aquest CSS per decorar

const trofeus = [
  {
    nom: "Champions League",
    imatge: "https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/U/E/UEFA-CL-100_imagen-de-la-replica-del-trofeo-UEFA-CHAMPIONS-LEAGUE-REPLICA-TROFEO-plata_1_frontal.jpg", 
    anys: [1992, 2006, 2009, 2011, 2015]
  },
  
  {
    nom: "Lliga",
    imatge: "https://amballcom.de/wp-content/uploads/2022/10/SF-RFEF-LIGA-150_Front_1000px.jpg",
    anys: [
      1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974,
      1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006,
      2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023,2025
    ]
  },
  {
    nom: "Copa del Rei",
    imatge: "https://m.media-amazon.com/images/I/71ELo3CczKL.jpg",
    anys: [
      1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942,
      1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978,
      1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015,
      2016, 2017, 2018, 2021, 2025
    ]
  }
];

function Palmares() {
  return (
    <div className="palmares-container">
      <h1>🏆 Palmarès del FC Barcelona 🏆</h1>
      <div className="trofeus">
        {trofeus.map((t, index) => (
          <div key={index} className="trofeu">
            <img src={t.imatge} alt={t.nom} className="imatge-trofeu" />
            <h2>{t.nom}</h2>
            <p><strong>Anys guanyats:</strong></p>
            <p className="anys">{t.anys.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Palmares;
