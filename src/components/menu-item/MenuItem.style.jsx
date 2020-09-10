import styled, {css} from 'styled-components';

const isLarge = props => {
    return props.size === 'large' ? largeStyles : normalStyle
}

export const MenuItemContainer = styled.div`
  min-width: 350px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 .75rem 1.5rem;
  position: relative;
  overflow: hidden;
  ${isLarge}
  
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
`;

const largeStyles = css`
  height: 380px;
`
const normalStyle = css`

 height: 240px;
`

export const MenuItemBackgroundImageContainer = styled.div`
  height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;
`;
export const MenuItemContentContainer = styled.div`
 height: 9rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    font-family: 'Montserrat Subrayada', sans-serif;
    position: absolute;
`;
export const MenuItemTitleContainer = styled.h1`
  font-weight: bold;
      margin-bottom: .6rem;
      font-size: 2.2rem;
      color: black;
`;
export const MenuItemSubtitleContainer = styled.span`
 font-size: 1.6rem;
      font-weight: lighter;
`;