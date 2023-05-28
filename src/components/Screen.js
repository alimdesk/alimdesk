import React from "react";
import ScreenText from "./ScreenText";
import ScreenTimer from "./ScreenTimer";
import ScreenPicture from "./ScreenPicture";
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
      if(element.hasOwnProperty("src")){
        return(<ScreenPicture
          key={element.id}
          element={element}
          index={i}
          lines={props.lines}
          timer={props.timer}
          crntScrRender={props.crntScrRender}
          setcrntScrRender={props.setcrntScrRender}
          />)
      }else
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
  const clickThruAnimation=()=>{
    if(props.lines.length===0){
      props.setcrntScrRender(1);
    }else if(props.crntScrRender<props.lines.length-1 || (props.crntScrRender===props.lines.length-1 && props.timer.on===true)){
      props.setcrntScrRender(props.crntScrRender + 1);
    }else{
      props.setcrntScrRender(0);
    }
  }

  return (
<div className="Screen" >
<EditButton playOrPause={props.playOrPause}/>
    {props.renderTheme(backgroundstyle)}
    <div className="content" onClick={clickThruAnimation} >
      {renderOnScreen(props.crntScrRender)}
    </div>

</div>
  );
}
export default Screen;