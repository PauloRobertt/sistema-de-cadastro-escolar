import { call, put, all, takeLatest, take } from 'redux-saga/effects';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../service/axios';
import history from '../../../service/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath.prevPath);
  } catch (error) {
    console.log(error);
    yield put(actions.loginError());
  }
}

function* editRequest({ payload }) {
  const { nome, email, password } = payload;

  try {
    yield call(axios.put, '/users/', {
      nome,
      email,
      password,
    });
    yield put(actions.editSuccess({ nome, email }));
  } catch (error) {
    console.log(error);
    if (error.status === 401) {
      yield put(actions.loginError());
    }
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
  takeLatest(types.EDIT_REQUEST, editRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRequest),
]);
