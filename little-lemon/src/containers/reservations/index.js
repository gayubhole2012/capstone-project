import React, { useEffect, useReducer } from 'react';
import './style.css';
import { useState } from 'react';
import BookingForm from '../BookingForm';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'TIME_CHANGE':
            return state.filter(time => time !== action.time)
        case 'UPDATE_TIME':
            return action.allTimes
        default:
            return state;
    };
}


const Reservation = () => {
    const [name, setName] = useState('');
    const [guest, setGuest] = useState('');
    const [occasion, setOccasion] = useState('');
    const [dateStr, setDate] = useState((new Date()).toDateString());
    const [avaiableTimes, dispatch] = useReducer(updateTimes, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            guest,
            occasion,
            dateStr
        }
        submitAPI(formData)
        alert('booking confirmed');
    }

     useEffect(()=>{
        dispatch({ type: "UPDATE_TIME", allTimes: fetchAPI(new Date(dateStr)) });
     },[dateStr])
    return (
        <>
            <div className='jumbotron-image'>
                <BookingForm name={name}
                    setName={setName} date={dateStr} setDate={setDate} dispatch={dispatch}
                    guest={guest} setGuest={setGuest} occasion={occasion}
                    setOccasion={setOccasion} avaiableTimes={avaiableTimes} handleSubmit={handleSubmit}  />

            </div>
        </>
    )
}

export default Reservation;