import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import ConfigChoiceService from "../../services/config-choice-service";
import TableDataService from "../../services/table-data-service";
import {
  GET_ALL_CONFIG_CHOICE,
  GET_CONFIG_CHOICE_LIST,
  ADD_CONFIG_CHOICE,
  GET_CONFIG_CHOICE_DATA,
  EDIT_CONFIG_CHOICE,
  DELETE_CONFIG_CHOICE,
  DELETE_MULTIPLE_CONFIG_CHOICE,
} from "../actions";
import {
  getAllConfigChoiceSuccess,
  getAllConfigChoiceError,
  getConfigChoiceList,
  getConfigChoiceListSuccess,
  getConfigChoiceListError,
  addConfigChoiceSuccess,
  addConfigChoiceError,
  getConfigChoiceDataSuccess,
  getConfigChoiceDataError,
  editConfigChoiceSuccess,
  editConfigChoiceError,
  deleteConfigChoiceSuccess,
  deleteConfigChoiceError,
  deleteMultipleConfigChoiceSuccess,
  deleteMultipleConfigChoiceError,
} from "./action";
import { toast } from "react-toastify";
import { parseMessage } from "../../helpers/util";
import ToastElement from "../../components/toast";

export function* watchGetAllConfigChoice() {
  yield takeEvery(GET_ALL_CONFIG_CHOICE, getAllConfigChoice);
}

const getAllConfigChoiceAsync = async () => {
  return ConfigChoiceService.getAllConfigChoice();
};

function* getAllConfigChoice() {
  try {
    const response = yield call(getAllConfigChoiceAsync);
    if (response.data.success) {
      yield put(getAllConfigChoiceSuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getAllConfigChoiceError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getAllConfigChoiceError(error.response.data.message));
  }
}

export function* watchGetConfigChoiceList() {
  yield takeEvery(GET_CONFIG_CHOICE_LIST, getConfigChoiceListAc);
}

const getConfigChoiceListAsync = async (dbParam) => {
  return TableDataService.getAllData(
    "",
    dbParam?.orgId || "",
    dbParam?.search || "",
    dbParam?.searchFields || "",
    dbParam?.sortOrder || "asc",
    dbParam?.page || 1,
    dbParam?.pageSize || 10,
    dbParam?.activeCol || "id"
  );
};

function* getConfigChoiceListAc({ payload }) {
  try {
    const response = yield call(getConfigChoiceListAsync, payload.dbParam);
    if (response.data.success) {
      yield put(getConfigChoiceListSuccess(response.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getConfigChoiceListError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getConfigChoiceListError(error.response.data.message));
  }
}

export function* watchAddConfigChoice() {
  yield takeEvery(ADD_CONFIG_CHOICE, addConfigChoice);
}

const addConfigChoiceAsync = async (data) => {
  return ConfigChoiceService.addConfigChoice(data);
};

function* addConfigChoice({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(addConfigChoiceAsync, payload.configChoiceData);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        addConfigChoiceSuccess(response.data.success, response.data.message)
      );
      history.push(`/configuration/config-choice`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(addConfigChoiceError(response.data.message));
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
    yield put(addConfigChoiceError(error.response.data.message));
  }
}

export function* watchGetConfigChoiceData() {
  yield takeEvery(GET_CONFIG_CHOICE_DATA, getConfigChoiceData);
}

const getConfigChoiceDataAsync = async (id) => {
  return ConfigChoiceService.getConfigChoice(id);
};

function* getConfigChoiceData({ payload }) {
  try {
    const response = yield call(getConfigChoiceDataAsync, payload.configChoiceId);
    if (response.data.success) {
      yield put(getConfigChoiceDataSuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getConfigChoiceDataError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getConfigChoiceDataError(error.response.data.message));
  }
}

export function* watchEditConfigChoice() {
  yield takeEvery(EDIT_CONFIG_CHOICE, editConfigChoice);
}

const editConfigChoiceAsync = async (data, id) => {
  return ConfigChoiceService.editConfigChoice(data, id);
};

function* editConfigChoice({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(
      editConfigChoiceAsync,
      payload.configChoiceData,
      payload.configChoiceId
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        editConfigChoiceSuccess(response.data.success, response.data.message)
      );
      history.push(`/configuration/config-choice`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(editConfigChoiceError(response.data.message));
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
    yield put(editConfigChoiceError(error.response.data.message));
  }
}

export function* watchDeleteConfigChoice() {
  yield takeEvery(DELETE_CONFIG_CHOICE, deleteConfigChoice);
}

const deleteConfigChoiceAsync = async (id) => {
  return ConfigChoiceService.deleteConfigChoice(id);
};

function* deleteConfigChoice({ payload }) {
  try {
    const response = yield call(
      deleteConfigChoiceAsync,
      payload.configChoiceId
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteConfigChoiceSuccess(response.data.success, response.data.message)
      );
      // Fetch updated configChoice list
      yield put(getConfigChoiceList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteConfigChoiceError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteConfigChoiceError(error.response.data.message));
  }
}

export function* watchDeleteMultipleConfigChoice() {
  yield takeEvery(DELETE_MULTIPLE_CONFIG_CHOICE, deleteMultipleConfigChoice);
}

const deleteMultipleConfigChoiceAsync = async (ids) => {
  return ConfigChoiceService.deleteMultipleConfigChoice(ids);
};

function* deleteMultipleConfigChoice({ payload }) {
  try {
    const response = yield call(
      deleteMultipleConfigChoiceAsync,
      payload.configChoiceIds
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteMultipleConfigChoiceSuccess(
          response.data.success,
          response.data.message
        )
      );
      // Fetch updated configChoice list
      yield put(getConfigChoiceList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteMultipleConfigChoiceError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteMultipleConfigChoiceError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllConfigChoice),
    fork(watchGetConfigChoiceList),
    fork(watchAddConfigChoice),
    fork(watchGetConfigChoiceData),
    fork(watchEditConfigChoice),
    fork(watchDeleteConfigChoice),
    fork(watchDeleteMultipleConfigChoice),
  ]);
}
