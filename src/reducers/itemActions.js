// 4.*********************** Creating Reducer ********************

const itemActions = (state = { favourites: [] }, action) => {
  switch (action.type) {
    case "MARK_FAVOURITE":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAVOURITE":
      const favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      console.log(favourites);
      return {
        ...state,
        favourites,
      };
    default:
      return state;
  }
};

export default itemActions;
