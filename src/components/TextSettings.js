import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont,faForward,faPaintbrush,faPaperPlane,faStopwatch,faTextHeight } from '@fortawesome/free-solid-svg-icons'
import ListText from "./ListText";
import './TextSettings.css';


function TextSettings(props) {

  const fonts = props.fontarray;
  const animates = props.animarray;

const handleInput=(e)=>{
  props.setInputText(e.target.value);
}
const handleColor=(e)=>{
  props.setInputColor(e.target.value);
}
const handleSize=(e)=>{
  let num = parseInt(e.target.value);
  props.setInputSize(num);
}
const handleDuration=(e)=>{
  props.setInputDuration(e.target.value);
}
const handleFont=(e)=>{
  props.setInputFont(e.target.value);
}
const handleAnimation=(e)=>{
  props.setInputAnimation(e.target.value);
}
const submitLine=(e)=>{
  e.preventDefault();
  if(props.inputText!==""){
    const header = {
      id: `${props.inputText}${Date.now()}`,
      text: props.inputText,
      font: props.inputFont,
      color: props.inputColor,
      size: props.inputSize,
      animate: props.inputAnim,
      duration: props.inputDuration

    }
    props.setLines([...props.lines,header]);
    props.setInputText("");
  }
}

  return (
<div className="TextSettings">
  
  <div className="textsettingsform">
  <form >
            <input type="text" value={props.inputText} className="form-text" id="form-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="color"  className="form-label">
              <FontAwesomeIcon icon={faPaintbrush} className="icon"/>
              <input type="color" value={props.inputColor} className="form-color" id="form-time" onInput={handleColor}  />
            </label>
            
            <label htmlFor="size" className="form-label">
            <FontAwesomeIcon icon={faTextHeight} className="icon"/>
            <select name="size" id="size"  className="form-size" value={props.inputSize} onInput={handleSize}>
              {[...Array(71)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
            </select>
            </label>
            
            <label htmlFor="font" className="form-label">
            <FontAwesomeIcon icon={faFont} className="icon"/>
            <select name="font" id="font" style={{fontFamily: props.inputFont,fontSize: props.inputFont=="Bungee Shade, cursive"?12:props.inputFont=="Tangerine, cursive"?25:20}} className="form-font" value={props.inputFont} onInput={handleFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize: x=="Bungee Shade, cursive"?12:x=="Tangerine, cursive"?25:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
            </select>
            </label>
            
            <label htmlFor="animation" className="form-label">
            <FontAwesomeIcon icon={faForward} className="icon"/>
            <select name="animation" id="animation"  className="form-animation"  value={props.inputAnim} onInput={handleAnimation}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
            </select>
            </label>
            
            <label htmlFor="duration" className="form-label">
            <FontAwesomeIcon icon={faStopwatch} className="icon"/>
            <select name="duration" id="duration"  className="form-duration" value={props.inputDuration} onInput={handleDuration}>
              {[...Array(20)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
            </select>
            </label>
            
            <button className="form-button" type="submit" onClick={submitLine}> 
                <span className="button-text">Submit</span>
                <FontAwesomeIcon icon={faPaperPlane} className="icon"/> 
            </button>
        </form>
  </div>
  <div className="ListContainer" style={{border:props.lines.length>0?"1px solid #D1B000":""}}>
    {props.lines.map((line)=>{
      return (<ListText
      key={line.id}
      line={line}
      list={props.lines}
      setLines={props.setLines}
      fontarray={props.fontarray}
      animarray={props.animarray}
      />)
    })}
  </div>

</div>
  );
}
export default TextSettings;