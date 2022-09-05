// import { createStore, applyMiddleware } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'


//
// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer)

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware()],
})
export default store;