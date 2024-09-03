import React from 'react'
import { useContext } from 'react'
import { Couleur } from './ThemeContext'
function Header() {
  const { couleurPrincipale , setCouleurPrincipale, police , setPolice } = useContext(Couleur)

  return (
    <div>
     <h1> Theme:{couleurPrincipale}</h1>
      <h2>Police:{police}</h2>
    </div>
  )
}

export default Header