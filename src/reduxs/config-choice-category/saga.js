import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import ConfigChoiceCategoryService from "../../services/config-choice-category-service";
import TableDataService from "../../services/table-data-service";
import {
  GET_ALL_CONFIG_CHOICE_CATEGORY,
  GET_CONFIG_CHOICE_CATEGORY_LIST,
  ADD_CONFIG_CHOICE_CATEGORY,
  GET_CONFIG_CHOICE_CATEGORY,
  EDIT_CONFIG_CHOICE_CATEGORY,
  DELETE_CONFIG_CHOICE_CATEGORY,
  DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY,
} from "../actions";
import {
  getAllConfigChoiceCategorySuccess,
  getAllConfigChoiceCategoryError,
  getConfigChoiceCategoryList,
  getConfigChoiceCategoryListSuccess,
  getConfigChoiceCategoryListError,
  addConfigChoiceCategorySuccess,
  addConfigChoiceCategoryError,
  getConfigChoiceCategorySuccess,
  getConfigChoiceCategoryError,
  editConfigChoiceCategorySuccess,
  editConfigChoiceCategoryError,
  deleteConfigChoiceCategorySuccess,
  deleteConfigChoiceCategoryError,
  deleteMultipleConfigChoiceCategorySuccess,
  deleteMultipleConfigChoiceCategoryError,
} from "./action";
import { toast } from "react-toastify";
import { parseMessage } from "../../helpers/util";
import ToastElement from "../../components/toast";

export function* watchGetAllConfigChoiceCategory() {
  yield takeEvery(GET_ALL_CONFIG_CHOICE_CATEGORY, getAllConfigChoiceCategory);
}

const getAllConfigChoiceCategoryAsync = async () => {
  return ConfigChoiceCategoryService.getAllConfigChoiceCategory();
};

function* getAllConfigChoiceCategory() {
  try {
    const response = yield call(getAllConfigChoiceCategoryAsync);
    if (response.data.success) {
      yield put(getAllConfigChoiceCategorySuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getAllConfigChoiceCategoryError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getAllConfigChoiceCategoryError(error.response.data.message));
  }
}

export function* watchGetConfigChoiceCategoryList() {
  yield takeEvery(GET_CONFIG_CHOICE_CATEGORY_LIST, getConfigChoiceCategoryListAc);
}

const getConfigChoiceCategoryListAsync = async (dbParam) => {
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

function* getConfigChoiceCategoryListAc({ payload }) {
  try {
    const response = yield call(getConfigChoiceCategoryListAsync, payload.dbParam);
    if (response.data.success) {
      yield put(getConfigChoiceCategoryListSuccess(response.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getConfigChoiceCategoryListError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getConfigChoiceCategoryListError(error.response.data.message));
  }
}

export function* watchAddConfigChoiceCategory() {
  yield takeEvery(ADD_CONFIG_CHOICE_CATEGORY, addConfigChoiceCategory);
}

const addConfigChoiceCategoryAsync = async (data) => {
  return ConfigChoiceCategoryService.addConfigChoiceCategory(data);
};

function* addConfigChoiceCategory({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(addConfigChoiceCategoryAsync, payload.configChoiceCategoryData);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        addConfigChoiceCategorySuccess(response.data.success, response.data.message)
      );
      history.push(`/configuration/config-choice`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(addConfigChoiceCategoryError(response.data.message));
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
    yield put(addConfigChoiceCategoryError(error.response.data.message));
  }
}

export function* watchGetConfigChoiceCategory() {
  yield takeEvery(GET_CONFIG_CHOICE_CATEGORY, getConfigChoiceCategory);
}

const getConfigChoiceCategoryAsync = async (id) => {
  return ConfigChoiceCategoryService.getConfigChoiceCategory(id);
};

function* getConfigChoiceCategory({ payload }) {
  try {
    const response = yield call(getConfigChoiceCategoryAsync, payload.configChoiceCategoryId);
    if (response.data.success) {
      yield put(getConfigChoiceCategorySuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getConfigChoiceCategoryError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getConfigChoiceCategoryError(error.response.data.message));
  }
}

export function* watchEditConfigChoiceCategory() {
  yield takeEvery(EDIT_CONFIG_CHOICE_CATEGORY, editConfigChoiceCategory);
}

const editConfigChoiceCategoryAsync = async (data, id) => {
  return ConfigChoiceCategoryService.editConfigChoiceCategory(data, id);
};

function* editConfigChoiceCategory({ payload }) {
  const { history } = payload;
  try {
    const response = yield call(
      editConfigChoiceCategoryAsync,
      payload.configChoiceCategoryData,
      payload.configChoiceCategoryId
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        editConfigChoiceCategorySuccess(response.data.success, response.data.message)
      );
      history.push(`/configuration/config-choice`);
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(editConfigChoiceCategoryError(response.data.message));
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
    yield put(editConfigChoiceCategoryError(error.response.data.message));
  }
}

export function* watchDeleteConfigChoiceCategory() {
  yield takeEvery(DELETE_CONFIG_CHOICE_CATEGORY, deleteConfigChoiceCategory);
}

const deleteConfigChoiceCategoryAsync = async (id) => {
  return ConfigChoiceCategoryService.deleteConfigChoiceCategory(id);
};

function* deleteConfigChoiceCategory({ payload }) {
  try {
    const response = yield call(
      deleteConfigChoiceCategoryAsync,
      payload.configChoiceCategoryId
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteConfigChoiceCategorySuccess(response.data.success, response.data.message)
      );
      // Fetch updated configChoiceCategory list
      yield put(getConfigChoiceCategoryList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteConfigChoiceCategoryError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteConfigChoiceCategoryError(error.response.data.message));
  }
}

export function* watchDeleteMultipleConfigChoiceCategory() {
  yield takeEvery(DELETE_MULTIPLE_CONFIG_CHOICE_CATEGORY, deleteMultipleConfigChoiceCategory);
}

const deleteMultipleConfigChoiceCategoryAsync = async (ids) => {
  return ConfigChoiceCategoryService.deleteMultipleConfigChoiceCategory(ids);
};

function* deleteMultipleConfigChoiceCategory({ payload }) {
  try {
    const response = yield call(
      deleteMultipleConfigChoiceCategoryAsync,
      payload.configChoiceCategoryIds
    );
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        deleteMultipleConfigChoiceCategorySuccess(
          response.data.success,
          response.data.message
        )
      );
      // Fetch updated configChoiceCategory list
      yield put(getConfigChoiceCategoryList({}));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(deleteMultipleConfigChoiceCategoryError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(deleteMultipleConfigChoiceCategoryError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetAllConfigChoiceCategory),
    fork(watchGetConfigChoiceCategoryList),
    fork(watchAddConfigChoiceCategory),
    fork(watchGetConfigChoiceCategory),
    fork(watchEditConfigChoiceCategory),
    fork(watchDeleteConfigChoiceCategory),
    fork(watchDeleteMultipleConfigChoiceCategory),
  ]);
}
