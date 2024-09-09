import { useState } from 'react'

interface TitleProps {
    text: string;
}

function Title({text}: TitleProps) {
  return (
    <>
        <h1>
            {text}
        </h1>
    </>
  )
}

export default Title