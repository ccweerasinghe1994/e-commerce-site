import React from 'react'
import {selectCollection} from "../../Redux/shop/Shop.selectors";
import {connect} from 'react-redux';
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import {CollectionPageContainer, ItemsContainer, TitleContainer} from "./CollectionPage.styles";

const CollectionPage = ({collection}) => {
    const {items} = collection
    return (
        <CollectionPageContainer >
            <TitleContainer >{collection.title} Page</TitleContainer>
            <ItemsContainer >
                {items.map(item=><CollectionItem key={item.id} item={item} />)}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);