import { ONCHANGE_SEARCH, SEARCH_REQUESTING, FETCH_USER } from "./types";
import axios from "axios";
export const onChange = event => dispatch => {
  dispatch({
    type: ONCHANGE_SEARCH,
    payload: event
  });
};
export const submitSearch = data => dispatch => {
  dispatch({
    type: SEARCH_REQUESTING
  });
  axios.get(`https://api.github.com/search/users?q=${data}`).then(response => {
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  });
};
