import React from "react";
import ScreenText from "./ScreenText";
import ScreenTimer from "./ScreenTimer";
import EditButton from "./EditButton";
import './Screen.css';

function Screen(props) {
  const keypressResume=(e)=>{
    if(e.key==='Escape'||e.key==='p'){
      props.playOrPause();
    }
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
<div className="Screen" onKeyDown={keypressResume}>
<EditButton playOrPause={props.playOrPause}/>
    <div className="content">
      {renderOnScreen(props.crntScrRender)}
    </div>

</div>
  );
}
export default Screen;