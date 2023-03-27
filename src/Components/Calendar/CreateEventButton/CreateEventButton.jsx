import React from 'react'
import "./createEventButton.css"
import { FcPlus } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { openEventCalendar } from '../../../Redux/Actions/actionCalendar';

export default function CreateEventButton() {
const dispatch = useDispatch();

function handleCreateEvent() {
  dispatch(openEventCalendar(true))
}

return (

    <div className='containerCreateEventButton' onClick={handleCreateEvent}>
        <FcPlus className="iconCreateEventButton"/>
        <div className='textCreateEventButton'>
          <p>Crear</p>
        </div>
    </div>
  )
}
