import React from "react";
import "./Toggle.css";

interface ToggleProps {
  state: boolean;

}

export const Toggle = ({state = true}: ToggleProps) => {

  return (
    <label className={'Toggle'}>
      <input className={'input'} type='checkbox' checked={state}/>
      <span className={'slider round'}> </span>
    </label>
  );

};
