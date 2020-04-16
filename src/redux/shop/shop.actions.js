import ShopActionTypes from './shop.type';


export const updateCollections = (collectionMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
  }
}