import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import reducerSetMonthIndex from "./reducerSetMonthIndex";
import reducerSetDaySelected from "./reducerSetDaySelected";
import reducerEventCalendar from "./reducerEventCalendar";


const rootReducer = combineReducers({
    routing: routerReducer,
    reducerSetMonthIndex: reducerSetMonthIndex,
    reducerSetDaySelected: reducerSetDaySelected,
    reducerEventCalendar: reducerEventCalendar,
    
})

export default rootReducer;