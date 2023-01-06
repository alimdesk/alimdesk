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
      {props.menuOptions==="Text"?<TextSettings
      setInputText={props.setInputText}
      setLines={props.setLines}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputAnimation={props.setInputAnimation}
      setInputDuration={props.setInputDuration}
      fontarray={props.fontarray}
      animarray={props.animarray}
      inputAnim={props.inputAnim}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={props.inputSize}
      inputDuration={props.inputDuration}
      lines={props.lines}
      />:props.menuOptions==="Timer"?<TimerSettings
      setTimer={props.setTimer}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputAnimation={props.setInputAnimation}
      setTargetTime={props.setTargetTime}
      setTimerMessage={props.setTimerMessage}
      setInputDuration={props.setInputDuration}
      timer={props.timer}
      tmrmsg={props.tmrmsg}
      inputAnim={props.inputAnim}
      inputColor={props.inputColor}
      inputFont={props.inputFont}
      inputSize={props.inputSize}
      inputDuration={props.inputDuration}
      fontarray={props.fontarray}
      animarray={props.animarray}
      targetTime={props.targetTime}
      />:<ThemeSettings
      setInputTheme={props.setInputTheme}
      inputTheme={props.inputTheme}
      renderTheme={props.renderTheme}
      gifarray={props.gifarray}
      />}
      <button onClick={props.playOrPause}>
        Play
      </button>
      

    </div>
</div>
  );
}
export default Settings;