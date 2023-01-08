import React from "react";
import './menuButtons.css';

function MenuButtons(props) {
  const handleClick=(e)=>{
    props.setMenuOptions(e.target.value);
  }
  return (

<div className="menubuttons">
  <input type="button" className="menu-b" value="Text" onClick={handleClick}/>
  <input type="button" className="menu-b" value="Timer" onClick={handleClick}/>
  <input type="button" className="menu-b" value="Theme" onClick={handleClick}/>
</div>
  );
}
export default MenuButtons;