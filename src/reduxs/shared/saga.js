import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import SharedService from "../../services/shared-service";
import {
  GET_CURRENT_USER,
  GET_PERMISSION,
  GET_COUNTRY_LIST,
  GET_CONFIG_CHOICE,
  GET_MULTIPLE_CONFIG_CHOICE,
} from "../actions";
import {
  getCurrentUserSuccess,
  getCurrentUserError,
  getPermissionSuccess,
  getPermissionError,
  getCountryListSuccess,
  getCountryListError,
  getConfigChoiceSuccess,
  getConfigChoiceError,
  getMultipleConfigChoiceSuccess,
  getMultipleConfigChoiceError,
} from "./action";

export function* watchGetCurrentUser() {
  yield takeEvery(GET_CURRENT_USER, getCurrentUser);
}

const getCurrentUserAsync = async (id) => {
  return SharedService.getCurrentUser(id);
};

function* getCurrentUser() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = yield call(getCurrentUserAsync, currentUser.id);
    if (response.data.success) {
      yield put(getCurrentUserSuccess(response.data.data));
    } else {
      yield put(getCurrentUserError(response.data.message));
    }
  } catch (error) {
    yield put(getCurrentUserError(error.response.data.message));
  }
}

export function* watchGetPermission() {
  yield takeEvery(GET_PERMISSION, getPermission);
}

const getPermissionAsync = async (id) => {
  return SharedService.getPermission(id);
};

function* getPermission() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  try {
    const response = yield call(getPermissionAsync, currentUser.roleId);
    if (response.data.success) {
      yield put(getPermissionSuccess(response.data.data));
    } else {
      yield put(getPermissionError(response.data.message));
    }
  } catch (error) {
    yield put(getPermissionError(error.response.data.message));
  }
}

export function* watchGetCountryList() {
  yield takeEvery(GET_COUNTRY_LIST, getCountryList);
}

const getCountryListAsync = async () => {
  return SharedService.getCountryList();
};

function* getCountryList() {
  try {
    const response = yield call(getCountryListAsync);
    if (response.data.success) {
      yield put(getCountryListSuccess(response.data.data));
    } else {
      yield put(getCountryListError(response.data.message));
    }
  } catch (error) {
    yield put(getCountryListError(error.response.data.message));
  }
}

export function* watchGetConfigChoice() {
  yield takeEvery(GET_CONFIG_CHOICE, getConfigChoice);
}

const getConfigChoiceAsync = async (category) => {
  return SharedService.getConfigChoice(category);
};

function* getConfigChoice({ payload }) {
  try {
    const response = yield call(getConfigChoiceAsync, payload.category);
    if (response.data.success) {
      yield put(getConfigChoiceSuccess(response.data.data));
    } else {
      yield put(getConfigChoiceError(response.data.message));
    }
  } catch (error) {
    yield put(getConfigChoiceError(error.response.data.message));
  }
}

export function* watchGetMultipleConfigChoice() {
  yield takeEvery(GET_MULTIPLE_CONFIG_CHOICE, getMultipleConfigChoice);
}

const getMultipleConfigChoiceAsync = async (categories) => {
  return SharedService.getMultipleConfigChoice(categories);
};

function* getMultipleConfigChoice({ payload }) {
  try {
    const response = yield call(
      getMultipleConfigChoiceAsync,
      payload.categories
    );
    if (response.data.success) {
      yield put(getMultipleConfigChoiceSuccess(response.data.data));
    } else {
      yield put(getMultipleConfigChoiceError(response.data.message));
    }
  } catch (error) {
    yield put(getMultipleConfigChoiceError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetCurrentUser),
    fork(watchGetPermission),
    fork(watchGetCountryList),
    fork(watchGetConfigChoice),
    fork(watchGetMultipleConfigChoice),
  ]);
}
