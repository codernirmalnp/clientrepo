import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
const sagaMiddleware=createSagaMiddleware()
const middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga)

export default store;
