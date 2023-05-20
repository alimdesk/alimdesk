import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages,faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import './ThemeSettings.css';

function ThemeSettings(props) {
  let gifs =props.gifarray;
  const previewstyle={height: "50vh",
                      width: "50vw",
                      border: "1px solid #D1B000",
                      borderRadius: "5px"
                      }
  
  const handleGif=(e)=>{
    //console.log(JSON.parse(e.target.value))
    props.setInputTheme(JSON.parse(e.target.value));
  }
  const handleFile=(e)=>{
    const newtheme = {
      name: e.target.files[0].name,
      type: e.target.files[0].type,
      src: ''
    }
    const fr = new FileReader();
    fr.addEventListener("load",e=>{
      newtheme.src = fr.result;
      props.setInputTheme(newtheme);
      
    
    })
    fr.readAsDataURL(e.target.files[0]);
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
<input type="file" className="theme-file" name="theme-file" id="theme-file" accept="image/*,video/*" onInput={handleFile}/>
</label>

<div className="preview">
   {props.renderTheme(previewstyle)}
  </div>
</div>
  );
}
export default ThemeSettings;