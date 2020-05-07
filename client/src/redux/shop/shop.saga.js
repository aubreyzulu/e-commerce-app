import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsToMap } from '../../firebase/firebase.utils'
import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions'


import ShopActionTypes from './shop.type';

function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get()
    const collectionsToMap = yield call(convertCollectionsToMap, snapShot)
    yield put(fetchCollectionSuccess(collectionsToMap))
  } catch (error) {
    yield put(fetchCollectionFailure(error.message))
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}


export default function* shopSagas() {
  yield all([call(fetchCollectionStart)])
}