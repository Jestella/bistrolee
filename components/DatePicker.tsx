import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const PickDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <style>
        {`.date-picker input {
          text-align: center;
      }`}
      </style>
      <DatePicker
        wrapperClassName='date-picker'
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        showTimeSelect
        dateFormat='Pp'
      />
    </div>
  );
};

export default PickDate;
