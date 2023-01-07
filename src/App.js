import { useState, useEffect,useRef } from 'react';
import './App.css';
import Settings from './components/Settings';
import Screen from './components/Screen';

//buttons for listtext
//fix all ui
//try to fix keydown pause
//add more fonts?


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
    {name: "blue-shift",src: "/alimdesk/images/blue-shift.gif",type: "image/gif"},
    {name: "galaxy",src: "/alimdesk/images/galaxy.gif",type: "image/gif"},
    {name: "golden-light",src: "/alimdesk/images/golden-light.gif",type: "image/gif"},
    {name: "sparkling-stars",src: "/alimdesk/images/sparkling-stars.gif",type: "image/gif"},
    {name: "cross",src: "/alimdesk/images/cross.gif",type: "image/gif"}
  ]
  const [pause, setPause] = useState(true);  
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#FFFFFF");
  const [inputFont, setInputFont] = useState(fontarray[0]);
  const [inputSize, setInputSize] = useState(40);
  const [inputTheme, setInputTheme] = useState(gifarray[4]);
  const [inputAnim, setInputAnimation] = useState(animarray[1]);
  const [inputDuration, setInputDuration] = useState("5s");
  const [menuOptions, setMenuOptions] = useState("Text");
  const [crntScrRender, setcrntScrRender] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [lines, setLines] = useState([]);
  const [timer, setTimer] = useState({message: "",target: "11:00",color:"#FFFFFF",font: fontarray[0],size: 40,animate: animarray[1],duration: "5s", on: true}); 
  const ref = useRef(null);
  const playOrPause =()=>{
    if(lines.length===0){
      setcrntScrRender(1);
    }else{
      setcrntScrRender(0);
    }
    let state = !pause;
    if(state===false){
      if(document.fullscreenElement===null){
        document.body.requestFullscreen()
        .then(() =>{})
        .catch((err) => console.error(err));
      }
    }else if(state===true){
      if(document.fullscreenElement!==null){
        document.exitFullscreen()
        .then(() =>{})
        .catch((err) => console.error(err));
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

  useEffect(()=>{
    let interval;
    if(pause===false){
       interval= setInterval(() => {
        setCurrentTime(Date.now());
      }, 300); 
      
    }
    
    return ()=> clearInterval(interval)

  },[pause])
  
  useEffect(()=>{
    // load saved stuff here
    if(localStorage.getItem("lines")!==null){
      let newlines = JSON.parse(localStorage.getItem("lines"));
      setLines(newlines);
    }
    if(localStorage.getItem("timer")!==null){
      let newtimer = JSON.parse(localStorage.getItem("timer"));
      setTimer(newtimer);
    }
    if(localStorage.getItem("theme")!==null){
      let newtheme = JSON.parse(localStorage.getItem("theme"));
      setInputTheme(newtheme);
    }
    

  },[])

  useEffect(()=>{
    // save theme if theme is in array
    let filtergifs = gifarray.filter(g=>{return g.name===inputTheme.name && g.src===inputTheme.src && g.type===inputTheme.type});
    if(filtergifs.length==1){
      localStorage.setItem("theme",JSON.stringify(inputTheme));
      
    }

  },[inputTheme])

  useEffect(()=>{
    // save list 
    localStorage.setItem("lines",JSON.stringify(lines));

  },[lines])

  useEffect(()=>{
    //save timer
    localStorage.setItem("timer",JSON.stringify(timer));

  },[timer])

  const keypressResume=(e)=>{
  }

  //tabIndex={1} onKeyDown={keypressResume} ref={ref}
  return (
    <div className="App" >
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
      setInputDuration={setInputDuration}
      playOrPause={playOrPause}
      renderTheme={renderTheme}
      gifarray={gifarray}
      inputAnim={inputAnim}
      inputTheme={inputTheme}
      inputFont={inputFont}
      inputSize={inputSize}
      inputColor={inputColor}
      inputDuration={inputDuration}
      pause={pause}
      inputText={inputText}
      currentTime={currentTime}
      lines={lines}
      timer={timer}
      menuOptions={menuOptions}
      fontarray={fontarray}
      animarray={animarray}

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
