import { useState } from 'react'
import Checkbox from './Checkbox';

interface ToggleProps {
    label: string;
    id: string;
}

function Toggle({label, id}: ToggleProps) {
  return (
    <>
        <label for={id}>{label} </label>
        <Checkbox id={id}></Checkbox>
    </>
  )
}

export default Toggle