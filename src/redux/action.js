import {fetchCount} from './appReduxer';
export function incrementCount() {
  return async (dispatch, getState) => {
    const state = getState();
    await dispatch(
      fetchCount({
        count: state.apiReducer.count + 1,
      }),
    );
  };
}
