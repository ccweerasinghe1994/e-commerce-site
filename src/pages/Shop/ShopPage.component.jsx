import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionStart} from "../../Redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverview.container";
import CollectionPageContainer from "../collection/CollectionPage.container";


class ShopPage extends Component {
    state = {
        loading: true
    }


    componentDidMount() {

        const {fetchingCollection} = this.props;
        fetchingCollection();
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>

                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchingCollection: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);