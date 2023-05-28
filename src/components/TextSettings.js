import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont,faForward,faPaintbrush,faPaperPlane,faStopwatch,faTextHeight,faPhotoFilm, faX } from '@fortawesome/free-solid-svg-icons'
import ListText from "./ListContainer";
import './TextSettings.css';
import ListContainer from "./ListContainer";


function TextSettings(props) {

  const fonts = props.fontarray;
  const animates = props.animarray;

const handleInput=(e)=>{
  props.setInputText(e.target.value);
  if(props.inputPicVid!==null){
    props.setPicVid(null);
  }
  
}
const handlePicVid=(e)=>{
  if(e.target.files.length>0){
    const newpicvid = {
      id: `${e.target.files[0].name}${Date.now()}`,
      name: e.target.files[0].name,
      src: "",
      type: e.target.files[0].type,
      animate: props.inputAnim,
      duration: props.inputDuration
    }
    const fr = new FileReader();
    fr.addEventListener("load",e=>{
      newpicvid.src = fr.result;
      props.setPicVid(newpicvid);
      props.setInputText("");
      
    
    })
    fr.readAsDataURL(e.target.files[0]);
  }else{
    props.setPicVid(null);
  }
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
  if(props.inputText!==""&&props.inputPicVid==null){
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
  }else if(props.inputPicVid!==null){
    props.setLines([...props.lines,props.inputPicVid]);
    props.setPicVid(null);
  }
}

  return (
<div className="TextSettings">
  
  <div className="textsettingsform">
  <form >
            <div className="form-text-container">
            <input type="text" value={props.inputText} className="form-text" id="form-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="picture-file" className="picture-file">
            <input type="file" className="theme-file" name="picture-file" id="picture-file" accept="image/*,video/*" onInput={handlePicVid}/>
            <FontAwesomeIcon icon={faPhotoFilm} className="picture-file-icon"/>
            </label>
            <div className="picture-file-text">{props.inputPicVid!==null?`${props.inputPicVid.name}`:''}</div>
            <span >{props.inputPicVid!==null?<FontAwesomeIcon icon={faX} className="picture-file-text-icon" onClick={()=>{props.setPicVid(null)}}/>:''}</span>
            
            </div>
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
  <ListContainer
  lines={props.lines}
  setLines={props.setLines}
  fontarray={props.fontarray}
  animarray={props.animarray}/>

</div>
  );
}
export default TextSettings;