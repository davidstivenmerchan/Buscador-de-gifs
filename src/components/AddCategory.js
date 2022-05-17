import React, { useState } from "react";
import PropTypes from 'prop-types';


export const AddCategory =( {setCategories} ) => {

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
         setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value!=''){
            setCategories((cats) => [value,...cats]);
            setValue('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={value}
                onChange={handleInputChange}
                placeholder='Escribe tu busqueda'
            />
            <input
                type='submit'
                value='Enviar'
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
