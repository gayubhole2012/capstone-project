import React from 'react';

function BookingForm(props) {
    const { name, avaiableTimes, handleSubmit, setDate,
        setName, guest, setGuest, occasion, setOccasion, dispatch, PastDate, dateStr, isValid} = props;
    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Book Now</h2>
                    <div className='reservation-name'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        required
                        minLength='3'
                        maxLength='12'
                        id='name'
                        value={name}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    </div>
                    <div className='reservation-date'>
                    <label htmlFor='date'> Choose Date:
                        <input
                            type='date'
                            required
                            value={dateStr}
                            name='date'
                            min={PastDate()}
                            placeholder='Choose Date'
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </label>
                    </div>
                    <div className='reservation-time'>
                    <label htmlFor='time'> Choose Time:</label>
                    <select
                        required
                        data-testid='res-time'
                        placeholder='Select Time'
                        onChange={e => {
                            dispatch({ type: "TIME_CHANGE", time: e.target.value });
                        }}>
                        {avaiableTimes.map((time) => {
                            return <option key={time}>{time}</option>
                        })}
                    </select>
                    </div>
                    <div className= 'reservation-guest'>
                    <label htmlFor='guests'>Number Of Guest:</label>
                    <input
                        required
                        type='number'
                        id='guests'
                        placeholder='Number Of Guest'
                        min='1'
                        max='10'
                        value={guest}
                        data-testid = 'guest'
                        onChange={(e) => setGuest(e.target.value)}
                    ></input>
                    </div>
                    <div className= 'reservation-occasion'>
                    <label htmlFor='occasion'>Occasion</label>
                    <select
                        required
                        id='occasion'
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    </div>
                    <button disabled = {!isValid()}
                    data-testid='model-btn'
                        aria-label='On Click'
                        onClick={handleSubmit}>
                        Make Your Reservation
                    </button>
                </fieldset>
            </form>
    </>
    );
}

export default BookingForm;