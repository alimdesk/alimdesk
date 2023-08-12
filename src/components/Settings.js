import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import TextSettings from "./TextSettings";
import ThemeSettings from "./ThemeSettings";
import TimerSettings from "./TimerSettings";
import MenuButtons from "./menuButtons";
import './Settings.css';

function Settings(props) {
  const dataURLToBlob = (dataURL)=>{
    // Convert base64/URLEncoded data component to raw binary data
    const byteString = atob(dataURL.split(",")[1]);
  
    // Separate out the mime component
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
  
    // Write the bytes of the string to an ArrayBuffer
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }
  const importproject=(e)=>{
    if(e.target.files.length>0){
      const fr = new FileReader();
    fr.addEventListener("load",e=>{
      try {
        const proj = JSON.parse(fr.result);
        if(proj.hasOwnProperty('lines')){
          proj.lines.map((line)=>{
            if(line.hasOwnProperty('src')){
              line.src = URL.createObjectURL(dataURLToBlob(line.src));
            }
            
          })
          props.setLines(proj.lines);
        }
        if(proj.hasOwnProperty('timer')){
          props.setTimer(proj.timer);
        }
        if(proj.hasOwnProperty('theme')){
          if(props.gifarray.some((g)=> {return g.name===proj.theme.name && g.src===proj.theme.src && g.type===proj.theme.type})==false){
            proj.theme.src = URL.createObjectURL(dataURLToBlob(proj.theme.src));
          }
      
          props.setInputTheme(proj.theme);
          
        }
        if(proj.hasOwnProperty('name')){
          props.setProjectName(proj.name);
        }
        
      } catch (error) {
        console.error(error);
        window.alert("Error. Unable to import project");
      }


    })
    fr.readAsText(e.target.files[0]);

    }
    
  }
  const objectURLToDataURL = (objectURL) => {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
  
      // Event listener for when FileReader has finished loading the data
      fr.addEventListener("load", () => {
        const dataURL = fr.result;
        resolve(dataURL);
      });
  
      // Event listener for FileReader errors
      fr.addEventListener("error", (error) => {
        reject(error);
      });
  
      // Fetch the Object URL and read it as a Blob
      fetch(objectURL)
        .then((response) => response.blob())
        .then((blob) => {
          // Read the Blob as a data URL
          fr.readAsDataURL(blob);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  

  const  downloadproject = async()=>{

    const clone = JSON.parse(JSON.stringify(props.lines));
    const promises = [];
    props.lines.map((line, index)=>{
      if (line.hasOwnProperty("src")) {
        promises.push(
          (async () => {
            const blob = await objectURLToDataURL(line.src);
            clone[index].src = blob;
          })()
        );
      }
    })
    let themeblob; 
    if(props.gifarray.some((g)=>{return g.name===props.inputTheme.name && g.src===props.inputTheme.src && g.type===props.inputTheme.type})==false){
      themeblob = await objectURLToDataURL(props.inputTheme.src);

    }else{
      themeblob = props.inputTheme.src;
    }
    
    await Promise.all(promises);

    const proj = {lines: clone,
                  theme: {...props.inputTheme,src: themeblob},
                  timer: props.timer,
                  name: props.projectName
                  }

    const stringp = JSON.stringify(proj); 
    const dataBlob = new Blob([stringp], { type: 'application/json' });
    const dataUrl = URL.createObjectURL(dataBlob);
    const element = document.createElement('a');
    element.href = dataUrl;
    element.download = props.projectName==''?`${new Date().toLocaleDateString()}:${new Date().toLocaleTimeString()}.txt`:`${props.projectName}.txt`;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    URL.revokeObjectURL(dataUrl);
  
  }
  const handleName=(e)=>{
    props.setProjectName(e.target.value);
  }

  return (
<div className="settings">
    <div className="menu">
    
      <div className="importdownload">
      <label htmlFor="import"  className="projectlabel">Import
      <span className="importgraphic"></span>
      </label>
      <input type="file" className="import" onInput={importproject} id="import" accept=".txt"></input>

      <div className="answermenu"><label htmlFor="form-answer"  className="projectname">Project Name</label>
      <input type="text" value={props.projectName} className="form-answer" id="form-answer" onChange={handleName} />
      </div>

      <div className="download" onClick={()=>{downloadproject()}}>Download
      <span className="downloadgraphic"></span></div>
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