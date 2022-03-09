import React from 'react';
import '../css/TodoCounter.css'

function TodoCounter(props) {
    return (
        <React.Fragment>
            <h1>Your Tasks</h1>
            <h2>{`You have completed ${props.todoCompleted} of ${props.todoLength}`}</h2>
        </React.Fragment>
    );
}

export {TodoCounter};