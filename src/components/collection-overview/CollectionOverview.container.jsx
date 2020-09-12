import React from 'react';
import {compose} from 'redux'
import {createStructuredSelector} from "reselect";
import {selectCollectionFetching} from "../../Redux/shop/Shop.selectors";
import {connect} from "react-redux";
import CollectionOverview from "./CollectionOverview.component";
import WithSpinner from "../with-spinner/WithSpinner.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;