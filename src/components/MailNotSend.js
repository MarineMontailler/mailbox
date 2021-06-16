import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';


function MailNotSend() {

    return (
        <div>
            <h2>Email non-envoyé</h2>
            <Link to='/'>Retour à la mailbox</Link>
        </div>
    );
}

export default MailNotSend;