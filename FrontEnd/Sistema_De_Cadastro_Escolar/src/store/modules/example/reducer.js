import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucess');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      console.log('BotãoClicado: ', newState.botaoClicado);
      return newState;
    }

    case types.BOTAO_CLICADO_ERROR: {
      console.log('Error');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Request');
      return state;
    }

    default:
      return state;
  }
}
