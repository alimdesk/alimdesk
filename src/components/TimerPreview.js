import React from "react";
import './TimerPreview.css';



function TimerPreview(props) {
  const style ={color: props.timer.color,
    fontFamily: props.timer.font,
    animationName: props.timer.animate,
    animationDuration: props.timer.duration
  }

  return (
<div className="TimerPreview" style={style}>
<div>{props.timer.message}</div>
<div>06:24:17</div>
</div>
  );
}
export default TimerPreview;