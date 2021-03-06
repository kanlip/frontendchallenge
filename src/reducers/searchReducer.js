import {
  ONCHANGE_SEARCH,
  SEARCH_REQUESTING,
  FETCH_USER,
  FETCH_USERDATA,
  FETCH_REPOS,
  FETCHING_REPOS,
  TOTAL_PAGES,
  CHANGE_PAGE,
  TOTAL_PAGES_REPOS,
  CHANGE_PAGE_REPOS
} from "../actions/types";

const initialState = {
  requesting: false,
  username: "",
  users: [],
  user: {},
  fetching: false,
  repos: [],
  page:1,
  totalPage: 0,
  pageRepo:1,
  totalPageRepo:0
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
        requesting: action.payload,
      };
    case FETCH_USER:
      return {
        ...state,
        requesting: false,
        users: action.payload
      };
    case FETCH_USERDATA:
      return{
        ...state,
        requesting:false,
        user: action.payload
      }
    case FETCHING_REPOS:
      return{
        ...state,
        fetching:true
      }
    case FETCH_REPOS:
      return{
        ...state,
        fetching:false,
        repos: action.payload
      }
    case TOTAL_PAGES:
      return{
        ...state,
        totalPage: action.payload
      }
    case CHANGE_PAGE:
      return{
        ...state,
        page:action.payload
      }
    case CHANGE_PAGE_REPOS:
      return{
        ...state,
        pageRepo: action.payload
      }
    case TOTAL_PAGES_REPOS:
      return{
        ...state,
        totalPageRepo: action.payload
      }
    default:
      return state;
  }
};
