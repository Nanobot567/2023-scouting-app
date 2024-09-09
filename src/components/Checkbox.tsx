import { useState } from 'react'

interface CheckboxProps {
    id: string;
}

function Checkbox({id}: CheckboxProps) {
  return (
    <>
        <input type="checkbox" id={id}></input>
    </>
  )
}

export default Checkbox