import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection/CollectionPage.component";
import {convertCollectionSnapShotToMap, firestore} from "../../firebase/FireBase.util";
import {connect} from 'react-redux';
import {updateCollections} from "../../Redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    }
    unsubscribeFromSnapShot = null

    componentDidMount() {
        const collectionRef = firestore.collection('collections');


        this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapShot => {
            const collections = convertCollectionSnapShotToMap(snapShot);
            this.props.updateCollection(collections);
            this.setState({
                loading: false
            })
        })


    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner {...props} isLoading={this.state.loading}/>}/>
                <Route path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner {...props} isLoading={this.state.loading}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollection: collection => dispatch(updateCollections(collection))
})
export default connect(null, mapDispatchToProps)(ShopPage);