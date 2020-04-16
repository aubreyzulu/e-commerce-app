import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.components';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapShot => {
      const collectionsMap = convertCollectionsToMap(snapShot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) =>
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              {...props}
            />}
        />

        <Route
          path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionPageWithSpinner
              isLoading={loading}
              {...props} />}
        />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);
