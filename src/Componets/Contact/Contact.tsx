import './Contact.css'
import  React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal, { SweetAlertOptions }  from 'sweetalert2';

function Contact() { 
    
    const mostrarAlert = () => {
        Swal.fire({
            title : "Mensaje enviado",
            text: "exitosamente",
            icon: "success",
            button: "Aceptar"
        } as SweetAlertOptions ) 
    }

    const [name, setName] = useState<string>("")

    const handleName = (event: React.FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }

    const [email, setEmail] = useState<string>("")

    const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value)
    }

    const [tarea, setTarea] = useState<string>("")

    const handleTarea = (event: React.FormEvent<HTMLTextAreaElement>) => {
        setTarea(event.currentTarget.value)
    }


    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs.sendForm('service_6nc1agh', 'template_mzeog0b', event.currentTarget, '5GV8vtIa_2rWZvuov')
        .then((result) => {
            setName("")
            setEmail("")
            setTarea("")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                title : "Hubo un error",
                text: "intentelo nuevamente",
                icon: "error",
                button: "Aceptar"
            } as SweetAlertOptions ) 
        });
    }

return (
    <div className='container-form'>
        <div className='container-redes'>
            <div className='container-redes-tex'>
                <h1>contact.</h1>
                <p>Contact me via email.</p>
            </div>
        </div>
        <form className='Container-contact'   onSubmit={sendEmail}>
            <div className='container-form-text'>
                <h2  id='Contact'>Send me an Email</h2>
            </div>  
            <div className='container-contact-message'>
                <div className='container-input'>
                    <input placeholder='Your Full Name' 
                    className='form-input' type="text" name="user_name" value= {name} onChange={handleName} />
                    <input placeholder='Your Email' 
                    className='form-input' type="email" name="user_email" value = {email} onChange={handleEmail} />
                    <textarea className='form-text' placeholder='Your Message'  name="message"    value=  {tarea} onChange={handleTarea}/>
                    <input type="submit" value="Send"  className='button-send' onClick={mostrarAlert}/>
                </div>
            </div>
        </form>
    </div>
);
};



export { Contact }