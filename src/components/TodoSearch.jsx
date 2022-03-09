import React, {useState} from 'react';
import '../css/TodoSearch.css'

function TodoSearch({search, setSearch}){

    const onSearchValueChange = (event) => {
        const {value} = event.target;
        console.log(value)
        setSearch(value)
    }

    return (
        <div className='input__container'>
            <input 
            type="text" 
            placeholder='Search todos' 
            onChange={onSearchValueChange}
            value={search}
            />
        </div>
    );
}

export {TodoSearch};