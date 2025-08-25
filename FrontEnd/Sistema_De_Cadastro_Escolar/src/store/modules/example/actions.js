import * as types from '../types.js';

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoError() {
  return {
    type: types.BOTAO_CLICADO_ERROR,
  };
}
