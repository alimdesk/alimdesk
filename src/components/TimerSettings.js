import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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
        on: false
      });

    }
  }
const handleInput=(e)=>{
  props.setTimerMessage(e.target.value);
}
const handleColor=(e)=>{
  props.setInputColor(e.target.value);
}
const handleSize=(e)=>{
  let num = parseInt(e.target.value);
  props.setInputSize(num);
}
const handleFont=(e)=>{
  props.setInputFont(e.target.value);
}
const handleAnimation=(e)=>{
  props.setInputAnimation(e.target.value);
}
const handleTimer=(e)=>{
  props.setTargetTime(e.target.value);
}
const submitLine=(e)=>{
  e.preventDefault();
  if(props.targetTime!==""){
    const fulltimerobj = {
      message: props.tmrmsg,
      target: props.targetTime,
      color: props.inputColor,
      font: props.inputFont,
      size: props.inputSize,
      animate: props.inputAnim,
      on: props.timer.on

    }
    props.setTimer(fulltimerobj);

  }
}

  return (
<div>
<label htmlFor="true"  className="form-label">ON</label>
<input type="radio" value="true" className="form-radio" id="true"  name="on/off" defaultChecked={props.timer.on===true?true:false} onChange={handleOnOff} />
<label htmlFor="false"  className="form-label">OFF</label>
<input type="radio" value="false" className="form-radio" id="false" name="on/off" defaultChecked={props.timer.on===false?true:false} onChange={handleOnOff} />
{props.timer.on===true?<form >
            <input type="text" value={props.tmrmsg} className="form-timer-text" id="form-timer-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="form-timer"  className="form-label">Timer</label>
            <input type="time" value={props.targetTime} className="form-timer" id="form-timer" onInput={handleTimer}  />
            <label htmlFor="form-timer-color"  className="form-label">color</label>
            <input type="color" value={props.inputColor} className="form-timer-color" id="form-timer-color" onInput={handleColor}  />
            <label htmlFor="form-timer-size" className="form-label">Size</label>
            <select name="size" id="form-timer-size"  className="form-timer-size"  value={props.inputSize} onInput={handleSize}>
              {[...Array(70)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
            </select>
            <label htmlFor="font" className="form-label">Font</label>
            <select name="font" id="font" style={{fontFamily: props.inputFont, color: "black",fontSize:20}} className="form-timer-font" value={props.inputFont} onInput={handleFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
            </select>
            <label htmlFor="animation" className="form-label">Animation</label>
            <select name="animation" id="animation"  className="form-timer-animation"  value={props.inputAnim} onInput={handleAnimation}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
            </select>

            <button className="form-timer-button" type="submit" onClick={submitLine}> 
                <span className="button-timer-text">Submit</span>
                <FontAwesomeIcon icon={faPaperPlane} /> 
            </button>
        </form>:""}
</div>
  );
}
export default TimerSettings;