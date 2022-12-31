import React from "react";

function MenuButtons(props) {
  const handleClick=(e)=>{
    props.setMenuOptions(e.target.value);
  }
  return (

<div>
  <input type="button" className="menu-text" value="Text" onClick={handleClick}/>
  <input type="button" className="menu-timer" value="Timer" onClick={handleClick}/>
  <input type="button" className="menu-theme" value="Theme" onClick={handleClick}/>
</div>
  );
}
export default MenuButtons;