import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/diamond.svg';


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
`
export const LogoIcon = styled(Logo)`
 height: 100%;
 width: 50%;
`

export const HeadingContainer = styled.span`
    width: 50%;
    position:absolute ;
    line-height: 2.5rem;
`
export const OptionContainer = styled.div`

    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`


export const OptionContainerLink = styled(Link)`
 padding:10px 15px;
 cursor:pointer
`;
