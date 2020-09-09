import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'


const optionContainerStyles = css`
 padding:10px 15px;
 cursor:pointer
`
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 70px;

`

export const LogoContainer = styled(Link)`
 
 height: 100%;
 width: 170px;
 padding: 1rem;
 position: relative;

 .logo {
      height: 100%;
      width: 50%;
    }
    .heading{
    width: 50%;
    position:absolute ;
    line-height: 2.5rem;
   
    }

`

export const OptionContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`

export const OptionContainerDiv = styled.div`
${optionContainerStyles}
`;
export const OptionContainerLink = styled(Link)`
${optionContainerStyles}
`;
