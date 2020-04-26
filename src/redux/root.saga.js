import { all, call } from 'redux-saga/effects'
import userSaga from './user/user.sagas'
import cartSagas from './cart/cart.sagas'
import shopSagas from './shop/shop.saga';


export default function* rootSaga() {
  yield all([call(shopSagas), call(userSaga), call(cartSagas)])
}