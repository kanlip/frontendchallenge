import { ONCHANGE_SEARCH, SEARCH_REQUESTING ,FETCH_USER} from "../actions/types";
import { Z_DEFAULT_STRATEGY } from "zlib";

const initialState = {
  requesting: false,
  username: "",
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ONCHANGE_SEARCH:
      return {
        ...state,
        username: action.payload
      };
    case SEARCH_REQUESTING:
      return {
        ...state,
        requesting: true,
        username:""
      };
    case FETCH_USER:
      return {
        ...state,
        requesting: false,
        users: action.payload
      };
    default:
      return state;
  }
};
