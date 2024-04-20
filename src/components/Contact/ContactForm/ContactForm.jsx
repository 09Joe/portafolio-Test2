import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type="text" name='Nombre' placeholder='Nombre'/>
                <input type="text" name='Apellido' placeholder='Apellidos'/>
            </div>

            <input type="text" name='Email' placeholder='Email'/>
            <textarea typeof='text' name="Mensaje" placeholder='Deje un mensaje' rows={3} />
            <button>Enviar</button>
        </form>
    </div>
  )
}

export default ContactForm