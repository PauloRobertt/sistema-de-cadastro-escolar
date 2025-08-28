import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import exampleReducer from '../rootReducer';

const persistConfig = {
  key: 'NOME_DA_APLICACAO',
  storage,
  whitelist: ['exampleReducer'],
};

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default persistReducer(persistConfig, rootReducer);
