import React from 'react';

function BookingForm(props) {
    const { name, avaiableTimes, handleSubmit, date, setDate,
         setName, guest, setGuest, occasion, setOccasion, dispatch } = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Book Now</h2>
                <label htmlFor='name'>Name:</label>
                <input
                    required
                    id='name'
                    type='text'
                    value={name}
                    name='name'
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor='date'> Choose Date:
                    <input
                        type='date'
                        required
                        value={date}
                        name='date'
                        onChange={e => setDate(e.target.value)}
                        />
                </label>
                <label htmlFor='time'> Choose Time:</label>
                <select
                    required
                    data-testid='res-time'
                    onChange={e => {
                        dispatch({ type: "TIME_CHANGE", time: e.target.value });
                    }}>
                    {avaiableTimes.map((time) => {
                        return <option key={time}>{time}</option>
                    })}
                </select>
                <label htmlFor='guests'>Number Of Guest:</label>
                <input
                    required
                    type='number'
                    id='guests'
                    placeholder='1'
                    min='1'
                    max='10'
                    value={guest}
                    onChange={e => setGuest(e.target.value)}
                ></input>
                <label htmlFor='occasion'>Occasion</label>
                <select
                    required
                    id='occasion'
                    value={occasion}
                    onChange={e => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button onClick={handleSubmit}>Make Your Reservation</button>
            </form>
        </>
    )
}

export default BookingForm;