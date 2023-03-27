import { actionTypes } from "../Constantes/ActionTypes";

const initialState = {
  monthIndex: 0
  }
  export default function reducerSetMonthIndex(state = initialState, action){
    switch (action.type) {
      case actionTypes.SET_MONTH_INDEX:
        return {
          ...state,
          monthIndex: action.payload
      }
      default:
        return state;
    }
  }