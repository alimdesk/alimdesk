import React from "react";

function ThemeSettings(props) {
  let gifs =props.gifarray;
  const previewstyle={height: "30vh",
                      width: "50vw"
                      }
  
  const handleGif=(e)=>{
    let num = parseInt(e.target.value);
    props.setInputTheme(gifs[num]);
  }
  const handleFile=(e)=>{
    const newtheme = {
      name:e.target.files[0].name,
      type: e.target.files[0].type,
      src: URL.createObjectURL(e.target.files[0])
    }
    props.setInputTheme(newtheme);
  }

  return (
<div>
<select className="themes-list" onInput={handleGif} >
  {gifs.map((x,i)=>{
                return (<option key={x.name} style={{ color: "black",fontSize:20}} value={i}>{x.name}</option>)
              })}
</select>
<input type="file" className="theme-file" accept="image/*,video/*" onInput={handleFile}/>
<div className="preview">
  <div>Preview</div>
   {props.renderTheme(previewstyle)}
  </div>
</div>
  );
}
export default ThemeSettings;