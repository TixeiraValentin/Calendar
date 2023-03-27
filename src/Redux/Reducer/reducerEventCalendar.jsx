import { actionTypes } from "../Constantes/ActionTypes";

const initialState = {
    eventCalendar: false
  }
  export default function reducerEventCalendar(state = initialState, action){
    switch (action.type) {
      case actionTypes.OPEN_EVENT_CALENDAR:
        return {
          ...state,
          eventCalendar: action.data
      }
      case actionTypes.CLOSE_EVENT_CALENDAR:
        return {
          ...state,
          eventCalendar: action.data
      }
      default:
        return state;
    }
  }