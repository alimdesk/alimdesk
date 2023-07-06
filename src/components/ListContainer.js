import React from "react";
import {useState} from 'react';
import ListText from "./ListText";
import ListPicture from "./ListPicture";
import './ListContainer.css';


function ListContainer(props) {
const [dragItemIndex,setDragItemIndex] = useState();
const [dragOverItemIndex,setDragOverItemIndex] = useState();


const handleDragOver=(event)=>{
    
    event.preventDefault();
}
const handleDragLeave=()=>{
    
    setDragOverItemIndex(undefined);
}
const handleDragEnd=()=>{
    
    setDragOverItemIndex(undefined);
    setDragItemIndex(undefined);
}
const handleDrop=()=>{
    const dupe = [...props.lines]
    const dragitem = dupe.splice(dragItemIndex,1)[0];
    dupe.splice(dragOverItemIndex,0,dragitem);
    
    props.setLines(dupe);
  
  }
  

  return (
     
<div className="ListContainer" style={{border:props.lines.length>0?"1px solid #D1B000":""}}>
    {props.lines.map((line,index)=>{
      if(line.hasOwnProperty("src")){
        return (<ListPicture
          key={line.id}
          line={line}
          index={index}
          list={props.lines}
          setLines={props.setLines}
          fontarray={props.fontarray}
          animarray={props.animarray}
          dragItemIndex={dragItemIndex}
          dragOverItemIndex={dragOverItemIndex}
          setDragItemIndex={setDragItemIndex}
          setDragOverItemIndex={setDragOverItemIndex}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
          setPreviewpic={props.setPreviewpic}
          setPreviewdetails={props.setPreviewdetails}

          
          />)
      }else if(line.hasOwnProperty("text")){
        return (<ListText
          key={line.id}
          line={line}
          index={index}
          list={props.lines}
          setLines={props.setLines}
          fontarray={props.fontarray}
          animarray={props.animarray}
          dragItemIndex={dragItemIndex}
          dragOverItemIndex={dragOverItemIndex}
          setDragItemIndex={setDragItemIndex}
          setDragOverItemIndex={setDragOverItemIndex}
          handleDragOver={handleDragOver}
          handleDragLeave={handleDragLeave}
          handleDragEnd={handleDragEnd}
          handleDrop={handleDrop}
          
          />)
      }
      
    })}
  </div>
  
  );
}
export default ListContainer;