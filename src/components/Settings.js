import React from "react";
import TextSettings from "./TextSettings";
import ThemeSettings from "./ThemeSettings";
import TimerSettings from "./TimerSettings";

function Settings(props) {

  return (
<div className="settings">
    <div className="menu">
      <menuButtons
      menuOptions={props.menuOptions}
      setMenuOptions={props.setMenuOptions}/>
      {menuOptions==="text"?<TextSettings
      setInputText={props.setInputText}
      setLines={props.setLines}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={inputSize}
      lines={props.lines}
      />:menuOptions==="timer"?<TimerSettings
      setTimer={props.setTimer}
      setInputColor={props.setInputColor}
      setInputFont={props.setInputFont}
      setInputSize={props.setInputSize}
      setInputText={props.setInputText}
      timer={props.timer}
      inputColor={props.inputColor}
      inputText={props.inputText}
      inputFont={props.inputFont}
      inputSize={inputSize}
      />:<ThemeSettings
      setInputTheme={props.setInputTheme}
      inputTheme={props.inputTheme}
      />}
      <button/>
      

    </div>
</div>
  );
}
export default Settings;