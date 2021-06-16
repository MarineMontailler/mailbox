import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';


function MailSend() {

    return (
        <div>
            <h2>Email envoyé</h2>
            <Link to='/'>Retour à la mailbox</Link>
        </div>
    );
}

export default MailSend;