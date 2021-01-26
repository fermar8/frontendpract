import React from 'react';
import { DarkSuccess } from '../styles/dark/DarkSuccess';

function Success() {

    return (
        <DarkSuccess>
            <div className="success-div">
                        <p className="success-text">Tu mensaje ha sido enviado con éxito.</p>
                        <p className="success-text">Te responderemos lo antes posible.</p> 
            </div>

            <div className="success-contact">
                        <p className="success-footer">16 Place Cormontaigne, 59000 Lille France</p>
                        <p className="success-footer">+33(0)3 20 88 11 59</p>
                        <p className="success-footer">contact@wokine.com</p>
            </div>
        </DarkSuccess>
    )
}

export default Success
