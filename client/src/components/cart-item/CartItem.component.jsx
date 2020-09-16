import React from 'react'
import {
    CartItemContainer,
    ImageContainer,
    ItemsDetailsContainer,
    NameContainer,
    PriceContainer
} from "./CartItem.styles";

const CartItem = ({item: { imageUrl, price, name,quantity}}) => {
    return (
        <CartItemContainer >
            <ImageContainer src={imageUrl} alt="item"/>
            <ItemsDetailsContainer >
                <NameContainer >{name}</NameContainer>
                <PriceContainer >{quantity}&#215;${price}</PriceContainer>
            </ItemsDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;