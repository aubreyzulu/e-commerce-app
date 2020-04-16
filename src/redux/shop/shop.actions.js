import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils'
import ShopActionTypes from './shop.type';

const fetchCollectionStart = () => (
  { type: ShopActionTypes.FETCH_COLLECTIONS_START }
)

const fetchCollectionSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})



export const fetchCollectionAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionStart())

    collectionRef.get().then(snapShot => {
      const collectionsMap = convertCollectionsToMap(snapShot)
      dispatch(fetchCollectionSuccess(collectionsMap))
    }).catch(error => dispatch(fetchCollectionFailure(error.message)))
  }
}

