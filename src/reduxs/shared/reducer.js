import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  GET_PERMISSION,
  GET_PERMISSION_SUCCESS,
  GET_PERMISSION_ERROR,
  GET_COUNTRY_LIST,
  GET_COUNTRY_LIST_SUCCESS,
  GET_COUNTRY_LIST_ERROR,
  GET_CONFIG_CHOICE,
  GET_CONFIG_CHOICE_SUCCESS,
  GET_CONFIG_CHOICE_ERROR,
  GET_MULTIPLE_CONFIG_CHOICE,
  GET_MULTIPLE_CONFIG_CHOICE_SUCCESS,
  GET_MULTIPLE_CONFIG_CHOICE_ERROR,
} from "../actions";

const INIT_STATE = {
  currentUserData: null,
  permission: null,
  countryList: "",
  category: null,
  categories: null,
  choiceList: null,
  multipleChoiceList: null,
  success: false,
  message: null,
  loading: false,
  error: null,
};

const sharedReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_USER:
      return { ...state, error: null };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUserData: action.payload,
        error: null,
      };
    case GET_CURRENT_USER_ERROR:
      return {
        ...state,
        currentUserData: null,
        error: action.payload,
      };
    case GET_PERMISSION:
      return { ...state, error: null };
    case GET_PERMISSION_SUCCESS:
      return {
        ...state,
        permission: action.payload,
        error: null,
      };
    case GET_PERMISSION_ERROR:
      return {
        ...state,
        permission: null,
        error: action.payload,
      };
    case GET_COUNTRY_LIST:
      return { ...state, error: null };
    case GET_COUNTRY_LIST_SUCCESS:
      return {
        ...state,
        countryList: action.payload,
        error: null,
      };
    case GET_COUNTRY_LIST_ERROR:
      return {
        ...state,
        countryList: null,
        error: action.payload,
      };
    case GET_CONFIG_CHOICE:
      return {
        ...state,
        error: null,
      };
    case GET_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        choiceList: action.payload,
        error: null,
      };
    case GET_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        choiceList: null,
        error: action.payload,
      };
    case GET_MULTIPLE_CONFIG_CHOICE:
      return {
        ...state,
        error: null,
      };
    case GET_MULTIPLE_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        multipleChoiceList: action.payload,
        error: null,
      };
    case GET_MULTIPLE_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        multipleChoiceList: null,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
export default sharedReducer;
