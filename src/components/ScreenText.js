import React from "react";
import './Animations.css';
import './ScreenText.css';

function ScreenText(props) {

  const style = {color: props.element.color,
                 fontFamily: props.element.font,
                 fontSize: props.element.size,
                 animationName: props.element.animate,
                 animationDuration: `5s`
                }
                  
  const nextAnimation=()=>{
    props.setcrntScrRender(props.index+1);
  }

  return (
<div className='ScreenText' style={style} onAnimationEnd={nextAnimation}>{props.element.text}</div>
  );
}
export default ScreenText;