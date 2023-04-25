import React from "react";
import { items } from "./MenuItems";
import "./Menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Menu({ isOpen, onChange }) {
  return (
    <div className={`Menu ${isOpen && "open"}`}>
      <span className="material-icons btn-close" onClick={() => onChange(false)}>
      <FontAwesomeIcon icon={faXmark} />
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;