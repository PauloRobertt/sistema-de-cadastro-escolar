import { call, put, all, takeLatest, take } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../service/axios';
import history from '../../../service/history';

function* loginRequest({ payload }) {
  try {
    console.log('Payload ', payload);
    const response = yield call(axios.post, '/tokens/', payload);
    console.log('Saga Response', response);
    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath.prevPath);
  } catch (error) {
    console.log(error);
    yield put(actions.loginError());
  }
}

function persistRequest({ payload }) {
  console.log(payload.auth.authReducer.token);
  const token = payload.auth.authReducer.token;
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRequest),
]);
