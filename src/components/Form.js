import React, { useState } from 'react'
import axios from 'axios';
import './../App.css';


function Form() {
    const [to, setTo] = useState('');
    // const [cc, setCc] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [displayNotif, setDisplayNotif] = useState(false)

    let mailData = {
        "to": to,
        "subject": subject,
        "content": content
    }
    const clearForm = () => {
        setTo('');
        setSubject('');
        setContent('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/send-mail`, mailData)
            .then((response) => {
                console.log('response.data ', response.data);
            })
            .then(() => {
                setDisplayNotif(true);
                const displayNotifSend = () => {
                    setDisplayNotif(false);
                    clearForm();
                };
                setTimeout(displayNotifSend, 3000);
            })
            .catch((error) => {
                console.log("error = ", error);
            });
    }

    return (
        <div>
            <div id="notification-card" style={displayNotif ? { display: 'flex' } : { display: 'none' }}>
                <h2>Mail envoyé !</h2>
            </div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="form-group row">
                    <label htmlFor="to" className=" col-sm-2 col-form-label">À :</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="to" name="to" value={to} required onChange={e => setTo(e.target.value)} />
                    </div>
                </div>
                {/* <div className="form-group row">
                <label htmlFor="cc" className=" col-sm-2 col-form-label">Cc :</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="cc" name="cc" value={cc} onChange={e => { setCc(e.target.value) }} />

                </div>
            </div> */}
                <div className="form-group row">
                    <label htmlFor="subject" className=" col-sm-2 col-form-label">Objet :</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="subject" name="subject" value={subject} required onChange={e => setSubject(e.target.value)} />

                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="content" className=" col-sm-2 col-form-label">Message :</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="content" name="content" value={content} required onChange={e => setContent(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form >
        </div >

    );
}

export default Form;