const GET_DATA = "GET_DATA";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

export const setDataCreator = (payload) => ({ type: GET_DATA, payload });
export const setLoadingCreator = () => ({ type: SET_LOADING });
export const setErrorCreator = (payload) => ({ type: SET_ERROR, payload });

const initState = {
  response: [],
  error: null,
  loading: true,
};
const fetchingReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        response: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
};

export default fetchingReducer;
