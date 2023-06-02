import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward,faStopwatch,faPhotoFilm,faX,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./ListPicture.css";

function ListPicture(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;

const deletehandler=()=>{
  props.setLines(props.list.filter((td)=>{return td !== props.line}));
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
const changePicVid=(e)=>{
    if(e.target.files.length>0){
        const newpicvid = {
            name: e.target.files[0].name,
            type: e.target.files[0].type,
          }
          const fr = new FileReader();
          fr.addEventListener("load",e=>{
            
            props.setLines(props.list.map((td)=>{
                if(td.id === props.line.id){
                 td.src = fr.result;
                 td.name = newpicvid.name;
                 td.type = newpicvid.type;
                 
               }
               return td;
            }))
            
          })
          fr.readAsDataURL(e.target.files[0]);
        }else{}
        
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
  return 'ListPicture listTanimation'

  
  
}
const setuppreview=()=>{
  props.setPreviewdetails(props.line);
  props.setPreviewpic(true);
}


  return (
<div className={handleDragClass()}  draggable onDragStart={handleDragStart} onDragOver={props.handleDragOver} onDrop={props.handleDrop} onDragEnter={handleDragEnter} onDragLeave={props.handleDragLeave} onDragEnd={props.handleDragEnd}>
  <div className="listbutton-text">
  <div className="list-picturetext">{props.line.name}</div>
  <button className="listbutton" onClick={deletehandler}>
    <FontAwesomeIcon icon={faX}/>
  </button>
  </div>
  <div className="listhovermenu">
  <div className="listpreview" onClick={setuppreview}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="listicon"/>
              </div>
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
  
  <div className="change-file-container"><label htmlFor="change-file" className="listpicture-file">
            <input type="file" className="theme-file" name="change-file" id="change-file" accept="image/*,video/*" onInput={changePicVid}/>
            <FontAwesomeIcon icon={faPhotoFilm} className="listpicture-file-icon"/>
            </label>
            </div>
  </div>
</div>
  );
}
export default ListPicture;