import { useState } from 'react'
import Checkbox from './Checkbox';

interface CheckboxListProps {
    id: string; 
    items: string[];
}

function CheckboxList({id, items}: CheckboxListProps) {
  return (
    <>

        <div id={id}>
            {items.map((element, i) => (
                <>
                    <Checkbox id={id + i}></Checkbox>
                    <label for={id + i}>{element}</label>
                    <br></br>
                </>
            ))}
        </div>
    </>
  )
}

export default CheckboxList