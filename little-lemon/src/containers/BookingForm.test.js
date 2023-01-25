import {fireEvent, getByTestId, render, screen }  from '@testing-library/react';
import BookingForm from './BookingForm';
import Reservation from './reservations';
const avaiableTimes = []

test('Renders the BookingForm heading', () => {
    render(<BookingForm avaiableTimes={avaiableTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});
test('show confirmed date and time',() => {
    render(<Reservation/>)
    expect(screen.getByTestId('res-time').childNodes.length).toEqual(6)
    fireEvent.change(screen.getByTestId('res-time'),  {target: {value: '17:00'}})
    expect(screen.getByTestId('res-time').childNodes.length).toEqual(5)
})
