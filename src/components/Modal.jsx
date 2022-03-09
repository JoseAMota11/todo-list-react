import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='portal__container'>
            {children}
        </div>,
        document.querySelector('#modal')
    );
}

export {Modal};