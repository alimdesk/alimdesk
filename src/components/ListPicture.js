import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForward,faStopwatch,faPhotoFilm,faX,faMagnifyingGlass,faVolumeHigh,faVolumeXmark,faRepeat, faSlash } from '@fortawesome/free-solid-svg-icons'
import "./ListPicture.css";

function ListPicture(props) {
  const fonts = props.fontarray;
  const animates = props.animarray;

const deletehandler=()=>{
  URL.revokeObjectURL(props.line.src);
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
            URL.revokeObjectURL(props.line.src);
            const blob = new Blob([fr.result], { type: newpicvid.type });
            props.setLines(props.list.map((td)=>{
                if(td.id === props.line.id){
                 td.src = URL.createObjectURL(blob);
                 td.name = newpicvid.name;
                 td.type = newpicvid.type;
                 
               }
               return td;
            }))
            
          })
          fr.readAsArrayBuffer(e.target.files[0]);
        }else{}
        
}
const changeVolume=()=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.muted = !td.muted;
   }
   return td;
}))
}
const changeRepeat=()=>{
  props.setLines(props.list.map((td)=>{
    if(td.id === props.line.id){
     td.repeat = !td.repeat;
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
  {props.line.type.split("/")[0]==="video" && <div className="soundbutton" onClick={changeVolume}>
    {props.line.muted==true?<FontAwesomeIcon icon={faVolumeXmark} className="soundicon"/>:
      <FontAwesomeIcon icon={faVolumeHigh} className="soundicon"/>}
  </div>}

  {props.line.type.split("/")[0]==="video" && <div className="soundbutton" onClick={changeRepeat}>
      <FontAwesomeIcon icon={faRepeat} className="soundicon"/>
        {props.line.repeat==false?<FontAwesomeIcon icon={faSlash} className="crossthru"/>:""}
  </div>}

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