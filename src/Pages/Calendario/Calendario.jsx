import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CalendarHeader from '../../Components/Calendar/CalendarHeader/CalendarHeader';
import SideBar from "../../Components/Calendar/SideBar/SideBar"
import Month from "../../Components/Calendar/Month/Month"
import { getMonth } from '../../util';
import "./calendario.css"
import EventCalendar from '../../Components/Calendar/EventCalendar/EventCalendar';

export default function Calendario() {
  const monthIndex = useSelector((state) => state.reducerSetMonthIndex.monthIndex)

  const [currentMonth, setCurrentMonth] = useState(getMonth())

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex])

return (
  <>
    <EventCalendar/>
    <div className="containerHeaderCalendario">
      <CalendarHeader/>
      <div className="containerCalendario">
        <SideBar/>
        <Month month={currentMonth}/>
      </div>
    </div>
  </>
  )
}
