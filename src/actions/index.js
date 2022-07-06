// 3.***************** Creating Action Creators ******************

import { MARK_FAVOURITE, REMOVE_FAVOURITE } from "../constants/ActionTypes";

export const markFavourite = (payload) => ({
  type: MARK_FAVOURITE,
  payload,
});

export const removeFavourite = (payload) => ({
  type: REMOVE_FAVOURITE,
  payload,
});
