import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../service/axios';
import history from '../../../service/history';
import { ErrorColor, primaryColor } from '../../../config/colors';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens/', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    console.log(payload.prevPath.prevPath);
    history.push(payload.prevPath.prevPath, { functionToast: true });
  } catch (error) {
    console.log(error);
    error.response.data.errors.map((erro) => {
      toast.error(erro, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: ErrorColor },
      });
    });
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
    toast.success('Usuario editado com sucesso!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: { backgroundColor: primaryColor },
    });
    yield put(actions.editSuccess({ nome, email }));
  } catch (error) {
    error.response.data.errors.map((erro) => {
      toast.error(erro, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: { backgroundColor: ErrorColor },
      });
    });
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
