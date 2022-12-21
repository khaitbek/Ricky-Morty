import React, { useRef } from 'react'
import { debounce } from '@/lib/debounce';
import { getFetch, API } from '@/lib/fetch';

function Input({setData,data}) {
  const inputRef = useRef();
  const  handleInput = debounce(async ()=>{
    const results = await getFetch(`${API}/character`,{name:inputRef.current.value});
    setData(results);
  });
  return (
    <input className='search-input' ref={inputRef} type="text" name="user_search" placeholder='search' onChange={handleInput} />
  )
}

export default Input