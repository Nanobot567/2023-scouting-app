import { useState } from 'react'

interface TextareaProps {
    id: string;
}

function Textarea({id}: TextareaProps) {
  return (
    <>
        <textarea id={id}></textarea>
    </>
  )
}

export default Textarea