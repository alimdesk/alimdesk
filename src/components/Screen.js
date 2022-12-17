import React from "react";
import ScreenText from "./ScreenText";
import ScreenTimer from "./ScreenTimer";

function Screen(props) {

  return (
<div className="Screen">
    <ul>
    {props.lines.forEach(element => {
            return(
                <ScreenText
                text={element.text}
                />
                  )  
        })
    }
    </ul>

    <ScreenTimer timer={props.timer}/>
</div>
  );
}
export default Screen;