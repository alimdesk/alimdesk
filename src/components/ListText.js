import React from "react";

function ListText(props) {
  const style = {color: props.line.color,
                fontFamily: props.line.font,
                fontSize: 20
     }

  return (
<div className="ListText" style={style}>{props.line.text}</div>
  );
}
export default ListText;