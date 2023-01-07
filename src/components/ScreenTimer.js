import React from "react";
import './ScreenTimer.css';

function ScreenTimer(props) {
  const timeToInt=(timestr) =>{
    let strarray = timestr.split(":");
    let inthour = parseInt(strarray[0]);
    let intminutes = parseInt(strarray[1]);
    let inttime = (inthour*100)+ intminutes;
    return inttime;
  }

  const timeToString=()=>{
    if(props.timer.target===""){
      return "";
    }
    let tmarray = props.timer.target.split(":");
    const currdate = new Date(props.currentTime);
    let currhr = currdate.getHours();
    let currmin = ((currdate.getMinutes())<10? `0${currdate.getMinutes()}`:`${currdate.getMinutes()}`);
    let currtime = `${currhr}:${currmin}`;
    const target = (timeToInt(currtime)-timeToInt(props.timer.target))>=145?new Date(currdate.getFullYear(),currdate.getMonth(),currdate.getDate()+1,tmarray[0],tmarray[1]):new Date(currdate.getFullYear(),currdate.getMonth(),currdate.getDate(),tmarray[0],tmarray[1]);
    let difftime = target - currdate;
    //console.log((timeToInt(currtime)-timeToInt(props.timer.target)))
    if(difftime<=0){
      return "";
    }

    let hr = Math.floor((((difftime/1000)/60)/60));
      let min = Math.floor((((difftime/1000)/60)%60));
      let sec = Math.floor((difftime -(hr *3600000)- (min * 60000))/1000);
      let strhr = (hr<10? `0${hr}`:`${hr}`);
      let strmin = (min<10? `0${min}`:`${min}`);
      let strsec = (sec<10? `0${sec}`:`${sec}`);
      let fulltime = `${strhr}:${strmin}:${strsec}`;
      return fulltime;
  }

  const backTo1stAnim=()=>{
    if(props.lines.length===0){
      props.setcrntScrRender(1);
    }else{
      props.setcrntScrRender(0);
    }
    
  }
  const last10seconds=()=>{
    let ans = timeToString();
    if(ans=== "" || ans.includes("NaN")){
      return false;
    }else if(ans.split(":")[0]=="00" && ans.split(":")[1]=="00" && parseInt(ans.split(":")[2])<=11){
      return true;
    }else{
      return false;
    }

  }

  const style = {color: props.timer.color,
    fontFamily: props.timer.font,
    fontSize: props.timer.size,
    visibility: props.lines.length===0||last10seconds()?"visible":"",
    animationName: props.lines.length===0||last10seconds()?"":props.timer.animate,
    animationDuration: props.timer.duration,
    animationIterationCount: 1
   }

  return (
<div className="ScreenTimer" style={style} onAnimationEnd={backTo1stAnim}>
  <div className="ScreenTimer-text">{props.timer.message}</div>
  <div className="ScreenTimer-time">{timeToString()}</div>
  </div>
  );
}
export default ScreenTimer;