import React from 'react'
import './CollectionOverview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import CollectionPreview from "../PreviewCollection/PreviewCollection.componnent";
import {selectCollectionPreview} from "../../Redux/shop/Shop.selectors";


const CollectionOverview = ({collections}) => {
    return (
        <div className="collection-overview">
            {
                collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id}  {...otherProps}/>
                ))
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview);