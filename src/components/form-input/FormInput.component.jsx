import React from 'react'

import {FormInputContainer, FormInputLabelContainer, GroupContainer} from "./FormInput.styles";


const Input = ({handleChange,label,...otherProps})=>{
    return(
        <GroupContainer >
            <FormInputContainer {...otherProps} onChange={handleChange} />{
            label?<FormInputLabelContainer className={`form-input-label`} >{label}</FormInputLabelContainer>:null
        }
        </GroupContainer>
    )
}

export default Input;