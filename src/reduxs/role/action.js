export const GET_ALL_ROLE = "GET_ALL_ROLE";
export const GET_ALL_ROLE_SUCCESS = "GET_ALL_ROLE_SUCCESS";
export const GET_ALL_ROLE_ERROR = "GET_ALL_ROLE_ERROR";
export const GET_MODULE_LIST = "GET_MODULE_LIST";
export const GET_MODULE_LIST_SUCCESS = "GET_MODULE_LIST_SUCCESS";
export const GET_MODULE_LIST_ERROR = "GET_MODULE_LIST_ERROR";
export const GET_ROLE_LIST = "GET_ROLE_LIST";
export const GET_ROLE_LIST_SUCCESS = "GET_ROLE_LIST_SUCCESS";
export const GET_ROLE_LIST_ERROR = "GET_ROLE_LIST_ERROR";
export const ADD_ROLE = "ADD_ROLE";
export const ADD_ROLE_SUCCESS = "ADD_ROLE_SUCCESS";
export const ADD_ROLE_ERROR = "ADD_ROLE_ERROR";
export const GET_ROLE = "GET_ROLE";
export const GET_ROLE_SUCCESS = "GET_ROLE_SUCCESS";
export const GET_ROLE_ERROR = "GET_ROLE_ERROR";
export const EDIT_ROLE = "EDIT_ROLE";
export const EDIT_ROLE_SUCCESS = "EDIT_ROLE_SUCCESS";
export const EDIT_ROLE_ERROR = "EDIT_ROLE_ERROR";
export const DELETE_ROLE = "DELETE_ROLE";
export const DELETE_ROLE_SUCCESS = "DELETE_ROLE_SUCCESS";
export const DELETE_ROLE_ERROR = "DELETE_ROLE_ERROR";
export const DELETE_MULTIPLE_ROLE = "DELETE_MULTIPLE_ROLE";
export const DELETE_MULTIPLE_ROLE_SUCCESS = "DELETE_MULTIPLE_ROLE_SUCCESS";
export const DELETE_MULTIPLE_ROLE_ERROR = "DELETE_MULTIPLE_ROLE_ERROR";
export const RESET_ROLE = "RESET_ROLE";

export const getAllRole = () => ({
  type: GET_ALL_ROLE,
  payload: {},
});

export const getAllRoleSuccess = (roles) => ({
  type: GET_ALL_ROLE_SUCCESS,
  payload: roles,
});

export const getAllRoleError = (error) => ({
  type: GET_ALL_ROLE_ERROR,
  payload: error,
});

export const getRoleList = (dbParam) => ({
  type: GET_ROLE_LIST,
  payload: { dbParam },
});

export const getRoleListSuccess = (roleList) => ({
  type: GET_ROLE_LIST_SUCCESS,
  payload: roleList,
});

export const getRoleListError = (error) => ({
  type: GET_ROLE_LIST_ERROR,
  payload: error,
});

export const getModuleList = () => ({
  type: GET_MODULE_LIST,
  payload: {},
});

export const getModuleListSuccess = (moduleList) => ({
  type: GET_MODULE_LIST_SUCCESS,
  payload: moduleList,
});

export const getModuleListError = (error) => ({
  type: GET_MODULE_LIST_ERROR,
  payload: error,
});

export const addRole = (roleData, history) => ({
  type: ADD_ROLE,
  payload: { roleData, history },
});

export const addRoleSuccess = (success, message) => ({
  type: ADD_ROLE_SUCCESS,
  payload: { success, message },
});

export const addRoleError = (error) => ({
  type: ADD_ROLE_ERROR,
  payload: error,
});

export const getRole = (roleId) => ({
  type: GET_ROLE,
  payload: { roleId },
});

export const getRoleSuccess = (roleData) => ({
  type: GET_ROLE_SUCCESS,
  payload: roleData,
});

export const getRoleError = (error) => ({
  type: GET_ROLE_ERROR,
  payload: error,
});

export const editRole = (roleId, roleData, history) => ({
  type: EDIT_ROLE,
  payload: { roleId, roleData, history },
});

export const editRoleSuccess = (success, message) => ({
  type: EDIT_ROLE_SUCCESS,
  payload: { success, message },
});

export const editRoleError = (error) => ({
  type: EDIT_ROLE_ERROR,
  payload: error,
});

export const deleteRole = (roleId) => ({
  type: DELETE_ROLE,
  payload: { roleId },
});

export const deleteRoleSuccess = (success, message) => ({
  type: DELETE_ROLE_SUCCESS,
  payload: { success, message },
});

export const deleteRoleError = (error) => ({
  type: DELETE_ROLE_ERROR,
  payload: error,
});

export const deleteMultipleRole = (roleIds) => ({
  type: DELETE_MULTIPLE_ROLE,
  payload: { roleIds },
});

export const deleteMultipleRoleSuccess = (success, message) => ({
  type: DELETE_MULTIPLE_ROLE_SUCCESS,
  payload: { success, message },
});

export const deleteMultipleRoleError = (error) => ({
  type: DELETE_MULTIPLE_ROLE_ERROR,
  payload: error,
});

export const resetRole = () => ({
  type: RESET_ROLE,
  payload: {},
});
