import { useState } from 'react'

interface HeaderProps {
    text: string;
    required?: boolean;
}

function Header({text, required = false}: HeaderProps) {
  return (
    <>
        <h3>
            {text}
            {
                required ? "*" : <></>
            }
        </h3>
    </>
  )
}

export default Header