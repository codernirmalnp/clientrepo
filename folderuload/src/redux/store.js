import {
    configureStore,
    getDefaultMiddleware
} from '@reduxjs/toolkit'
import createSageMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
const sagaMiddleware=createSageMiddleware()
const store=configureStore({reducer:rootReducer,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]})
   sagaMiddleware.run(rootSaga)

export default store;