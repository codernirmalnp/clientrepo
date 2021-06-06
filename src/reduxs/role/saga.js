import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import RoleService from "../../services/role-service";
import TableDataService from "../../services/table-data-service";
import {
  GET_ALL_ROLE,
  GET_MODULE_LIST,
  GET_ROLE_LIST,
  ADD_ROLE,
  GET_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
  DELETE_MULTIPLE_ROLE,
} from "../actions";
import {
  getAllRoleSuccess,
  getAllRoleError,
  getModuleListSuccess,
  getModuleListError,
  getRoleList,
  getRoleListSuccess,
  getRoleListError,
  addRoleSuccess,
  addRoleError,
  getRoleSuccess,
  getRoleError,
  editRoleSuccess,
  editRoleError,
  deleteRoleSuccess,
  deleteRoleError,
  deleteMultipleRoleSuccess,
  deleteMultipleRoleError,
} from "./action";
import { toast } from "react-toastify";
import { parseMessage } from "../../helpers/util";
import ToastElement from "../../components/toast";

export function* watchGetAllRole() {
  yield takeEvery(GET_ALL_ROLE, getAllRole);
}

const getAllRoleAsync = async () => {
  return RoleService.getAllRole();
};

function* getAllRole() {
  try {
    const response = yield call(getAllRoleAsync);
    if (response.data.success) {
      yield put(getAllRoleSuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getAllRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getAllRoleError(error.response.data.message));
  }
}

export function* watchGetModuleList() {
  yield takeEvery(GET_MODULE_LIST, getModuleList);
}

const getModuleListAsync = async () => {
  return RoleService.getModuleList();
};

function* getModuleList() {
  try {
    const response = yield call(getModuleListAsync);
    if (response.data.success) {
      yield put(getModuleListSuccess(response.data.data));
    } else {
      yield put(getModuleListError(response.data.message));
    }
  } catch (error) {
    yield put(getModuleListError(error.response.data.message));
  }
}

export function* watchGetRoleList() {
  yield takeEvery(GET_ROLE_LIST, getRoleListAc);
}

const getRoleListAsync = async (dbParam) => {
  return TableDataService.getAllData(
    "roles",
    dbParam?.orgId || "",
    dbParam?.search || "",
    dbParam?.searchFields || "",
    dbParam?.sortOrder || "asc",
    dbParam?.page || 1,
    dbParam?.pageSize || 10,
    dbParam?.activeCol || "id",
    dbParam?.statusId || null
  );
};

function* getRoleListAc({ payload }) {
  try {
    const response = yield call(getRoleListAsync, payload.dbParam);
    if (response.data.success) {
      yield put(getRoleListSuccess(response.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getRoleListError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getRoleListError(error.response.data.message));
  }
}

export function* watchAddRole() {
  yield takeEvery(ADD_ROLE, addRole);
}

const addRoleAsync = async (data) => {
  return RoleService.addRole(data);
};

function* addRole({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(addRoleAsync, payload.roleData);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(addRoleSuccess(response.data.success, response.data.message));
      history.push(`/user-management/role`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(addRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement
        type="error"
        message={parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )}
      />,
      {
        containerId: "default",
      }
    );
    yield put(addRoleError(error.response.data.message));
  }
}

export function* watchGetRole() {
  yield takeEvery(GET_ROLE, getRole);
}

const getRoleAsync = async (id) => {
  return RoleService.getRole(id);
};

function* getRole({ payload }) {
  try {
    const response = yield call(getRoleAsync, payload.roleId);
    if (response.data.success) {
      yield put(getRoleSuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getRoleError(error.response.data.message));
  }
}

export function* watchEditRole() {
  yield takeEvery(EDIT_ROLE, editRole);
}

const editRoleAsync = async (data, id) => {
  return RoleService.editRole(data, id);
};

function* editRole({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(
      editRoleAsync,
      payload.roleData,
      payload.roleId
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(editRoleSuccess(response.data.success, response.data.message));
      history.push(`/user-management/role`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(editRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement
        type="error"
        message={parseMessage(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message
        )}
      />,
      { containerId: "default" }
    );
    yield put(editRoleError(error.response.data.message));
  }
}

export function* watchDeleteRole() {
  yield takeEvery(DELETE_ROLE, deleteRole);
}

const deleteRoleAsync = async (id) => {
  return RoleService.deleteRole(id);
};

function* deleteRole({ payload }) {
  try {
    const response = yield call(deleteRoleAsync, payload.roleId);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteRoleSuccess(response.data.success, response.data.message)
      );
      // Fetch updated role list
      yield put(getRoleList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteRoleError(error.response.data.message));
  }
}

export function* watchDeleteMultipleRole() {
  yield takeEvery(DELETE_MULTIPLE_ROLE, deleteMultipleRole);
}

const deleteMultipleRoleAsync = async (ids) => {
  return RoleService.deleteMultipleRole(ids);
};

function* deleteMultipleRole({ payload }) {
  try {
    const response = yield call(deleteMultipleRoleAsync, payload.roleIds);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteMultipleRoleSuccess(response.data.success, response.data.message)
      );
      // Fetch updated role list
      yield put(getRoleList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteMultipleRoleError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteMultipleRoleError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllRole),
    fork(watchGetModuleList),
    fork(watchGetRoleList),
    fork(watchAddRole),
    fork(watchGetRole),
    fork(watchEditRole),
    fork(watchDeleteRole),
    fork(watchDeleteMultipleRole),
  ]);
}
