import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faForward, faFont,faPaintbrush,faStopwatch,faTextHeight } from '@fortawesome/free-solid-svg-icons'
import TimerPreview from "./TimerPreview";
import './TimerSettings.css';

function TimerSettings(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;
  const handleOn=()=>{
    if(props.timer.on!==true){
      props.setTimer({
        message: props.timer.message,
        target: props.timer.target,
        color: props.timer.color,
        font: props.timer.font,
        size: props.timer.size,
        animate: props.timer.animate,
        duration: props.timer.duration,
        on: true
      });
    }
    
  }
  const handleOff=()=>{
    if(props.timer.on!==false){
      props.setTimer({
        message: props.timer.message,
        target: props.timer.target,
        color: props.timer.color,
        font: props.timer.font,
        size: props.timer.size,
        animate: props.timer.animate,
        duration: props.timer.duration,
        on: false
      });
    }
    
  }
  
  const handleOnOff=(e)=>{
    if(e.target.value==="true"){
      props.setTimer({
        message: props.timer.message,
        target: props.timer.target,
        color: props.timer.color,
        font: props.timer.font,
        size: props.timer.size,
        animate: props.timer.animate,
        duration: props.timer.duration,
        on: true
      });
    }else{
      props.setTimer({
        message: props.timer.message,
        target: props.timer.target,
        color: props.timer.color,
        font: props.timer.font,
        size: props.timer.size,
        animate: props.timer.animate,
        duration: props.timer.duration,
        on: false
      });

    }
  }
const handleInput=(e)=>{
  //props.setTimerMessage(e.target.value);
  props.setTimer({
    message: e.target.value,
    target: props.timer.target,
    color: props.timer.color,
    font: props.timer.font,
    size: props.timer.size,
    animate: props.timer.animate,
    duration: props.timer.duration,
    on: props.timer.on
  });
}
const handleColor=(e)=>{
  //props.setInputColor(e.target.value);
  props.setTimer({
    message: props.timer.message,
    target: props.timer.target,
    color: e.target.value,
    font: props.timer.font,
    size: props.timer.size,
    animate: props.timer.animate,
    duration: props.timer.duration,
    on: props.timer.on
  });
  
}
const handleSize=(e)=>{
  //let num = parseInt(e.target.value);
  //props.setInputSize(num);
  props.setTimer({
    message: props.timer.message,
    target: props.timer.target,
    color: props.timer.color,
    font: props.timer.font,
    size: parseInt(e.target.value),
    animate: props.timer.animate,
    duration: props.timer.duration,
    on: props.timer.on
  });
}
const handleFont=(e)=>{
  //props.setInputFont(e.target.value);
  props.setTimer({
    message: props.timer.message,
    target: props.timer.target,
    color: props.timer.color,
    font: e.target.value,
    size: props.timer.size,
    animate: props.timer.animate,
    duration: props.timer.duration,
    on: props.timer.on
  });
}
const handleAnimation=(e)=>{
  //props.setInputAnimation(e.target.value);
  props.setTimer({
    message: props.timer.message,
    target: props.timer.target,
    color: props.timer.color,
    font: props.timer.font,
    size: props.timer.size,
    animate: e.target.value,
    duration: props.timer.duration,
    on: props.timer.on
  });
}
const handleDuration=(e)=>{
  //props.setInputDuration(e.target.value);
  props.setTimer({
    message: props.timer.message,
    target: props.timer.target,
    color: props.timer.color,
    font: props.timer.font,
    size: props.timer.size,
    animate: props.timer.animate,
    duration: e.target.value,
    on: props.timer.on
  });
}
const handleTimer=(e)=>{
  //props.setTargetTime(e.target.value);
  if(e.target.value!==""){
    props.setTimer({
      message: props.timer.message,
      target: e.target.value,
      color: props.timer.color,
      font: props.timer.font,
      size: props.timer.size,
      animate: props.timer.animate,
      duration: props.timer.duration,
      on: props.timer.on
    });
  }

}
const onoffstyle= {
  backgroundColor: props.timer.on===true?"#D1B000":"black"
  
}
const sliderstyle={
  backgroundColor: props.timer.on===true?"black":"#D1B000",
  left: props.timer.on===true?"":0,
  right: props.timer.on===true?0:""
}

  return (
<div className="TimeSettings">
  
  <div className="onoffcontainer">
  <div className="visuals">
  <div className="onoff" style={onoffstyle}>
  <div className="slider" style={sliderstyle}></div>
  </div>
  </div>
  <span className="onofftext off"onClick={handleOff} role="button">OFF</span>
  <div className="onoffdiv">
    <div className="onoffbutton" onClick={handleOff} role="button"></div>
    <div className="onoffbutton"onClick={handleOn} role="button"></div>
  </div>
  <span className="onofftext on"onClick={handleOn} role="button">ON</span>
  
  </div>
  
  

{props.timer.on===true?<form >
            <input type="text" value={props.timer.message} className="form-text" id="form-timer-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="form-timer"  className="form-label">
            <FontAwesomeIcon icon={faClock} className="icon"/>
            <input type="time" value={props.timer.target} className="form-timer" id="form-timer" onInput={handleTimer}  />
            </label>
            
            <label htmlFor="form-timer-color"  className="form-label">
            <FontAwesomeIcon icon={faPaintbrush} className="icon"/>
            <input type="color" value={props.timer.color} className="form-color" id="form-timer-color" onInput={handleColor}  />
            </label>
            
            <label htmlFor="form-timer-size" className="form-label">
            <FontAwesomeIcon icon={faTextHeight} className="icon"/>
            <select name="size" id="form-timer-size"  className="form-size"  value={props.timer.size} onInput={handleSize}>
              {[...Array(71)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
            </select>
            </label>
            
            <label htmlFor="font" className="form-label">
            <FontAwesomeIcon icon={faFont} className="icon"/>
            <select name="font" id="font" style={{fontFamily: props.timer.font, color: "black",fontSize: props.timer.font=="Bungee Shade, cursive"?12:props.timer.font=="Tangerine, cursive"?25:20}} className="form-font" value={props.timer.font} onInput={handleFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize:x=="Bungee Shade, cursive"?12:x=="Tangerine, cursive"?25:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
            </select>
            </label>
            
            <label htmlFor="animation" className="form-label">
            <FontAwesomeIcon icon={faForward} className="icon"/>
            <select name="animation" id="animation"  className="form-animation"  value={props.timer.animate} onInput={handleAnimation}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
            </select>
            </label>
            
            <label htmlFor="duration" className="form-label">
            <FontAwesomeIcon icon={faStopwatch} className="icon"/>
            <select name="duration" id="duration"  className="form-duration" value={props.timer.duration} onInput={handleDuration}>
              {[...Array(15)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
            </select>
            </label>
            
            <TimerPreview timer={props.timer}/>
        </form>:""}
              
</div>
  );
}
export default TimerSettings;