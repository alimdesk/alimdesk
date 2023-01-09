import React from "react";
import './menuButtons.css';

function MenuButtons(props) {
  const handleClick=(e)=>{
    props.setMenuOptions(e.target.value);
  }
  const checkOrUncheck=(option)=>{
    if(props.menuOptions===option){
      return "checked-b";
    }
    else{
      return "unchecked-b";
    }

  }
  return (

<div className="menubuttons">
  <input type="button" className={`menu-b ${checkOrUncheck("Text")}`} value="Text" onClick={handleClick}/>
  <input type="button" className={`menu-b ${checkOrUncheck("Timer")}`} value="Timer" onClick={handleClick}/>
  <input type="button" className={`menu-b ${checkOrUncheck("Theme")}`} value="Theme" onClick={handleClick}/>
</div>
  );
}
export default MenuButtons;