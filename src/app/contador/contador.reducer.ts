import {
  actions,
  DECREMENTAR,
  DIVIDIR,
  INCREMENTAR,
  MULTIPLICAR,
  RESETEAR,
} from './contador.actions';

export function contadorReducer(state: number = 10, action: actions) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;
    case DECREMENTAR:
      return state - 1;
    case MULTIPLICAR:
      return state * action.payload;
    case DIVIDIR:
      return state / action.payload;
    case RESETEAR:
      return (state = 0);
    default:
      return state;
  }
}
