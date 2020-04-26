import { compose } from 'redux'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectLoadingFetch } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with-spinner/with-spinner.components';
import CollectionsOverview from './collections-overview.component';


const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingFetch
})



const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

export default CollectionOverviewContainer;
