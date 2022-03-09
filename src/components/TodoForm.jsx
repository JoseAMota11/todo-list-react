import React, {useState} from 'react';
import '../css/TodoForm.css';


function TodoForm({ addTodo, openModal }) {
    
    const [newTodoValue, setNewTodoValue] = useState('');

    function onChange(event){
        setNewTodoValue(event.target.value)
    }
    
    function onCancel(){
        openModal(x => !x)
    }
    
    function onSubmit(event){
        event.preventDefault()
        addTodo(newTodoValue)
        openModal(x => false)
    }
    
    return ( 
        <form onSubmit={onSubmit} className='form__container'>
            <label className='label'>ADD A NEW TODO:</label>
            <textarea
            className='textarea' 
            name="" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder='Learn React'
            value={newTodoValue}
            onChange={onChange}
            ></textarea>
            <div className='buttons__form'>
                
                <button
                    className='btn__cancel'
                    type='button'
                    onClick={onCancel}
                >Cancel
                </button>
                
                <button
                    className='btn__add'
                    type='submit'                   
                >Add
                </button>

            </div>
        </form>
    );
}

export {TodoForm};