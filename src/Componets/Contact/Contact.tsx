import './Contact.css'
import Swal, { SweetAlertOptions }  from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';


function Contact() { 

    const sendEmail = (data: any) => {
        emailjs.send('service_i1vgs8q', 'template_0nzq369', data, '5GV8vtIa_2rWZvuov')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        }

    const mostrarAlert = () => {
        Swal.fire({
            title : "Mensaje enviado",
            text: "exitosamente",
            icon: "success",
            button: "Aceptar"
        } as SweetAlertOptions ) 
    }


return (
    <div className='container-form'>
        <div className='container-redes'>
            <div className='container-redes-tex'>
                <h1>contact.</h1>
                <p>Contact me via email.</p>
            </div>
        </div>
        <Formik
            initialValues={{
                name:"",
                email:"",
                message:""
            }}
            validate={(valores) =>{
                let errores: any = {
            
                };
                if(!valores.name){
                    errores.name= "The field 'Name' is required"
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
                    errores.name = "Field 'Name' only accepts letters and blank spaces"
                }
                if(!valores.email){
                    errores.email= "The field 'Email' is required"
                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                    errores.email = "Field 'Email' is incorrect"
                }
                if(!valores.message){
                    errores.message= "The 'Message' field is required"
                } else if (!/^.{1,500}$/.test(valores.message)){
                    errores.message = "Field 'message' must not exceed 255 characters"
                }
                return errores;
            }}
            onSubmit={(valores, { resetForm}) => {
                sendEmail(valores)
                resetForm();
            }}
        >
            { ({handleSubmit, errors, touched, values, handleChange, handleBlur}) => (
                <form  className='Container-contact' onSubmit={handleSubmit}>
                <div className='container-form-text'>
                    <h2  id='Contact'>Send me an Email</h2>
                </div>  
                <div className='container-contact-message'>
                    <div className='container-input'>
                        <input 
                        placeholder='Name' 
                        className='form-input' 
                        type="text" 
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        />
                        {touched.name && errors.name && <p className='error'> {errors.name} </p> }
                        <input 
                        placeholder='correo@correo.com' 
                        className='form-input'
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        />
                        {touched.email && errors.email && <p className='error'> {errors.email} </p> }
                        <textarea 
                        className='form-text' 
                        placeholder='Message'
                        name='message'
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        />
                        {touched.message && errors.message && <p className='error'> {errors.message} </p> }
                        <input 
                        type="submit" 
                        value="Send"  
                        className='button-send'
                        onClick={mostrarAlert}
                        />
                    </div>
                </div>
            </form>
            )}
        
        </Formik>
    </div>
);
};



export { Contact }
