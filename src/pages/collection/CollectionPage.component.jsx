import React from 'react'
import './CollectionPage.styles.scss'
import {selectCollection} from "../../Redux/shop/Shop.selectors";
import {connect} from 'react-redux';

const CollectionPage = ({collection}) => {
    console.log("collection------->",collection)
    return (
        <div className='collection-page'>
            <h1>Collection Page</h1>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);