import React from "react";
import './TimerPreview.css';



function TimerPreview(props) {
  const style ={color: props.timer.color,
    fontFamily: props.timer.font,
    fontSize: props.timer.font=="Tangerine, cursive"?"calc(2rem * 1.5)":"2rem",
    animationName: `${props.timer.animate}preview`,
    animationDuration: props.timer.duration
  }

  return (
<div className="TimerPreview" >
  <div className="timerpreviewtext"style={style}>
    <div>{props.timer.message}</div>
    <div>06:24:17</div>
  </div>

</div>
  );
}
export default TimerPreview;