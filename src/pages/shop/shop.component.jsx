import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import CollectionContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'


const ShopPage = ({ fetchCollectionStart, match }) => {

  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart])

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  )

}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),

})


export default connect(null, mapDispatchToProps)(ShopPage);
