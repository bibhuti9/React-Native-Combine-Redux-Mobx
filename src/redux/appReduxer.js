const initialState = {
  count: 0,
};

const FETCH_ADD_TO_CART = 'FETCH_ADD_TO_CART';

export const fetchCount = ({count}) => {
  return {
    type: FETCH_ADD_TO_CART,
    count: count,
  };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_TO_CART:
      return {
        ...state,
        count: action.count,
      };
    default:
      return {...state};
  }
};
export const selectCount = state => state.apiReducer.count;
export default appReducer;
