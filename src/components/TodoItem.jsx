import React from 'react';
import '../css/TodoItem.css'

function TodoItem(props) {
   
    return ( 
        <li className={`li__container ${props.completed && "task__completed--li"}`}>
            <span 
            className={`button__done ${props.completed && "button__done--clicked"}`}
            onClick={props.onComplete}
            >
                <ion-icon name="checkmark-outline"></ion-icon></span>
            <p className={`para ${props.completed && "task__completed--p"}`}>{props.text}</p>
            <span className="button__delete"
            onClick={props.onDelete}
            >
                <ion-icon name="close-outline"></ion-icon></span>
        </li>
    );
}

export {TodoItem};