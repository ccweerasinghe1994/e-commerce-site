import React from 'react'
import './CollectionPage.styles.scss'
import {selectCollection} from "../../Redux/shop/Shop.selectors";
import {connect} from 'react-redux';
import CollectionItem from "../../components/collection-item/CollectionItem.component";

const CollectionPage = ({collection}) => {
    const {items} = collection
    return (
        <div className='collection-page'>
            <h1 className='title' >{collection.title} Page</h1>
            <div className="items">
                {items.map(item=><CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);