import React from 'react';
import '../css/CreateTodoButton.css'

function CreateTodoButton({ openModal }) {
    return ( 
        <button className='add' onClick={() => openModal(x => !x)}><ion-icon name="add-outline"></ion-icon></button>
     );
}

export {CreateTodoButton};