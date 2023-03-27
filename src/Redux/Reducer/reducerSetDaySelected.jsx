import dayjs from "dayjs";
import "dayjs/locale/es";
import { actionTypes } from "../Constantes/ActionTypes";
dayjs.locale("es");

const initialState = {
    daySelected: dayjs()
  }
  export default function reducerSetDaySelected(state = initialState, action){
    switch (action.type) {
      case actionTypes.SET_DAY_SELECTED:
        return {
          ...state,
          daySelected: action.data
      }
      default:
        return state;
    }
  }