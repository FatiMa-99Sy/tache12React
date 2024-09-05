
import React, { useState, useContext } from 'react';
import { Couleur } from './ThemeContext';
import './ThemeChange.css';

function ThemeChanger() {
  const [couleur, setCouleur] = useState('');
  const [polices, setPolices] = useState('');
  const { couleurPrincipale, setCouleurPrincipale, police, setPolice } = useContext(Couleur);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCouleurPrincipale(couleur);
    setPolice(polices);
    setCouleur('');
    setPolices('');
  };


  const dynamicStyle = {
    color: couleurPrincipale || 'black', 
    fontFamily: police || 'Arial', 
  };

  return (
    <div className="theme-changer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="couleur">Couleur Principale:</label>
          <input
            id="couleur"
            type="text"
            value={couleur}
            onChange={(e) => setCouleur(e.target.value)}
            placeholder="Entrer la couleur"
          />
        </div>
        <div className="form-group">
          <label htmlFor="police">Police:</label>
          <input
            id="police"
            type="text"
            value={polices}
            onChange={(e) => setPolices(e.target.value)}
            placeholder="Enter font"
          />
        </div>
        <button type="submit" className="envoi">Envoyer</button>
      </form>
      <div className="preview" style={dynamicStyle}>
        La theme et la Police!
      </div>
    </div>
  );
}

export default ThemeChanger;

