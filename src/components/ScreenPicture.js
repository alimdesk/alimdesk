import React from "react";
import './Animations.css';
import './ScreenPicture.css';

function ScreenPicture(props) {
  

   const style = {
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
  const renderScreenPicVid=()=>{
      if(props.element.type.split("/")[0]==="image"){
        return (<img src={props.element.src} className="picvid" alt={props.element.name}/>);
      }else if(props.element.type.split("/")[0]==="video"){
        if(props.element.muted==true){
          if(props.lines.length===1&&props.timer.on===false){
            return (<video  src={props.element.src} className="picvid" muted autoPlay loop/>);
          }else{
            return (<video  src={props.element.src} className="picvid" muted autoPlay  onEnded={nextAnimation} />);
          }
          
        }else{
          if(props.lines.length===1&&props.timer.on===false){
            return (<video  src={props.element.src} className="picvid" autoPlay loop/>);
          }else{
            return (<video  src={props.element.src} className="picvid" autoPlay  onEnded={nextAnimation}/>);
          }
          
        }
        
      }else{
        return "";
      }

    }
  

  return (
<div className='ScreenPicture'  style={style} onAnimationEnd={nextAnimation}>{renderScreenPicVid()} </div>
  );
}
export default ScreenPicture;