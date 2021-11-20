import React from "react";
import "./Toggle.css";

interface ToggleProps {
  state: boolean;
  backgroundColor: { control: 'color' };
}

export const Toggle = ({state = true, backgroundColor = { control: 'color' } }: ToggleProps) => {

  return (
    <label className={'Toggle'}>
      <input className={'input'} type='checkbox' checked={state}/>
      <span className={'slider round'}> </span>
    </label>
  ); // color={backgroundColor.control}

};
