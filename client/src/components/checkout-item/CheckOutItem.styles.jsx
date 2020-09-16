import styled, {css} from 'styled-components';

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

`;
export const CheckOutItemImageContainer = styled.div`
 width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
`;

const commonstyle = css`
width: 23%;
`
export const CheckOutItemNameContainer = styled.div`
${commonstyle}
`;
export const CheckOutItemQuantityContainer = styled.div`
${commonstyle};
  display: flex;
    padding-left: 20px;
`;
export const CheckOutItemValueContainer = styled.div`
 margin: 0 10px;
`;
export const CheckOutItemPriceContainer = styled.div`
${commonstyle}
`;
export const CheckOutItemArrowContainer = styled.div`
  cursor: pointer
`;
export const CheckOutItemRemoveButtonContainer = styled.div`
 padding-left: 12px;
    cursor: pointer;
`;