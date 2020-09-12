import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection/CollectionPage.component";
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from "../../Redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import {selectCollectionFetching,selectCollectionsLoaded} from '../../Redux/shop/Shop.selectors';
import {createStructuredSelector} from "reselect";


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }


    componentDidMount() {

        const {fetchingCollection} = this.props;
        fetchingCollection();
    }

    render() {
        const {match, isCollectionFetching,isCollectionsLoaded} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner {...props} isLoading={!isCollectionsLoaded}/>}/>
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner {...props} isLoading={!isCollectionsLoaded}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchingCollection: () => dispatch(fetchCollectionStartAsync())
})
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionFetching,
    isCollectionsLoaded:selectCollectionsLoaded

})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);