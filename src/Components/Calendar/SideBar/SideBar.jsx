import React from 'react'
import CreateEventButton from '../CreateEventButton/CreateEventButton'
import SmallCalendar from '../SmallCalendar/SmallCalendar'
import "./sideBar.css"

export default function SideBar() {
 
  
return (
    
    <aside className='containerSideBar'>
      <CreateEventButton/>
      <SmallCalendar/>
    </aside>
  )
}
