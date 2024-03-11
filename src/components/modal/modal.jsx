import React from 'react';
import "./modal.css"

const Modal = ({active, setActive, children}) => {
    return (
        <div>
            <button className='modal__Button' onClick={() => setActive(true)}>
                <h2>API</h2>
            </button>
            <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
                <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                    <button className='modalESC' onClick={(e) => { setActive(false); e.stopPropagation(); }}>X</button>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
