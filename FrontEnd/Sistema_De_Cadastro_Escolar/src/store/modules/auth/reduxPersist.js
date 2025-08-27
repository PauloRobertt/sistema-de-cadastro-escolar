import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../rootReducer';

const persistConfig = {
  key: 'SISTEMA_DE_CADASTRO_DE_ALUNOS',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
