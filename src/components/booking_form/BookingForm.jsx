import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';
import Button from '../button/Button';
import { IoCalendarClearOutline } from 'react-icons/io5';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bookingDate, setBookingDate] = useState(null);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (name && email && bookingDate) {
      setIsSubmitted(true);
      window.location.reload();
    } else {
      setIsSubmitted(false);
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className={css.booking_form}>
      <div className={css.booking_form_text}>
        <h3 className="booking-title">Book your campervan now</h3>
        <span className={css.booking_subtitle}>
          Stay connected! We are always ready to help you.
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={css.booking_input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={css.booking_input}
        />
        <div className="date-picker-wrapper" style={{ position: 'relative', width: '100%' }}>
          <DatePicker
            selected={bookingDate}
            onChange={date => setBookingDate(date)}
            placeholderText="Booking Date"
            className={css.booking_input}
          />
          <IoCalendarClearOutline
            className={css.calendar}
            style={{
              position: 'absolute',
              top: '40%',
              right: '16px',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        <textarea
          placeholder="Comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          className={css.booking_textarea}
        />
        <Button type="submit" variant="send" label="Send" />
      </form>
    </div>
  );
}
