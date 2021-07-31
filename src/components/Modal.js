import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

export default function Modal(props) {

    if (!props.isOpen) {
        return null;
    }

    return (
        <div>
            {ReactDOM.createPortal(
                <div className="Modal">
                    <div className="Modal__container">
                        <button className="Modal__close-button" onClick={props.onClose}>x</button>

                        {props.children}

                    </div>
                </div>, 
                document.getElementById('modal')
            )}
        </div>
    )
}
