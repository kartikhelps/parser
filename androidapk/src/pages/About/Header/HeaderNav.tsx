import React, { useState } from "react"
import { useHistory } from 'react-router-dom';

const HamburgerMenuHeader = ({ menuItems, setSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const history = useHistory();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const  titleChange=() =>{

  }
  const  aboutChange=() =>{

  }
  const  blogChange=() =>{

  }

  return (
    <header>
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
            background: "#000",
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
            background: "#000",
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
            background: "#000",
            margin: "4px 0",
            transition: "transform 0.2s ease-in-out",
            transformOrigin: "1px",
          } }
        ></span>
      </button>
      {isMenuOpen && (
        <nav style={ { display: "block" } }>
          <ul style={ { listStyle: "none", padding: "0", margin: "0" } }>

                <li
                onClick= { titleChange }
              style={ {
                padding: "10px",
                background: "#f0f0f0",
                cursor: "pointer",
              } }
            >
              title
            </li>

                <li
                onClick= { aboutChange }
              style={ {
                padding: "10px",
                background: "#f0f0f0",
                cursor: "pointer",
              } }
            >
              about
            </li>

                <li
                onClick= { blogChange }
              style={ {
                padding: "10px",
                background: "#f0f0f0",
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
