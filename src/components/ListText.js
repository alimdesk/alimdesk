import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX,faFont,faForward,faPaintbrush,faStopwatch,faTextHeight } from '@fortawesome/free-solid-svg-icons'
import "./ListText.css";

function ListText(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;

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
const handleDragStart=()=>{
  props.setDragItemIndex(props.index);


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

  return (
<div className={handleDragClass()}  draggable onDragStart={handleDragStart} onDragOver={props.handleDragOver} onDrop={props.handleDrop} onDragEnter={handleDragEnter} onDragLeave={props.handleDragLeave} onDragEnd={props.handleDragEnd}>
  <div className="listbutton-text">
    
  <input type="text" className="list-text" value={props.line.text} onInput={changeText}/>
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
  <select name="listsize" id="listsize"  className="listsize" value={props.line.size} onInput={changeSize}>
              {[...Array(71)].map((x,i)=>{

                  return (<option key={i} value={`${i+40}`}>{`${i+40}`}</option>)
                
              })}
  </select>
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
              {[...Array(20)].map((x,i)=>{

                  return (<option key={i} value={`${i+1}s`}>{`${i+1} seconds`}</option>)
                
              })}
  </select>
  </label>
  

  </div>

</div>
  );
}
export default ListText;