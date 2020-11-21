const SET_QUERY = "SET_QUERY";
const SET_ERROR = "SET_ERROR";
const SET_LOADING = "SET_LOADING";
const SET_RESULT = "SET_RESULT";

export const setResult = (payload) => ({ type: SET_RESULT, payload });
export const setQuery = (payload) => ({ type: SET_QUERY, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setLoading = () => ({ type: SET_LOADING });

const initState = {
  query: "",
  result: undefined,
  error: null,
  loading: false,
};
const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
