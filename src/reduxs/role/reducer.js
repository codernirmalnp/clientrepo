import {
  GET_ALL_ROLE,
  GET_ALL_ROLE_SUCCESS,
  GET_ALL_ROLE_ERROR,
  GET_MODULE_LIST,
  GET_MODULE_LIST_SUCCESS,
  GET_MODULE_LIST_ERROR,
  GET_ROLE_LIST,
  GET_ROLE_LIST_SUCCESS,
  GET_ROLE_LIST_ERROR,
  ADD_ROLE,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_ERROR,
  GET_ROLE,
  GET_ROLE_SUCCESS,
  GET_ROLE_ERROR,
  EDIT_ROLE,
  EDIT_ROLE_SUCCESS,
  EDIT_ROLE_ERROR,
  DELETE_ROLE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_ERROR,
  DELETE_MULTIPLE_ROLE,
  DELETE_MULTIPLE_ROLE_SUCCESS,
  DELETE_MULTIPLE_ROLE_ERROR,
  RESET_ROLE,
} from "../actions";

const INIT_STATE = {
  dbParam: null,
  roles: null,
  moduleList: null,
  roleList: null,
  roleData: null,
  roleId: null,
  roleIds: null,
  success: false,
  message: null,
  loading1: false,
  loading: false,
  error: null,
};

const roleReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_ROLE:
      return {
        ...state,
        error: null,
      };
    case GET_ALL_ROLE_SUCCESS:
      return {
        ...state,
        roles: action.payload,
        error: null,
      };
    case GET_ALL_ROLE_ERROR:
      return {
        ...state,
        roles: null,
        error: action.payload,
      };
    case GET_MODULE_LIST:
      return { ...state, error: null };
    case GET_MODULE_LIST_SUCCESS:
      return {
        ...state,
        moduleList: action.payload,
        error: null,
      };
    case GET_MODULE_LIST_ERROR:
      return {
        ...state,
        moduleList: null,
        error: action.payload,
      };
    case GET_ROLE_LIST:
      return {
        ...state,
        loading: true,
        roleData: null,
        roleId: null,
        roleIds: null,
        error: null,
      };
    case GET_ROLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        roleList: action.payload,
        error: null,
      };
    case GET_ROLE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        roleList: null,
        error: action.payload,
      };
    case ADD_ROLE:
      return { ...state, loading: true, error: null };
    case ADD_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case ADD_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case GET_ROLE:
      return { ...state, error: null };
    case GET_ROLE_SUCCESS:
      return {
        ...state,
        roleData: action.payload,
        error: null,
      };
    case GET_ROLE_ERROR:
      return {
        ...state,
        roleData: null,
        error: action.payload,
      };
    case EDIT_ROLE:
      return { ...state, loading: true, error: null };
    case EDIT_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case EDIT_ROLE_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_ROLE:
      return { ...state, loading1: true, error: null };
    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_ROLE_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case DELETE_MULTIPLE_ROLE:
      return { ...state, loading1: true, error: null };
    case DELETE_MULTIPLE_ROLE_SUCCESS:
      return {
        ...state,
        loading1: false,
        success: action.payload.success,
        message: action.payload.message,
        error: null,
      };
    case DELETE_MULTIPLE_ROLE_ERROR:
      return {
        ...state,
        loading1: false,
        success: false,
        message: null,
        error: action.payload,
      };
    case RESET_ROLE:
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
export default roleReducer;
