import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX} from '@fortawesome/free-solid-svg-icons'
import "./ListText.css";

function ListText(props) {
  const style = {color: props.line.color,
                fontFamily: props.line.font,
                fontSize: 20
     }
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
  return (
<div className="ListText" style={style}>
  <div className="listbutton-text">
  <input type="text" className="list-text" value={props.line.text} onInput={changeText}/>
  <button className="listbutton" onClick={deletehandler}>
    <FontAwesomeIcon icon={faX}/>
  </button>
  </div>
  <div className="listhovermenu">
    

  </div>

</div>
  );
}
export default ListText;