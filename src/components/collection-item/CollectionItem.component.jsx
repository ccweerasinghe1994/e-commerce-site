import React from "react";

import CustomButton from "../custom-button/CustomButton.component";
import {connect} from "react-redux";
import {addItem} from "../../Redux/cart/cart.action";
import {
    CollectionItemContainer,
    CollectionItemFooterContainer,
    CollectionItemImageContainer, CollectionItemNameContainer, CollectionItemPriceContainer
} from "./CollectionItem.styles";


const CollectionItem = ({item, addItem}) => {
    const {imageUrl, name, price} = item;
    return (
        <CollectionItemContainer className='collection-item'>
            <CollectionItemImageContainer className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <CollectionItemFooterContainer className="collection-footer">
                <CollectionItemNameContainer className="name">{name}</CollectionItemNameContainer>
                <CollectionItemPriceContainer className="price">${price}</CollectionItemPriceContainer>
            </CollectionItemFooterContainer>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </CollectionItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
