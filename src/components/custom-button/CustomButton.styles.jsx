import styled, {css} from 'styled-components';

const googleSignInStyle = css`

    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
`

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 0.1rem solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none
    }

`

const getStyles = props => {
    if (props.isGoogleSignIn) {
        return googleSignInStyle;
    }

    return props.inverted ? invertedStyles : buttonStyles
}

const buttonStyles = css`
  background-color: black;
  border: none;
  color: white;
    &:hover {
    background-color: white;
    color: black;
    border: 0.1rem solid black;
  }
`

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: auto;
  min-height: 5rem;
  height: auto;
  letter-spacing: 0.05rem;
  line-height: 1.5rem;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getStyles}

`