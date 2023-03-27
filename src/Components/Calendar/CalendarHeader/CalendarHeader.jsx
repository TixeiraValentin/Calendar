import React from 'react'
import "./calendarHeader.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setMonthIndex } from '../../../Redux/Actions/actionCalendar';
import dayjs from 'dayjs';

export default function CalendarHeader() {
  
  const monthIndex = useSelector((state) => state.reducerSetMonthIndex.monthIndex);
  const dispatch = useDispatch();

  function handlePrevMonth() {
    dispatch(setMonthIndex(monthIndex - 1));
  }

  function handleNextMonth() {
    dispatch(setMonthIndex(monthIndex + 1));
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function handleReset() {
    dispatch(setMonthIndex(monthIndex === dayjs().month() 
    ? monthIndex + Math.random() 
    : dayjs().month() 
    ))
  }
  
return (
    
    <header className='containerCalendarHeader'>
      <div className='containerImgCalendarHeader'>
        <img src='https://res.cloudinary.com/blackhound/image/upload/v1679495510/BLACKHOUND/Icons/BlackHound_huzalp.svg' alt='' />
        <h1>Calendario</h1>
      </div>
      <div className='containerButtonsCalendarHeader'>
        <div onClick={handleReset} className='buttonCalendarHeader'>
          Hoy
        </div>
        <div className='containerButtonsLeftRightCalendarHeader'>
          <div onClick={() => {handlePrevMonth()}} className='buttonCalendarHeader borderNone'>
            <FaChevronLeft/>
          </div>
          <div onClick={() => {handleNextMonth()}} className='buttonCalendarHeader borderNone'>
            <FaChevronRight/>
          </div>
        </div>
        <h2 className='yearCalendarHeader'>
          {capitalizeFirstLetter(dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM"))} {dayjs(new Date(dayjs().year(), monthIndex)).format("YYYY")}
        </h2>
      </div>
    </header>
  )
}
