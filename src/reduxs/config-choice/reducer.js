import {
  GET_ALL_CONFIG_CHOICE,
  GET_ALL_CONFIG_CHOICE_SUCCESS,
  GET_ALL_CONFIG_CHOICE_ERROR,
  GET_CONFIG_CHOICE_LIST,
  GET_CONFIG_CHOICE_LIST_SUCCESS,
  GET_CONFIG_CHOICE_LIST_ERROR,
  ADD_CONFIG_CHOICE,
  ADD_CONFIG_CHOICE_SUCCESS,
  ADD_CONFIG_CHOICE_ERROR,
  GET_CONFIG_CHOICE_DATA,
  GET_CONFIG_CHOICE_DATA_SUCCESS,
  GET_CONFIG_CHOICE_DATA_ERROR,
  EDIT_CONFIG_CHOICE,
  EDIT_CONFIG_CHOICE_SUCCESS,
  EDIT_CONFIG_CHOICE_ERROR,
  DELETE_CONFIG_CHOICE,
  DELETE_CONFIG_CHOICE_SUCCESS,
  DELETE_CONFIG_CHOICE_ERROR,
  DELETE_MULTIPLE_CONFIG_CHOICE,
  DELETE_MULTIPLE_CONFIG_CHOICE_SUCCESS,
  DELETE_MULTIPLE_CONFIG_CHOICE_ERROR,
  RESET_CONFIG_CHOICE,
} from "../actions";

const INIT_STATE = {
  dbParam: null,
  configChoices: null,
  configChoiceList: null,
  configChoiceData: null,
  configChoiceId: null,
  configChoiceIds: null,
  success: false,
  message: null,
  loading1: false,
  loading: false,
  error: null,
};

const configChoiceReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONFIG_CHOICE:
      return {
        ...state,
        error: null,
      };
    case GET_ALL_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        configChoices: action.payload,
        error: null,
      };
    case GET_ALL_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        configChoices: null,
        error: action.payload,
      };
    case GET_CONFIG_CHOICE_LIST:
      return {
        ...state,
        loading: true,
        configChoiceData: null,
        configChoiceId: null,
        configChoiceIds: null,
        error: null,
      };
    case GET_CONFIG_CHOICE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        configChoiceList: action.payload,
        error: null,
      };
    case GET_CONFIG_CHOICE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        configChoiceList: null,
        error: action.payload,
      };
    case ADD_CONFIG_CHOICE:
      return { ...state, loading: true, error: null };
    case ADD_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case ADD_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case GET_CONFIG_CHOICE_DATA:
      return { ...state, error: null };
    case GET_CONFIG_CHOICE_DATA_SUCCESS:
      return {
        ...state,
        configChoiceData: action.payload,
        error: null,
      };
    case GET_CONFIG_CHOICE_DATA_ERROR:
      return {
        ...state,
        configChoiceData: null,
        error: action.payload,
      };
    case EDIT_CONFIG_CHOICE:
      return { ...state, loading: true, error: null };
    case EDIT_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case EDIT_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_CONFIG_CHOICE:
      return { ...state, loading1: true, error: null };
    case DELETE_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_MULTIPLE_CONFIG_CHOICE:
      return { ...state, loading1: true, error: null };
    case DELETE_MULTIPLE_CONFIG_CHOICE_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_MULTIPLE_CONFIG_CHOICE_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case RESET_CONFIG_CHOICE:
      return {
        ...state,
        loading: false,
        loading1: false,
        success: false,
        message: null,
        error: null,
      };
    default:
      return { ...state };
  }
};
export default configChoiceReducer;
