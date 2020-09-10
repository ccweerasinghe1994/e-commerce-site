import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
 display: flex;
  flex-direction: column;
  height: 35rem;
  width: 22vw;
  align-items: center;
  position: relative;
  button {
    width: 70%;
    opacity: 0.7;
    position: absolute;
    top: 65%;
    display: none;
  }
    &:hover{
    .image{
      opacity: 0.7;
    }
    button{
      display: flex;
      opacity: 0.86;
    }
  }
`;
export const CollectionItemImageContainer = styled.div`
 width: 100%;
    height: 95%;
    background-position: center;
    background-size: cover;
    margin-bottom: .5rem;
`;
export const CollectionItemFooterContainer = styled.div`
  width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    margin-bottom: 30px;
`;
export const CollectionItemNameContainer = styled.span`
width: 90%;
      margin-bottom: 1.5rem;
`;
export const CollectionItemPriceContainer = styled.span`
 width: 10%;
`;