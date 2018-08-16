import {
  ONCHANGE_SEARCH,
  SEARCH_REQUESTING,
  FETCH_USER,
  FETCH_USERDATA,
  FETCH_REPOS,
  FETCHING_REPOS,
  TOTAL_PAGES,
  CHANGE_PAGE
} from "./types";
import axios from "axios";
export const onChange = event => dispatch => {
  dispatch({
    type: ONCHANGE_SEARCH,
    payload: event
  });
};



export const fetchRepo = link => dispatch => {
  dispatch({
    type:FETCHING_REPOS
  })
  axios.get(link).then(response=>{
    dispatch({
      type:FETCH_REPOS,
      payload: response.data
    })
  })
};

export const fetchUser = username => dispatch => {
  dispatch({
    type: SEARCH_REQUESTING
  });
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    setTimeout(() => {
      dispatch({
        type: FETCH_USERDATA,
        payload: response.data
      });
    }, 500);
  });
};

export const submitSearch = (data,number) => dispatch => {
  dispatch({
    type: SEARCH_REQUESTING
  });
  axios.get(`https://api.github.com/search/users?q=${data}&page=${number}`).then(response => {
    setTimeout(() => {
      const totalpage = response.data.total_count/30;
      dispatch({
        type:CHANGE_PAGE,
        payload:number
      })
      dispatch({
        type:TOTAL_PAGES,
        payload: Math.ceil(totalpage)
      })
      dispatch({
        type: FETCH_USER,
        payload: response.data
      });
    }, 500);
  });
};
