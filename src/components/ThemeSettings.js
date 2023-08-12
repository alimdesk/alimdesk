import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages,faPhotoFilm,faVolumeHigh,faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import './ThemeSettings.css';

function ThemeSettings(props) {
  let gifs =props.gifarray;
  const previewstyle={height: "50vh",
                      width: "50vw",
                      border: "1px solid #D1B000",
                      borderRadius: "5px"
                      }
  
  const handleGif=(e)=>{
    props.setInputTheme((prev)=>{
      URL.revokeObjectURL(prev.src);
      return JSON.parse(e.target.value)});
    
  }
  const handleFile=(e)=>{
    if(e.target.files.length>0){
      const newtheme = {
        name: e.target.files[0].name,
        muted: false,
        type: e.target.files[0].type,
        src: null
      }
      const fr = new FileReader();
      fr.addEventListener("load",e=>{
        const blob = new Blob([fr.result], { type: newtheme.type });
       newtheme.src = URL.createObjectURL(blob);
       URL.revokeObjectURL(props.inputTheme.src);
        props.setInputTheme(newtheme);
        
      
      })
      fr.readAsArrayBuffer(e.target.files[0]);
    }
    
  }

const handleThemeVolume=()=>{
  props.setInputTheme((prevstate)=> {return {...prevstate, muted: !prevstate.muted}});
}

  return (
<div className="ThemeSettings">
<label htmlFor="themes-list"  className="form-label">
<FontAwesomeIcon icon={faImages} className="icon"/>
<select className="themes-list"  name="themes-list" id="themes-list" onInput={handleGif} defaultValue={JSON.stringify(props.inputTheme)} >
  {gifs.map((x,i)=>{
                return (<option key={x.name} style={{ color: "black",fontSize:20}} value={JSON.stringify(x)}>{x.name}</option>)
              })}
</select>
</label>
<label htmlFor="theme-file"  className="form-label">
<FontAwesomeIcon icon={faPhotoFilm} className="icon"/>
<span className="theme-file-text">Choose Picture/Video from Computer</span>
<input type="file" className="theme-file" name="theme-file" id="theme-file" accept="image/*,video/*" onInput={handleFile}/>
</label>
{props.inputTheme.type.split("/")[0]==="video" && <div className="themesoundbutton" onClick={handleThemeVolume}>
                {props.inputTheme.muted==true?<FontAwesomeIcon icon={faVolumeXmark} className="soundicon"/>:
                <FontAwesomeIcon icon={faVolumeHigh} className="soundicon"/>}
              
              </div>}

<div className="preview">
   {props.renderTheme(previewstyle)}
  </div>
</div>
  );
}
export default ThemeSettings;