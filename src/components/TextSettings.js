import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import ListText from "./ListText";


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
      animate: props.inputAnim

    }
    props.setLines([...props.lines,header]);
    props.setInputText("");
  }
}

  return (
<div className="TextSettings" style={{userSelect:"none"}}>
  <div>
    {props.lines.map((line)=>{
      return (<ListText
      key={line.id}
      line={line}
      list={props.lines}
      setLines={props.setLines}
      />)
    })}
  </div>
<form >
            <input type="text" value={props.inputText} className="form-text" id="form-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="color"  className="form-label">color</label>
            <input type="color" value={props.inputColor} className="form-color" id="form-time" onInput={handleColor}  />
            <label htmlFor="size" className="form-label">Size</label>
            <select name="size" id="size"  className="form-size" value={props.inputSize} onInput={handleSize}>
              {[...Array(70)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
            </select>
            <label htmlFor="font" className="form-label">Font</label>
            <select name="font" id="font" style={{fontFamily: props.inputFont, color: "black",fontSize:20}} className="form-font" value={props.inputFont} onInput={handleFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
            </select>
            <label htmlFor="animation" className="form-label">Animation</label>
            <select name="animation" id="animation"  className="form-animation"  value={props.inputAnim} onInput={handleAnimation}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
            </select>

            <button className="form-button" type="submit" onClick={submitLine}> 
                <span className="button-text">Submit</span>
                <FontAwesomeIcon icon={faPaperPlane} /> 
            </button>
        </form>
</div>
  );
}
export default TextSettings;