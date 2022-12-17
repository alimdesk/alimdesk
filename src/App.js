import { useState, useEffect } from 'react';
import './App.css';
import Settings from './components/Settings';
import Screen from './components/Screen';
import EditButton from './components/EditButton';

function App() {
  const timeToInt=() =>{
    const dateobj = new Date();
    let minhour = dateobj.getHours();
    let minminutes = ((dateobj.getMinutes())<10? `0${dateobj.getMinutes()}`:`${dateobj.getMinutes()}`);
    let mintime = `${minhour}${minminutes}`;
    return parseInt(mintime);
  }

  const [pause, setPause] = useState(true);  
  const [inputText, setInputText] = useState("");
  const [inputColor, setInputColor] = useState("#FFFFFF");
  const [inputFont, setInputFont] = useState("helvetica , sans-serif");
  const [inputSize, setInputSize] = useState(20);
  const [inputTheme, setInputTheme] = useState("");
  const [menuOptions, setMenuOptions] = useState("text");
  const [currentTime, setCurrentTime] = useState(timeToInt());
  const [lines, setLines] = useState([]);
  const [timer, setTimer] = useState({message: "",target: ""}); 
  return (
    <div className="App">
      <EditButton setPause={setPause}/>
      {pause===true?      <Settings
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
      />:      <Screen
      lines={lines}
      timer={timer}
      currentTime={currentTime}
      />}
    </div>
  );
}

export default App;
