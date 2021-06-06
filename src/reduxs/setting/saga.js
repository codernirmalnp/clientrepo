import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import SettingService from "../../services/setting-service";
import { GET_SETTING, EDIT_SETTING } from "../actions";
import {
  getSetting,
  getSettingSuccess,
  getSettingError,
  editSettingSuccess,
  editSettingError,
} from "./action";
import { toast } from "react-toastify";
import { parseMessage } from "../../helpers/util";
import ToastElement from "../../components/toast";

export function* watchGetSetting() {
  yield takeEvery(GET_SETTING, getSettingAc);
}

const getSettingAsync = async () => {
  return SettingService.getSetting();
};

function* getSettingAc() {
  try {
    const response = yield call(getSettingAsync);
    if (response.data.success) {
      yield put(getSettingSuccess(response.data.data));
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(getSettingError(response.data.message));
    }
  } catch (error) {
    toast.error(
      <ToastElement type="error" message={error.response.data.message} />,
      { containerId: "default" }
    );
    yield put(getSettingError(error.response.data.message));
  }
}

export function* watchEditSetting() {
  yield takeEvery(EDIT_SETTING, editSetting);
}

const editSettingAsync = async (data) => {
  return SettingService.editSetting(data);
};

function* editSetting({ payload }) {
  try {
    const response = yield call(editSettingAsync, payload.settingData);
    if (response.data.success) {
      toast.success(
        <ToastElement type="success" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(
        editSettingSuccess(response.data.success, response.data.message)
      );
      // Fetch updated setting
      yield put(getSetting());
    } else {
      toast.error(
        <ToastElement type="error" message={response.data.message} />,
        { containerId: "default" }
      );
      yield put(editSettingError(response.data.message));
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
    yield put(editSettingError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchGetSetting), fork(watchEditSetting)]);
}
