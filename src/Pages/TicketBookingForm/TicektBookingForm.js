import React, { useState } from 'react';
import axios from 'axios';
import "./TicketBookingForm.css";

function TicketBookingForm() {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/ticket/', { date, amount });
      // Optionally you can set a success message here
    } catch (error) {
      // You can optionally handle errors here, or just ignore them
    }
  };

  return (
    <div>
      <div className="ticket-h1">
        <h1>Book Ticket</h1>
        </div>
        <div className="ticket-form">
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default TicketBookingForm;
