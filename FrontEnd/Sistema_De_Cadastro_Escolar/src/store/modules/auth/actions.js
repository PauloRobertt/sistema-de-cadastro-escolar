import * as types from '../types.js';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginError(payload) {
  return {
    type: types.LOGIN_ERROR,
    payload,
  };
}
