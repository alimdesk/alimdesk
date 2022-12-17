import React from "react";

function ScreenTimer(props) {
    const timeToString=()=>{
        let hr = props.timer/100;
        let min = props.timer%100;
        let strhr = (hr<10? `0${hr}`:`${hr}`);

        let strmin = (min<10? `0${min}`:`${min}`);
        let fulltime = `${strhr}:${strmin}`;
        return fulltime
    }

  return (
<div>{}</div>
  );
}
export default ScreenTimer;