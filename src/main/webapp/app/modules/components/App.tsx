import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ position: 'relative' }}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
