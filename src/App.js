import { useState, useEffect} from 'react';
import './App.css';
import Settings from './components/Settings';
import Screen from './components/Screen';



function App() {
  const fontarray = [
    "Andalé Mono, monospace",
    "Arial Black, sans-serif",
    "Arial, sans-serif",
    "Baskerville, serif",
    "Bigshot One, cursive",
    "Bradley Hand, cursive",
    "Brush Script MT, cursive",
    "Bungee Shade, cursive",
    "Cinzel, serif",
    "Comic Sans MS, cursive",
    "Courgette, cursive",
    "Courier, monospace",
    "Georgia, serif",
    "Gill Sans, sans-serif",
    "Helvetica, sans-serif",
    "Impact, sans-serif",
    "Lucida, monospace",
    "Luminari, fantasy",
    "Monaco, monospace",
    "Palatino, serif",
    "Tahoma, sans-serif",
    "Tangerine, cursive",
    "Times New Roman, serif",
    "Trebuchet MS, sans-serif",
    "Verdana, sans-serif",
    "Yeseva One, cursive"
]

  const animarray=[
    "Slide",
    "Fade",
    "Scroll"
  ]
  const gifarray=[
    {name: "cross",src: "/alimdesk/images/cross.gif",type: "image/gif"},
    {name: "blue-shift",src: "/alimdesk/images/blue-shift.gif",type: "image/gif"},
    {name: "galaxy",src: "/alimdesk/images/galaxy.gif",type: "image/gif"},
    {name: "golden-light",src: "/alimdesk/images/golden-light.gif",type: "image/gif"},
    {name: "sparkling-stars",src: "/alimdesk/images/sparkling-stars.gif",type: "image/gif"}
    
  ]
  const [pause, setPause] = useState(true);  
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#FFFFFF");
  const [inputFont, setInputFont] = useState(fontarray[0]);
  const [inputSize, setInputSize] = useState(40);
  const [inputTheme, setInputTheme] = useState(gifarray[0]);
  const [inputAnim, setInputAnimation] = useState(animarray[1]);
  const [inputDuration, setInputDuration] = useState("5s");
  const [menuOptions, setMenuOptions] = useState("Text");
  const [crntScrRender, setcrntScrRender] = useState(0);
  const [projectName, setProjectName] = useState("Project 1");
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [lines, setLines] = useState([
    {
        "id": "Welcome1673199093569",
        "text": "Welcome",
        "font": "Courgette, cursive",
        "color": "#FFFFFF",
        "size": 110,
        "animate": "Fade",
        "duration": "6s"
    },
    {
        "id": "Thanks for Joining us at1673802916263",
        "text": "Thanks for Joining us at",
        "font": "Courgette, cursive",
        "color": "#FFFFFF",
        "size": 110,
        "animate": "Fade",
        "duration": "5s"
    },
    {
        "id": "Abundant Life International Ministries1673802993079",
        "text": "Abundant Life International Ministries",
        "font": "Yeseva One, cursive",
        "color": "#FFFFFF",
        "size": 110,
        "animate": "Fade",
        "duration": "6s"
    }
  ]);
const [timer, setTimer] = useState({
  "message": "The service will start soon",
  "target": "11:00",
  "color": "#FFFFFF",
  "font": "Yeseva One, cursive",
  "size": 110,
  "animate": "Fade",
  "duration": "8s",
  "on": true
}); 
//message: "",target: "11:00",color:"#FFFFFF",font: fontarray[0],size: 40,animate: animarray[1],duration: "5s", on: true
  
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
    if(localStorage.getItem("projectName")!==null){
      let newname = JSON.parse(localStorage.getItem("projectName"));
      setProjectName(newname);
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

  useEffect(()=>{
    //save timer
    localStorage.setItem("projectName",JSON.stringify(projectName));

  },[projectName])



  
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
      setProjectName={setProjectName}
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
      projectName={projectName}
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
