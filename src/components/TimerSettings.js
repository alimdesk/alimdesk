import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import TimerPreview from "./TimerPreview";

function TimerSettings(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;
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

  return (
<div className="TimeSettings">
<label htmlFor="true"  className="form-label">ON</label>
<input type="radio" value="true" className="form-radio" id="true"  name="on/off" defaultChecked={props.timer.on===true?true:false} onChange={handleOnOff} />
<label htmlFor="false"  className="form-label">OFF</label>
<input type="radio" value="false" className="form-radio" id="false" name="on/off" defaultChecked={props.timer.on===false?true:false} onChange={handleOnOff} />
{props.timer.on===true?<form >
            <input type="text" value={props.timer.message} className="form-timer-text" id="form-timer-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="form-timer"  className="form-label">Timer</label>
            <input type="time" value={props.timer.target} className="form-timer" id="form-timer" onInput={handleTimer}  />
            <label htmlFor="form-timer-color"  className="form-label">color</label>
            <input type="color" value={props.timer.color} className="form-timer-color" id="form-timer-color" onInput={handleColor}  />
            <label htmlFor="form-timer-size" className="form-label">Size</label>
            <select name="size" id="form-timer-size"  className="form-timer-size"  value={props.timer.size} onInput={handleSize}>
              {[...Array(71)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
            </select>
            <label htmlFor="font" className="form-label">Font</label>
            <select name="font" id="font" style={{fontFamily: props.timer.font, color: "black",fontSize:20}} className="form-timer-font" value={props.timer.font} onInput={handleFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
            </select>
            <label htmlFor="animation" className="form-label">Animation</label>
            <select name="animation" id="animation"  className="form-timer-animation"  value={props.timer.animate} onInput={handleAnimation}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
            </select>
            <label htmlFor="duration" className="form-label">Duration</label>
            <select name="duration" id="duration"  className="form-duration" value={props.timer.duration} onInput={handleDuration}>
              {[...Array(10)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
            </select>
            <TimerPreview timer={props.timer}/>
        </form>:""}
              
</div>
  );
}
export default TimerSettings;