import React from 'react'
import {createStructuredSelector} from "reselect";
import {selectCollectionsLoaded} from "../../Redux/shop/Shop.selectors";
import {compose} from "redux";
import CollectionPage from "./CollectionPage.component";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(
    CollectionPage
)

export default CollectionPageContainer;