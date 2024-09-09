interface NumberPickerProps {
    id: string;
    label: string;
    min?: number;
    max?: number;
}

function NumberPicker({id, label, min = 1, max = 5}: NumberPickerProps) {
  return (
    <>
        <label for={id}>{label} </label>
        <input type="number" min={min} max={max} id={id}></input>
    </>
  )
}

export default NumberPicker