import React, { useReducer } from 'react';
import './style.css';
import { useState } from 'react';
import BookingForm from '../BookingForm';

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'TIME_CHANGE':
            return state.filter(time => time !== action.time)
        default:
            return state;
    };
}


const Reservation = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [guest, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');
    const intialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const [avaiableTimes, dispatch] = useReducer(updateTimes, intialTimes);
    console.log(avaiableTimes);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('booking confirmed');
    }

    return (
        <>
            <div className='jumbotron-image'>
                <BookingForm name={name}
                    setName={setName} date={date} setDate={setDate} dispatch={dispatch}
                    guest={guest} setGuest={setGuest} occasion={occasion}
                    setOccasion={setOccasion} avaiableTimes={avaiableTimes} handleSubmit={handleSubmit} />

            </div>
        </>
    )
}

export default Reservation;