import React from "react";


function TimerPreview(props) {
  const style ={color: props.timer.color,
    fontFamily: props.timer.font,
    fontSize: "2rem",
    animationName: props.timer.animate,
    animationDuration: props.timer.duration,
    animationIterationCount: "infinite"
  }

  return (
<div className="TimerPreview" style={style}>
<div>{props.timer.message}</div>
<div>06:24:17</div>
</div>
  );
}
export default TimerPreview;