import dayjs from 'dayjs'
import React from 'react'
import { useDispatch } from 'react-redux';
import { openEventCalendar, setDaySelected } from '../../../Redux/Actions/actionCalendar';
import "./day.css"


export default function Day({ day, rowIdx, isFirst }) {

    const dispatch = useDispatch();

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "presentDay" : ""
    }

    function handleEventCreate() {
        dispatch(setDaySelected(day))
        dispatch(openEventCalendar(true))
    }

return (
    <div onClick={handleEventCreate} className='containerDay'>
        <header className='headerDay'>
            {isFirst && (
                <p className="dayLetter">
                    {day.format("ddd").toUpperCase()}
                </p>
            )}
            <p className={`dayNumber ${getCurrentDayClass()}`}>
                {day.format("DD")}
            </p>
        </header>
    </div>
  )
}
