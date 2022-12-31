import { useState, useEffect,useRef } from 'react';
import './App.css';
import Settings from './components/Settings';
import Screen from './components/Screen';

//buttons for listtext
//fix all ui
//create save to localstorage
//add modifiable duration
//create menu buttons
//try to fix keydown pause


function App() {
  const fontarray = ["Helvetica, sans-serif",
   "Arial, sans-serif",
   "Arial Black, sans-serif",
   "Verdana, sans-serif",
   "Tahoma, sans-serif",
   "Trebuchet MS, sans-serif",
   "Impact, sans-serif",
   "Gill Sans, sans-serif",
   "Times New Roman, serif",
   "Georgia, serif",
   "Palatino, serif",
   "Baskerville, serif",
   "Andalé Mono, monospace",
   "Courier, monospace",
   "Lucida, monospace",
   "Monaco, monospace",
   "Bradley Hand, cursive",
   "Brush Script MT, cursive",
   "Comic Sans MS, cursive",
   "Luminari, fantasy"
  ]
  const animarray=[
    "Slide",
    "Fade",
    "Scroll"
  ]
  const gifarray=[
    {name: "blue-shift",src: "images/blue-shift.gif",type: "image/gif"},
    {name: "galaxy",src: "images/galaxy.gif",type: "image/gif"},
    {name: "golden-light",src: "images/golden-light.gif",type: "image/gif"},
    {name: "sparkling-stars",src: "images/sparkling-stars.gif",type: "image/gif"},
    {name: "cross",src: "images/cross.gif",type: "image/gif"}
  ]
  const [pause, setPause] = useState(true);  
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#FFFFFF");
  const [inputFont, setInputFont] = useState(fontarray[0]);
  const [inputSize, setInputSize] = useState(40);
  const [inputTheme, setInputTheme] = useState(gifarray[4]);
  const [inputAnim, setInputAnimation] = useState(animarray[1]);
  const [menuOptions, setMenuOptions] = useState("Text");
  const [crntScrRender, setcrntScrRender] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [lines, setLines] = useState([]);
  const [tmrmsg, setTimerMessage] = useState("");
  const [targetTime, setTargetTime] = useState("11:00");
  const [timer, setTimer] = useState({message: "",target: "11:00",color:"#FFFFFF",font: fontarray[0],size: 40,animate: animarray[1], on: true}); 
  const playOrPause =()=>{
    if(lines.length===0){
      setcrntScrRender(1);
    }else{
      setcrntScrRender(0);
    }
    let state = !pause;
    if(state===false){
      if(document.fullscreenElement===null){
        document.body.requestFullscreen();
      }
    }else if(state===true){
      if(document.fullscreenElement!==null){
        document.exitFullscreen();
      }
      
    }
    setPause(state);
  }

  const renderTheme=(styleobj)=>{
    if(inputTheme===null){
      return "";
    }else{
      if(inputTheme.type.split("/")[0]==="image"){
        return (<img style={styleobj} src={inputTheme.src} alt={inputTheme.name}/>);
      }else if(inputTheme.type.split("/")[0]==="video"){
        return (<video style={styleobj} src={inputTheme.src} muted autoPlay loop/>);
      }else{
        return "";
      }

    }
  }

  //const ref = useRef(null);

  useEffect(()=>{
    let interval;
    if(pause===false){
       interval= setInterval(() => {
        setCurrentTime(Date.now());
      }, 300); 
      
    }
    //ref.current.focus();
    return ()=> clearInterval(interval)

  },[pause])
  
  useEffect(()=>{
    //save stuff here

  },[])
  const keypressResume=(e)=>{
    if(e.key==='Control'){
      playOrPause();
    }
  }
  //tabIndex={1} onKeyDown={keypressResume} ref={ref}
  return (
    <div className="App"  >
      {pause===true?
      <Settings
      setInputText={setInputText}
      setCurrentTime={setCurrentTime}
      setLines={setLines}
      setPause={setPause}
      setTimer={setTimer}
      setInputColor={setInputColor}
      setInputFont={setInputFont}
      setInputSize={setInputSize}
      setInputTheme={setInputTheme}
      setMenuOptions={setMenuOptions}
      setInputAnimation={setInputAnimation}
      setTargetTime={setTargetTime}
      setTimerMessage={setTimerMessage}
      playOrPause={playOrPause}
      renderTheme={renderTheme}
      gifarray={gifarray}
      tmrmsg={tmrmsg}
      inputAnim={inputAnim}
      inputTheme={inputTheme}
      inputFont={inputFont}
      inputSize={inputSize}
      inputColor={inputColor}
      pause={pause}
      inputText={inputText}
      currentTime={currentTime}
      lines={lines}
      timer={timer}
      menuOptions={menuOptions}
      fontarray={fontarray}
      animarray={animarray}
      targetTime={targetTime}

      />: <Screen
      lines={lines}
      timer={timer}
      inputTheme={inputTheme}
      currentTime={currentTime}
      playOrPause={playOrPause}
      crntScrRender={crntScrRender}
      renderTheme={renderTheme}
      setcrntScrRender={setcrntScrRender}
      />}
    </div>
  );
}

export default App;
