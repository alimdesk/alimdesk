import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import TextSettings from "./TextSettings";
import ThemeSettings from "./ThemeSettings";
import TimerSettings from "./TimerSettings";
import MenuButtons from "./menuButtons";
import './Settings.css';

function Settings(props) {

  const importproject=(e)=>{
    if(e.target.files.length>0){
      const fr = new FileReader();
    fr.addEventListener("load",e=>{
      const proj = JSON.parse(fr.result);
      if(proj.hasOwnProperty('lines')){
        props.setLines(proj.lines);
      }
      if(proj.hasOwnProperty('timer')){
        props.setTimer(proj.timer);
      }
      if(proj.hasOwnProperty('theme')){
        props.setInputTheme(proj.theme);
        
      }
      if(proj.hasOwnProperty('name')){
        props.setProjectName(proj.name);
      }

    })
    fr.readAsText(e.target.files[0]);

    }
    
    
  }

  const downloadproject=()=>{
    const proj = { name:props.projectName,
                  lines: props.lines,
                  timer: props.timer,
                  theme: props.inputTheme
              }
              
    const stringp = JSON.stringify(proj); 
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringp));
    element.setAttribute('download', props.projectName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  
  }
  const handleName=(e)=>{
    props.setProjectName(e.target.value);
  }

  return (
<div className="settings">
    <div className="menu">
    
      <div className="importdownload">
      <label htmlFor="import"  className="projectlabel">Import</label>
      <input type="file" className="import" onInput={importproject} id="import" accept=".txt"></input>

      <div className="answermenu"><label htmlFor="form-answer"  className="projectname">Project Name</label>
      <input type="text" value={props.projectName} className="form-answer" id="form-answer" onChange={handleName} />
      </div>

      <div className="download" onClick={downloadproject}>Download</div>
      </div>
    <MenuButtons
    menuOptions={props.menuOptions}
    setMenuOptions={props.setMenuOptions}/>

      {props.menuOptions==="Text"?<TextSettings
      setInputText={props.setInputText}
      setLines={props.setLines}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputAnimation={props.setInputAnimation}
      setInputDuration={props.setInputDuration}
      setPicVid={props.setPicVid}
      fontarray={props.fontarray}
      animarray={props.animarray}
      inputAnim={props.inputAnim}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={props.inputSize}
      inputDuration={props.inputDuration}
      inputPicVid={props.inputPicVid}
      lines={props.lines}
      />:props.menuOptions==="Timer"?<TimerSettings
      setTimer={props.setTimer}
      timer={props.timer}
      fontarray={props.fontarray}
      animarray={props.animarray}
      />:<ThemeSettings
      setInputTheme={props.setInputTheme}
      inputTheme={props.inputTheme}
      renderTheme={props.renderTheme}
      gifarray={props.gifarray}
  
      />}

    </div>
    <button className="playbutton" onClick={props.playOrPause}>
      <FontAwesomeIcon icon={faPlay}/>
      </button>
</div>
  );
}
export default Settings;