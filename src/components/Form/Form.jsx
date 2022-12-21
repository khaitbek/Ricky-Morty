import React, { useRef } from 'react'
import Input from '@components/Input/Input';

function Form({setData,data}) {
  const inputRef = useRef();
  function handleFormSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <form className='search-form' onSubmit={handleFormSubmit}>
        <Input setData={setData} data={data} />
    </form>
  )
}

export default Form