import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setDaySelected, setMonthIndex } from '../../../Redux/Actions/actionCalendar';
import { getMonth } from "../../../util"
import "./smallCalendar.css"

export default function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const monthIndex = useSelector((state) => state.reducerSetMonthIndex.monthIndex)
    const daySelected = useSelector((state) => state.reducerSetDaySelected.daySelected)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx])

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }
    
    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }

    function getDayClass(day) {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if(nowDay === currDay) {
            return "presentDay"
        } else if (currDay === slcDay) {
            return "background-color-selected font-bold"
        } else {
            return ""
        }
    }

    function handleActualizarMonth() {
        dispatch(setMonthIndex(currentMonthIdx))
    }
    function handleDaySelected(day) {
        dispatch(setDaySelected(day))
    } 
    

return (
    
    <>
        <header className='containerHeaderSmallCalendar'>
            <p className=''>{capitalizeFirstLetter(dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM"))} {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("YYYY")}</p>
            <div className='containerButtonsSmallCalendar'>
                <div onClick={handlePrevMonth} className='buttonCalendarHeader borderNone'>
                    <FaChevronLeft/>
                </div>
                <div onClick={handleNextMonth} className='buttonCalendarHeader borderNone'>
                    <FaChevronRight/>
                </div>
        </div>
        </header>
        <div className="grid">
            {currentMonth[0].map((day, i) => (
                <span key={i} className="uppercase day-name">
                    {day.format("dd").charAt(0)}
                </span>
            ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <div
                            key={idx}
                            onClick={() => {handleActualizarMonth(); handleDaySelected(day)}}
                            className={`${getDayClass(day)} day-button`}
                        >
                            <span className="text-sm">{day.format("D")}</span>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </>
  )
}
