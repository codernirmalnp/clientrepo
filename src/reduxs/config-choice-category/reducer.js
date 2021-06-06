import {
  GET_ALL_CONFIG_CHOICE_CATEGORY,
  GET_ALL_CONFIG_CHOICE_CATEGORY_SUCCESS,
  GET_ALL_CONFIG_CHOICE_CATEGORY_ERROR,
  GET_CONFIG_CHOICE_CATEGORY_LIST,
  GET_CONFIG_CHOICE_CATEGORY_LIST_SUCCESS,
  GET_CONFIG_CHOICE_CATEGORY_LIST_ERROR,
  ADD_CONFIG_CHOICE_CATEGORY,
  ADD_CONFIG_CHOICE_CATEGORY_SUCCESS,
  ADD_CONFIG_CHOICE_CATEGORY_ERROR,
  GET_CONFIG_CHOICE_CATEGORY,
  GET_CONFIG_CHOICE_CATEGORY_SUCCESS,
  GET_CONFIG_CHOICE_CATEGORY_ERROR,
  EDIT_CONFIG_CHOICE_CATEGORY,
  EDIT_CONFIG_CHOICE_CATEGORY_SUCCESS,
  EDIT_CONFIG_CHOICE_CATEGORY_ERROR,
  DELETE_CONFIG_CHOICE_CATEGORY,
  DELETE_CONFIG_CHOICE_CATEGORY_SUCCESS,
  DELETE_CONFIG_CHOICE_CATEGORY_ERROR,
  DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY,
  DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_SUCCESS,
  DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_ERROR,
  RESET_CONFIG_CHOICE_CATEGORY,
} from "../actions";

const INIT_STATE = {
  dbParam: null,
  configChoiceCategories: null,
  configChoiceCategoryList: null,
  configChoiceCategoryData: null,
  configChoiceCategoryId: null,
  configChoiceCategoryIds: null,
  success: false,
  message: null,
  loading1: false,
  loading: false,
  error: null,
};

const configChoiceCategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_CONFIG_CHOICE_CATEGORY:
      return {
        ...state,
        error: null,
      };
    case GET_ALL_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        configChoiceCategories: action.payload,
        error: null,
      };
    case GET_ALL_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        configChoiceCategories: null,
        error: action.payload,
      };
    case GET_CONFIG_CHOICE_CATEGORY_LIST:
      return {
        ...state,
        loading: true,
        configChoiceCategoryData: null,
        configChoiceCategoryId: null,
        configChoiceCategoryIds: null,
        error: null,
      };
    case GET_CONFIG_CHOICE_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        configChoiceCategoryList: action.payload,
        error: null,
      };
    case GET_CONFIG_CHOICE_CATEGORY_LIST_ERROR:
      return {
        ...state,
        loading: false,
        configChoiceCategoryList: null,
        error: action.payload,
      };
    case ADD_CONFIG_CHOICE_CATEGORY:
      return { ...state, loading: true, error: null };
    case ADD_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case ADD_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case GET_CONFIG_CHOICE_CATEGORY:
      return { ...state, error: null };
    case GET_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        configChoiceCategoryData: action.payload,
        error: null,
      };
    case GET_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        configChoiceCategoryData: null,
        error: action.payload,
      };
    case EDIT_CONFIG_CHOICE_CATEGORY:
      return { ...state, loading: true, error: null };
    case EDIT_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case EDIT_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_CONFIG_CHOICE_CATEGORY:
      return { ...state, loading1: true, error: null };
    case DELETE_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY:
      return { ...state, loading1: true, error: null };
    case DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case RESET_CONFIG_CHOICE_CATEGORY:
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
export default configChoiceCategoryReducer;
