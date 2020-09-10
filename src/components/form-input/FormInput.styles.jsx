import styled from 'styled-components';

export const GroupContainer = styled.div`
    margin:45px 0;
    position: relative;
    
    input[type='password']{
    letter-spacing: 0.3rem;
  }

`;



 export const FormInputLabelContainer = styled.label`

    color: gray;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top:10px;
    transition:300ms ease all;
`;
 export const FormInputContainer = styled.input`
   background: white none;
    color: gray;
    font-size: 18px;
    display: block;
    padding: 10px 10px 10px 5px;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid gray;
    margin: 25px 0;
    &:focus{
      outline: none;
    }
        &:focus ~ .form-input-label{
        top:-14px;
        font-size: 12px;
        color: black;
    }
`;
