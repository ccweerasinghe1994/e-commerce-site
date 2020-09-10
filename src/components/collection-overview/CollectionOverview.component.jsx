import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import CollectionPreview from "../PreviewCollection/PreviewCollection.componnent";
import {selectCollectionPreview} from "../../Redux/shop/Shop.selectors";
import {CollectionOverviewContainer} from "./CollectionOverview.styles";


const CollectionOverview = ({collections}) => {
    return (
        <CollectionOverviewContainer className="collection-overview">
            {
                collections.map(({id, ...otherProps}) => (
                    <CollectionPreview key={id}  {...otherProps}/>
                ))
            }
        </CollectionOverviewContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview);