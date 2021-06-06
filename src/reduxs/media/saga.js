import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import MediaService from "../../services/media-service";
import { UPLOAD_MEDIA, DELETE_MEDIA } from "../actions";
import {
  uploadMediaSuccess,
  uploadMediaError,
  deleteMediaSuccess,
  deleteMediaError,
} from "./action";

export function* watchUploadMedia() {
  yield takeEvery(UPLOAD_MEDIA, uploadMedia);
}

const uploadMediaAsync = async (file) => {
  return MediaService.upload(file);
};

function* uploadMedia({ payload }) {
  try {
    const response = yield call(uploadMediaAsync, payload.mediaFile);
    if (response.data.success) {
      let data = response.data.data;
      data.field = payload.field ? payload.field : "";
      yield put(uploadMediaSuccess(data));
    } else {
      yield put(uploadMediaError(response.data.message));
    }
  } catch (error) {
    yield put(uploadMediaError(error.response.data.message));
  }
}

export function* watchDeleteMedia() {
  yield takeEvery(DELETE_MEDIA, deleteMedia);
}

const deleteMediaAsync = async (id) => {
  return MediaService.delete(id);
};

function* deleteMedia({ payload }) {
  try {
    const response = yield call(deleteMediaAsync, payload.mediaId);
    if (response.data.success) {
      yield put(
        deleteMediaSuccess(response.data.success, response.data.message)
      );
    } else {
      yield put(deleteMediaError(response.data.message));
    }
  } catch (error) {
    yield put(deleteMediaError(error.response.data.message));
  }
}

export default function* rootSaga() {
  yield all([fork(watchUploadMedia), fork(watchDeleteMedia)]);
}
