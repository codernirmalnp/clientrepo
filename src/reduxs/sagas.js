import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import mediaSagas from "./media/saga";
import sharedSagas from "./shared/saga";
import userSagas from "./user/saga";
import roleSagas from "./role/saga";
import configChoiceSagas from "./config-choice/saga";
import configChoiceCategorySagas from "./config-choice-category/saga";
import settingSagas from "./setting/saga";
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    mediaSagas(),
    sharedSagas(),
    userSagas(),
    roleSagas(),
    configChoiceSagas(),
    configChoiceCategorySagas(),
    settingSagas(),
  ]);
}
