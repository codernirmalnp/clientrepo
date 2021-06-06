import { combineReducers } from "redux";
import auth from "./auth/reducer";
import media from "./media/reducer";
import shared from "./shared/reducer";
import user from "./user/reducer";
import role from "./role/reducer";
import configChoice from "./config-choice/reducer";
import configChoiceCategory from "./config-choice-category/reducer";
import setting from "./setting/reducer";
const reducers = combineReducers({
  auth,
  media,
  shared,
  user,
  role,
  configChoice,
  configChoiceCategory,
  setting,
});

export default reducers;
