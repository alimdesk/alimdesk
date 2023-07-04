import React from "react";
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faFont,faForward,faPaintbrush,faStopwatch,faTextHeight } from '@fortawesome/free-solid-svg-icons'
import "./ListText.css";

function ListText(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;
  const [canDrag, setCanDrag] = useState(true);

const deletehandler=()=>{
  props.setLines(props.list.filter((td)=>{return td !== props.line}));
}

const changeText=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.text = e.target.value;
   }
   return td;
}))
}

const changeColor=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.color = e.target.value;
   }
   return td;
}))
}

const changeSize=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
      let num= parseInt(e.target.value)
     td.size = num;
   }
   return td;
}))
}

const changeFont=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.font = e.target.value;
   }
   return td;
}))
}

const changeAnim=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.animate = e.target.value;
   }
   return td;
}))
}

const changeDuration=(e)=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.duration = e.target.value;
   }
   return td;
}))
}
const handleDragStart=(e)=>{
  props.setDragItemIndex(props.index);
  e.dataTransfer.setData('text', 'some_dummy_data');

}

const handleDragEnter=()=>{
  props.setDragOverItemIndex(props.index);


}
const handleDragClass=()=>{
  if(props.dragOverItemIndex===props.index&&props.dragItemIndex!==props.index)
  {if(props.dragItemIndex<props.index){
    return 'dragoverdown listTanimation'
    }
    else{
      return 'dragoverup listTanimation'
    }
    }
    else if(props.dragItemIndex===props.index)
    {return 'dragitem listTanimation'}
  else
  return 'ListText listTanimation'

  
  
}
const cancelDragPropagation=()=>{
 setCanDrag(false);
}
const startDragPropagation=()=>{
  setCanDrag(true);
 }

  return (
<div className={handleDragClass()}  draggable={canDrag} onDragStart={handleDragStart} onDragOver={props.handleDragOver} onDrop={props.handleDrop} onDragEnter={handleDragEnter} onDragLeave={props.handleDragLeave} onDragEnd={props.handleDragEnd}>
  <div className="listbutton-text">
    
  <input type="text" className="list-text" value={props.line.text} onInput={changeText} onFocus={cancelDragPropagation} onBlur={startDragPropagation}/>
  <button className="listbutton" onClick={deletehandler}>
    <FontAwesomeIcon icon={faX}/>
  </button>
  </div>
  <div className="listhovermenu">
  <label htmlFor="listcolor" className="listlabel">
  <FontAwesomeIcon icon={faPaintbrush} className="icon"/>
  <input type="color" className="listcolor" name="listcolor" id="listcolor"value={props.line.color} onInput={changeColor}/>
  </label>
  <label htmlFor="listsize" className="listlabel">
  <FontAwesomeIcon icon={faTextHeight} className="icon"/>
  <input type="number" name="listsize" id="listsize"  className="listsize" min={40} max={250} value={props.line.size} onInput={changeSize}/>
  </label>

  <label htmlFor="listfont" className="listlabel">
  <FontAwesomeIcon icon={faFont} className="icon"/>
  <select name="listfont" id="listfont" style={{fontFamily: props.line.font, color: "black",fontSize: props.line.font=="Bungee Shade, cursive"?12:props.line.font=="Tangerine, cursive"?25:20}} className="listfont" value={props.line.font} onInput={changeFont}>
              {fonts.map((x,i)=>{
                return (<option key={x} style={{fontFamily: x, color: "black",fontSize: x=="Bungee Shade, cursive"?12:x=="Tangerine, cursive"?25:20}} value={`${x}`}>{`${x.split(",")[0]}`}</option>)
              })}
  </select>
  </label>
  
  <label htmlFor="listanimation" className="listlabel">
  <FontAwesomeIcon icon={faForward} className="icon"/>
  <select name="listanimation" id="listanimation"  className="listanimation"  value={props.line.animate} onInput={changeAnim}>
              {animates.map((x)=>{
                 return (<option key={x} value={`${x}`}>{`${x}`}</option>)
              })}
  </select>
  </label>
  <label htmlFor="listduration" className="listlabel">
  <FontAwesomeIcon icon={faStopwatch} className="icon"/>
  <select name="listduration" id="listduration"  className="listduration" value={props.line.duration} onInput={changeDuration}>
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
  

  </div>

</div>
  );
}
export default ListText;