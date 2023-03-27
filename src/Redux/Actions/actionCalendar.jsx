import { actionTypes } from "../Constantes/ActionTypes";

export const setMonthIndex = (index) => {
    return {
        type: actionTypes.SET_MONTH_INDEX,
        payload: index,
    }
}

export const setDaySelected = (data) => {
    return {
        type: actionTypes.SET_DAY_SELECTED,
        data: data
    }
}

export const openEventCalendar = (data) => {
    return {
        type: actionTypes.OPEN_EVENT_CALENDAR,
        data: data
    }
}

export const closeEventCalendar = (data) => {
    return {
        type: actionTypes.CLOSE_EVENT_CALENDAR,
        data: data
    }
}