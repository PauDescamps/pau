import React from 'react';
import './Palmares.css'; // Pots crear aquest CSS per decorar

const trofeus = [
  {
    nom: "Champions League",
    imatge: "/home/alumne/Documents/8eccca8586cc093c52e05aaba009b7c7.png",
    anys: [1992, 2006, 2009, 2011, 2015]
  },
  {
    nom: "Lliga",
    imatge: "https://upload.wikimedia.org/wikipedia/commons/6/61/La_Liga_trophy.png",
    anys: [
      1929, 1945, 1948, 1949, 1952, 1953, 1959, 1960, 1974,
      1985, 1991, 1992, 1993, 1994, 1998, 1999, 2005, 2006,
      2009, 2010, 2011, 2013, 2015, 2016, 2018, 2019, 2023
    ]
  },
  {
    nom: "Copa del Rei",
    imatge: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Copa_del_Rey_logo.svg/2048px-Copa_del_Rey_logo.svg.png",
    anys: [
      1910, 1912, 1913, 1920, 1922, 1925, 1926, 1928, 1942,
      1951, 1952, 1953, 1957, 1959, 1963, 1968, 1971, 1978,
      1981, 1983, 1988, 1990, 1997, 1998, 2009, 2012, 2015,
      2016, 2017, 2018, 2021
    ]
  }
];

function Palmares() {
  return (
    <div className="palmares-container">
      <h1>🏆 Palmarès del FC Barcelona</h1>
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
