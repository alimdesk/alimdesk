import React from "react";
import ScreenText from "./ScreenText";
import ScreenTimer from "./ScreenTimer";
import EditButton from "./EditButton";
import './Screen.css';

function Screen(props) {
  const backgroundstyle={
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2
  }

  const renderOnScreen=(i)=>{
    if(i<props.lines.length){
      let element = props.lines[i];
      return(<ScreenText
        key={element.id}
        element={element}
        index={i}
        lines={props.lines}
        timer={props.timer}
        crntScrRender={props.crntScrRender}
        setcrntScrRender={props.setcrntScrRender}
        />)
    }else if(props.timer.on===true){
      return(<ScreenTimer timer={props.timer}
        lines={props.lines}
        currentTime={props.currentTime}
        crntScrRender={props.crntScrRender}
        setcrntScrRender={props.setcrntScrRender}/>
        )
    }
  }

  return (
<div className="Screen" >
<EditButton playOrPause={props.playOrPause}/>
    {props.renderTheme(backgroundstyle)}
    <div className="content">
      {renderOnScreen(props.crntScrRender)}
    </div>

</div>
  );
}
export default Screen;