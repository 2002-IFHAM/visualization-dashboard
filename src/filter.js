import React from 'react';

const Filter = ({ options, value, onChange }) => (
  <select value={value} onChange={e => onChange(e.target.value)}>
    {options.map(option => (
      <option key={option} value={option}>{option}</option>
    ))}
  </select>
);

export default Filter;