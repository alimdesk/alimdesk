import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPause } from '@fortawesome/free-solid-svg-icons'
import "./EditButton.css";

function EditButton(props) {

  return (
<div className="EditButton"onClick={props.playOrPause} onKeyUp={props.playOrPause} role="button">
  <div className="inneredit" >
  <FontAwesomeIcon icon={faPause} /> 
  </div>
</div>
  );
}
export default EditButton;