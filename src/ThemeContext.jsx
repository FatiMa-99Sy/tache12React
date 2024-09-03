import React, { useState } from 'react'
import { createContext } from 'react'

//creer context
export const Couleur = createContext()
function ThemeContext({children}) {
    const [couleurPrincipale, setCouleurPrincipale]=useState("blue")
    const [police ,setPolice]=useState("arial")
   
   
  return (
    
    <div>
        <Couleur.Provider value={{couleurPrincipale, setCouleurPrincipale, police , setPolice}}>{children}</Couleur.Provider>
        </div>
  )
}

export default ThemeContext