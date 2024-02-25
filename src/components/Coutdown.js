import React, { useState, useRef, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
  
  

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('02/22/2022').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
        <Row>
            <Col>
            <div className='time'>{state.days || '0'}</div>
          <small className="time-text">Days</small>
            </Col>
            <Col>
            <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">Hours</small>
            </Col>
            <Col>
            <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
            </Col>
        </Row>
     
    </>
  );
};

export default Countdown;