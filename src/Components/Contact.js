import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Tienes Una Pregunta?</h1>
        <h1 className='primary-heading'>Mandanos Tu Pregunta</h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='tu.email@gmail.com' />
            <button className='secondary-button'>Enviar!</button>
        </div>
    </div>
  )
}

export default Contact