import { useState } from 'react';

export default function EssayForm() {
  const [formValue, setFormValue] = useState('default');

  function handleChange(event) {
    setFormValue(event.target.value)
  }

  function handleSubmit(event) {
    alert('submit')
    event.preventDefault();
  }

  return (
    <input value={formValue} onChange={handleChange}></input>
  )
}