import React from "react";
import {useState,Suspense} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont,faForward,faPaintbrush,faPaperPlane,faStopwatch,faTextHeight,faPhotoFilm, faX,faMagnifyingGlass,faVolumeHigh,faVolumeXmark,faRepeat, faSlash } from '@fortawesome/free-solid-svg-icons'
import './TextSettings.css';
import ListContainer from "./ListContainer";


function TextSettings(props) {
  const [previewpic,setPreviewpic] = useState(false);
  const [previewdetails,setPreviewdetails] = useState(props.inputPicVid);

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
      muted: false,
      repeat: true,
      src: "",
      type: e.target.files[0].type
    }
    const fr = new FileReader();
    fr.addEventListener("load",e=>{
      newpicvid.src = fr.result;
      props.setPicVid(newpicvid);
      props.setInputText("");
      
    
    })
    fr.readAsDataURL(e.target.files[0]);
  }else{
    //props.setPicVid(null);
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
const handleVolume=()=>{
  props.setPicVid((prevstate)=> {return {...prevstate, muted: !prevstate.muted}});
}
const handleRepeat=()=>{
  props.setPicVid((prevstate)=> {return {...prevstate, repeat: !prevstate.repeat}});
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
    const newpicvid = {
      id: props.inputPicVid.id,
      name: props.inputPicVid.name,
      muted: props.inputPicVid.muted,
      repeat: props.inputPicVid.repeat,
      src: props.inputPicVid.src,
      type: props.inputPicVid.type,
      animate: props.inputAnim,
      duration: props.inputDuration
    }
    props.setLines([...props.lines,newpicvid]);
    props.setPicVid(null);
  }
}
const handlepreview =()=>{
  setPreviewdetails(props.inputPicVid);
  setPreviewpic(prev=>!prev);
  
}
const renderpreviewPicVid=()=>{
  if(previewdetails.type.split("/")[0]==="image"){
    return (<img src={previewdetails.src} className="previewpicvid" alt={previewdetails.name}/>);
  }else if(previewdetails.type.split("/")[0]==="video"){
    return (<video  src={previewdetails.src} className="previewpicvid" muted={previewdetails.muted==true?true:false} autoPlay loop={previewdetails.repeat==true?true:false}  onEnded={()=>{setPreviewpic(prev=>!prev);}}/>);
  }else{
    return "";
  }

}

  return (
<div className="TextSettings">
  
  <div className="textsettingsform">
  <form >

           {props.inputPicVid==null? <div className="submenu">
           <div className="form-text-container">
            <input type="text" value={props.inputText} className="form-text" id="form-text" placeholder="Enter Text Here" onChange={handleInput} />
            <label htmlFor="picture-file" className="picture-file">
            <input type="file" className="theme-file" name="picture-file" id="picture-file" accept="image/*,video/*" onInput={handlePicVid}/>
            <FontAwesomeIcon icon={faPhotoFilm} className="picture-file-icon"/>
            </label>
            </div>
            <label htmlFor="color"  className="form-label">
              <FontAwesomeIcon icon={faPaintbrush} className="icon"/>
              <input type="color" value={props.inputColor} className="form-color" id="form-time" onInput={handleColor}  />
            </label>
            
            <label htmlFor="size" className="form-label">
            <FontAwesomeIcon icon={faTextHeight} className="icon"/>

            <input type="number"name="size" id="size"  className="form-size"  min={40} max={250} value={props.inputSize} onInput={handleSize}/>
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
              {[...Array(10)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
              <option key={'15s'} value='15s'>15 seconds</option>
              <option key={'20s'} value='20s'>20 seconds</option>
              <option key={'30s'} value='30s'>30 seconds</option>
              <option key={'45s'} value='45s'>45 seconds</option>
              <option key={'60s'} value='60s'>1 minute</option>
              <option key={'120s'} value='120s'>2 minute</option>
              <option key={'180s'} value='180s'>3 minute</option>
              <option key={'300s'} value='300s'>5 minute</option>              
            </select>
            </label>
            </div>: <div className="submenu">
              <div className="form-text-container">
              <label htmlFor="picture-file" className="picture-file">
            <input type="file" className="theme-file" name="picture-file" id="picture-file" accept="image/*,video/*" onInput={handlePicVid}/>
            <FontAwesomeIcon icon={faPhotoFilm} className="picture-file-icon"/>
            </label>
            <div className="picture-file-text">{props.inputPicVid!==null?`${props.inputPicVid.name}`:''}</div>
            <span className="picture-file-text-icon-container">{props.inputPicVid!==null?<FontAwesomeIcon icon={faX} className="picture-file-text-icon" onClick={()=>{props.setPicVid(null); setPreviewpic(false);}}/>:''}</span>
              </div>
              {props.inputPicVid.type.split("/")[0]==="video" && <div className="soundbutton" onClick={handleVolume}>
                {props.inputPicVid.muted==true?<FontAwesomeIcon icon={faVolumeXmark} className="soundicon"/>:
                <FontAwesomeIcon icon={faVolumeHigh} className="soundicon"/>}
              
              </div>}
              {props.inputPicVid.type.split("/")[0]==="video" && <div className="soundbutton" onClick={handleRepeat}>
              <FontAwesomeIcon icon={faRepeat} className="soundicon"/>
              {props.inputPicVid.repeat==false?<FontAwesomeIcon icon={faSlash} className="crossthru"/>:""}
              </div>}

              <div className="inputpreview" onClick={handlepreview}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="previewicon"/>
              </div>
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
              {[...Array(10)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
              <option key={'15s'} value='15s'>15 seconds</option>
              <option key={'20s'} value='20s'>20 seconds</option>
              <option key={'30s'} value='30s'>30 seconds</option>
              <option key={'45s'} value='45s'>45 seconds</option>
              <option key={'60s'} value='60s'>1 minute</option>
              <option key={'120s'} value='120s'>2 minute</option>
              <option key={'180s'} value='180s'>3 minute</option>
              <option key={'300s'} value='300s'>5 minute</option>
            </select>
            </label>
          
            </div>}
            {previewpic && <div className="previewpiccont" onClick={()=>{setPreviewpic(false)}}>{renderpreviewPicVid()}</div>}
            
            
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
  animarray={props.animarray}
  setPreviewpic={setPreviewpic}
  setPreviewdetails={setPreviewdetails}/>

</div>
  );
}
export default TextSettings;