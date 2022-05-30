const INCREMENT = "increment";
// create DECREMENT type
const DECREMENT = "decrement";
const INCREMENTBYVALUE = "incrementbyvalue";
const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});
// write new function name decrement
export const decrement = () => ({
  type: DECREMENT,
});
export const incrementByValue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    // add new case for decrement
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;
