import {fireEvent, getByTestId, render, screen }  from '@testing-library/react';
import BookingForm from './BookingForm';
import Reservation from './reservations';
const avaiableTimes = []

test('Renders the BookingForm heading', () => {
    render(<BookingForm avaiableTimes={avaiableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});
test('show confirmed time',() => {
    render(<Reservation/>)
    expect(screen.getByTestId('res-time').childNodes.length).toEqual(8);
    fireEvent.change(screen.getByTestId('res-time'),  {target: {value: '17:00'}})
    expect(screen.getByTestId('res-time').childNodes.length).toEqual(7);
});
test('number of guest',() =>{
    render(<Reservation/>)
    const guestInput = screen.getByTestId('guest');
    guestInput.value = 10;
    expect(guestInput.value).toBe('10');
});
test('cant send form without Date set', () =>{
    render(<Reservation/>)
    const button = screen.getByTestId('model-btn');
   expect(button).toHaveProperty('disabled',false);
});