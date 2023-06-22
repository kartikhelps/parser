import React, { useState } from "react"
import { useHistory } from 'react-router-dom';
import { IonIcon } from '@ionic/react';




const HamburgerMenuHeader = ({ menuItems, setSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const history = useHistory();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const  aboutChange=() =>{


    history.push('/About')
  }
  const  blogChange=() =>{


    history.push('/Blog')
  }

  return (
   <header style={ {display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
      <button
        onClick={handleMenuToggle}
        style={ {
          background: "none",
          border: "none",
          padding: "0",
          cursor: "pointer",
        } }
      >
        <span
          className={isMenuOpen ? "menu-icon open" : "menu-icon"}
          style={ {
            display: "block",
            width: "20px",
            height: "2px",
            margin: "4px 0",
            transition: "transform 0.2s ease-in-out",
            transformOrigin: "1px",
          } }
        ></span>
        <span
          className={isMenuOpen ? "menu-icon open" : "menu-icon"}
          style={ {
            display: "block",
            width: "20px",
            height: "2px",
            margin: "4px 0",
            transition: "transform 0.2s ease-in-out",
            transformOrigin: "1px",
          } }
        ></span>
        <span
          className={isMenuOpen ? "menu-icon open" : "menu-icon"}
          style={ {
            display: "block",
            width: "20px",
            height: "2px",
            margin: "4px 0",
            transition: "transform 0.2s ease-in-out",
            transformOrigin: "1px",
          } }
        ></span>
      </button>


      <div style={ {flexGrow: 1, textAlign: 'center'} }>
        <h1>BuilderFlow.com</h1>
      </div>

      {isMenuOpen && (
        <nav style={ { display: "block" } }>
          <ul style={ { listStyle: "none", padding: "0", margin: "0" } }>
                <li
                onClick= { aboutChange }
              style={ {
                padding: "10px",
    
                cursor: "pointer",
              } }
            >
              about
            </li>
                <li
                onClick= { blogChange }
              style={ {
                padding: "10px",
    
                cursor: "pointer",
              } }
            >
              blog
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default HamburgerMenuHeader
