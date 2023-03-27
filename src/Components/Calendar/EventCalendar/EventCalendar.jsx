import React, { useState } from 'react'
import "./eventCalendar.css"
import { MdDragHandle, MdClose, MdOutlineWatchLater, MdSegment, MdOutlineBookmarkBorder, MdOutlineCheck } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { closeEventCalendar } from '../../../Redux/Actions/actionCalendar';
import { useForm } from "react-hook-form";

export default function EventCalendar() {
const { register, handleSubmit, formState: { errors }, reset } = useForm();
const open = useSelector((state) => state.reducerEventCalendar.eventCalendar)
const daySelected = useSelector((state) => state.reducerSetDaySelected.daySelected)
const dispatch = useDispatch();

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
  ];

const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0])

function handleCloseEventCalendar() {
    dispatch(closeEventCalendar(false))
}

function capitalizeFirstLetterOfEachWord(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}



  const onSubmit = (data) => {
    console.log(data)
    handleCloseEventCalendar()
    reset()
  }

return (
    <>
    {open &&
        <div className='containerEventCalendar'>
            <form onSubmit={handleSubmit(onSubmit)} className='formEventCalendar'>
                <header className='headerEventCalendar'>
                    <div className='mdDragHandle'>
                        <MdDragHandle/>
                    </div>
                    <div className='mdClose' onClick={handleCloseEventCalendar}>
                        <MdClose/>
                    </div>
                </header>
                <div className='containerContentEventCalendar'>
                    <div className='containerTitleEventCalendar'>
                        <input 
                            type="text" 
                            placeholder='Añadir titulo'
                            {...register('titulo', {
                                required: true,
                                maxLength: 20
                            })}
                        />
                        
                    </div>
                    <div className='containerFechaEventCalendar'>
                        <div className='iconsEventCalendar'>
                            <MdOutlineWatchLater/>                        
                        </div>
                        <div className='fechaEventCalendar'>
                            <p>{capitalizeFirstLetterOfEachWord(daySelected.format("dddd, MMMM DD"))}</p>
                        </div>
                    </div>
                    <div className='containerAddDescriptionEventCalendar'>
                        <div className='iconsEventCalendar mdSegment'>
                            <MdSegment/>
                        </div>
                        <div className='addDescriptionEventCalendar'>
                            <input 
                                type="text" 
                                placeholder='Añadir descripción'
                                {...register('descripcion', {
                                    required: true,
                                    maxLength: 300
                                })}
                            />
                            
                        </div>
                    </div>
                    <div className='containerColorsOfEventsCalendar'>
                        <div className='iconsEventCalendar MdOutlineBookmarkBorder'>
                            <MdOutlineBookmarkBorder/>
                        </div>
                        <div className='containerCheckColors'>
                            {labelsClasses.map((lblClass, i) => (
                                <span 
                                    key={i}
                                    className={`bg ${lblClass}`}
                                    onClick={() => setSelectedLabel(lblClass)}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className='checkCircleEventCalendar'>
                                            <MdOutlineCheck/>
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                    <footer className='containerFooterEventCalendar'>
                        <div>
                            {errors.titulo?.type === 'required' && <p className='errorEventCalendar'>El campo titulo es requerido.</p>}  
                            {errors.descripcion?.type === 'required' && <p className='errorEventCalendar'>El campo descripcion es requerido.</p>} 
                        </div>
                        <div className='containerGuardarEventCalendar'>
                            <input type="submit" value="Enviar" />
                        </div>
                    </footer>
                </div>
            </form>
        </div>
    }
    </>
  )
}
