import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import CollectionContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'


class ShopPage extends React.Component {

  componentDidMount() {
    this.props.fetchCollectionStart()
  }
  render() {
    const { match } = this.props;

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
}


const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),

})


export default connect(null, mapDispatchToProps)(ShopPage);
