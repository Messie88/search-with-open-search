import { ChangeEvent } from 'react'
// Form Util for handling multiple inputs
export const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, setValue: any) => {
  const {name, value} = e.target

  console.log("event target result", name, value);
  
  setValue(value)
}