import React from 'react'
import Swal from 'sweetalert2';
import { useForm } from '../hooks/useForm';
import { validate } from './validate';

export const EmailInput = () => {
    const initialForm = {
        email: ''
    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const handleSubmit = (e: any)=>{
        e.preventDefault();
        if(!validate(formValues)){
            Swal.fire({
                icon: 'error',
                title: 'Email incorrecto',
                text: 'Ingrese un email valido',
                timer:5000
               
              
              })
       }
       console.log(
        formValues);
        reset();
    }
  return (
    <form  onSubmit={handleSubmit}>
    <div className='form-container'>
          

            <input className='form-input'  placeholder='Ingresa tu email'  name='email' onChange={handleInputChange}>
                
            </input>
            <i className="fas fa-arrow-right" onClick={handleSubmit}></i>
          
        </div>
        </form>
  )
}
