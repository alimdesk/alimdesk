import { useState, useEffect } from 'react';
import './App.css';
import Settings from './components/Settings';
import Screen from './components/Screen';
import EditButton from './components/EditButton';

//make time update itself
//create theme settings
//create timer settings
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
  const [pause, setPause] = useState(true);  
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#000000");
  const [inputFont, setInputFont] = useState(fontarray[0]);
  const [inputSize, setInputSize] = useState(40);
  const [inputTheme, setInputTheme] = useState("");
  const [inputAnim, setInputAnimation] = useState(animarray[0]);
  const [menuOptions, setMenuOptions] = useState("text");
  const [crntScrRender, setcrntScrRender] = useState(0);
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [lines, setLines] = useState([]);
  const [timer, setTimer] = useState({message: "",target: "11:00",color:"white",font: fontarray[0],size: 40,animate: animarray[0]}); 
  const playOrPause =()=>{
    let state = !pause;
    setPause(state);
  }

  return (
    <div className="App">
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
      playOrPause={playOrPause}
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
      />: <Screen
      lines={lines}
      timer={timer}
      currentTime={currentTime}
      playOrPause={playOrPause}
      crntScrRender={crntScrRender}
      setcrntScrRender={setcrntScrRender}
      />}
    </div>
  );
}

export default App;
