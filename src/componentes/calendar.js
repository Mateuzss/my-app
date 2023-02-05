import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const CalendarDate = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div className='date' style={{
            marginLeft: '70%',
            marginTop: '-867px',
            width: '350px !important',
            height: '600px ',
        }}>
            <button className='text-center' style={{
                border:'none',
                backgroundColor: 'white',
                marginBottom: '30px',

            }}>Consultas Marcadas</button>
            <div className='calendar-container'style={{
                 width: '310px', 
                 height: '271px', 
                 display: 'flex', 
                 alignItems: 'center', 
                 justifyContent: 'center'
                     }}>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-center' style={{
                    marginRight:'200px',
                    marginTop: '30px',


                }}>
                <span className='bold' 
                >Datas selecionada:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
}

