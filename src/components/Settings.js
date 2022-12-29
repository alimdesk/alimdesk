import React from "react";
import TextSettings from "./TextSettings";
import ThemeSettings from "./ThemeSettings";
import TimerSettings from "./TimerSettings";
import MenuButtons from "./menuButtons";

function Settings(props) {

  return (
<div className="settings">
    <div className="menu">
    <MenuButtons
    menuOptions={props.menuOptions}
    setMenuOptions={props.setMenuOptions}/>
      {props.menuOptions==="text"?<TextSettings
      setInputText={props.setInputText}
      setLines={props.setLines}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputAnimation={props.setInputAnimation}
      fontarray={props.fontarray}
      animarray={props.animarray}
      inputAnim={props.inputAnim}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={props.inputSize}
      lines={props.lines}
      />:props.menuOptions==="timer"?<TimerSettings
      setTimer={props.setTimer}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputText={props.setInputText}
      setInputAnimation={props.setInputAnimation}
      timer={props.timer}
      inputAnim={props.inputAnim}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={inputSize}
      fontarray={props.fontarray}
      animarray={props.animarray}
      />:<ThemeSettings
      setInputTheme={props.setInputTheme}
      inputTheme={props.inputTheme}
      />}
      <button onClick={props.playOrPause}>
        Play
      </button>
      

    </div>
</div>
  );
}
export default Settings;