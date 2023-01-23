import React from 'react';
import './style.css';
import { useState } from 'react';
import BookingForm from '../BookingForm';

const Reservation = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [guest, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');
    const [avaiableTime, setAvaiableTime] = useState([
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('booking confirmed');
    }
    return (
        <>
            <div className='jumbotron-image'>
                <BookingForm name={name} 
                setName={setName} date={date} setDate={setDate} 
                guest={guest} setGuest={setGuest} occasion={occasion} 
                setOccasion={setOccasion} avaiableTime={avaiableTime} setAvaiableTime={setAvaiableTime} handleSubmit={handleSubmit}/>

            </div>
        </>
    )
}

export default Reservation;
