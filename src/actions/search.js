import {
  ONCHANGE_SEARCH,
  SEARCH_REQUESTING,
  FETCH_USER,
  FETCH_USERDATA,
  FETCH_REPOS,
  FETCHING_REPOS,
  TOTAL_PAGES,
  CHANGE_PAGE,
  CHANGE_PAGE_REPOS,
  TOTAL_PAGES_REPOS
} from "./types";
import axios from "axios";
export const onChange = event => dispatch => {
  dispatch({
    type: ONCHANGE_SEARCH,
    payload: event
  });
};

export const fetchRepo = (link, number, total) => dispatch => {
  dispatch({
    type: FETCHING_REPOS
  });
  axios.get(link + `?page=${number}`).then(response => {
    const totalpage = total / 30;
    dispatch({
      type: CHANGE_PAGE_REPOS,
      payload: number
    });
    dispatch({
      type: TOTAL_PAGES_REPOS,
      payload: Math.ceil(totalpage)
    });
    dispatch({
      type: FETCH_REPOS,
      payload: response.data
    });
  });
};

export const fetchUser = username => dispatch => {
  dispatch({
    type: SEARCH_REQUESTING,
    payload: true
  });
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    dispatch({
      type: FETCH_USERDATA,
      payload: response.data
    });
  });
};

export const submitSearch = (data, number) => dispatch => {
  dispatch({
    type: SEARCH_REQUESTING,
    payload: true
  });
  if (data !== "") {
    axios
      .get(`https://api.github.com/search/users?q=${data}&page=${number}`)
      .then(response => {
        const totalpage = response.data.total_count / 30;
        dispatch({
          type: CHANGE_PAGE,
          payload: number
        });
        dispatch({
          type: TOTAL_PAGES,
          payload: Math.ceil(totalpage)
        });
        dispatch({
          type: FETCH_USER,
          payload: response.data
        });
      });
  } else {
    dispatch({
      type: SEARCH_REQUESTING,
      payload: false
    });
  }
};
