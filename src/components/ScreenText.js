import React from "react";
import './Animations.css';
import './ScreenText.css';

function ScreenText(props) {

  const style = {color: props.element.color,
                 fontFamily: props.element.font,
                 fontSize: props.element.font=="Tangerine, cursive"?Math.floor(props.element.size* 1.3):props.element.size,
                 visibility: props.lines.length===1&&props.timer.on===false?"visible":"",
                 animationName: props.lines.length===1&&props.timer.on===false?"":props.element.animate,
                 animationDuration: props.element.duration,
                 animationIterationCount: 1
                }
                //the font Tangerine is too small, so the variable font size fixes it
                  
  const nextAnimation=()=>{
    if(props.index!==props.lines.length-1||props.timer.on===true){
      props.setcrntScrRender(props.index+1);
    }
    else{
      props.setcrntScrRender(0);

    }
    
  }

  return (
<div className='ScreenText' style={style} onAnimationEnd={nextAnimation}>{props.element.text}</div>
  );
}
export default ScreenText;