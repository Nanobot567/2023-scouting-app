import { useState } from 'react'

interface DropdownProps {
    label: string;
    items: string[];
}

function Dropdown({label, items}: DropdownProps) {
  return (
    <>
        <label>{label} </label>

        <select id={label}>
            {items.map((element, i) => (
                <option value={element}>
                    {element}
                </option>
            ))}
        </select>
    </>
  )
}

export default Dropdown