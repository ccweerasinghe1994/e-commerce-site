import React from 'react'
import './FormInput.styles.scss';


const Input = ({handleChange,label,...otherProps})=>{
    return(
        <div className='group'>
            <input className='form-input' {...otherProps} onChange={handleChange} />{
            label?<label className={`${otherProps.value.lenth?'shrink':""} form-input-label`} >{label}</label>:null
        }
        </div>
    )
}

export default Input;