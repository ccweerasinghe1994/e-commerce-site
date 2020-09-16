import styled from 'styled-components';
import {ReactComponent as ShoppingBagIcon} from '../../assets/shoopingBag.svg';

export const CartIconContainer = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;
export const ShoppingIconContainer = styled(ShoppingBagIcon)`
    width: 24px;
    height: 24px;
`;
export const ItemCountContainer = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;