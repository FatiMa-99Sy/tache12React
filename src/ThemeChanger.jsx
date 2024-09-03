import React from 'react'
import { useContext } from 'react'
import { Couleur } from './ThemeContext'
import './ThemeChange.css'
import { useState } from 'react'

function ThemeChanger() {
  const [couleur, setCouleur] = useState("")
  const [polices, setPolices] = useState("")
  const { couleurPrincipale, setCouleurPrincipale, police, setPolice } = useContext(Couleur)

  const handleSubmit = (e) => {
    e.preventDefault()
    setCouleurPrincipale(couleur);
    setPolice(polices);
    setCouleur("");
    setPolices("");

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">couleurPrincipale:</label>
        <input type="text" value={couleur} onChange={e => setCouleur(e.target.value)} />
        <label htmlFor="">Police:</label>
        <input type="text" value={polices} onChange={e => setPolices(e.target.value)} />
        <button type='submit' className='envoi'>Soumettre</button>
      </form>
    </div>
  )
}
export default ThemeChanger
