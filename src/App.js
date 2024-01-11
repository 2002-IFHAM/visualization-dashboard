import React, { useState, useEffect } from 'react';
import BarChart from './barchart';
import Filter from './filter';

const App = () => {
  const [data, setData] = useState([]);
  const [filterTopic, setFilterTopic] = useState('');
  const [filterYear, setFilterYear] = useState('');
  // Add more filters as needed

  // Fetch data from JSON file
  useEffect(() => {
    fetch('jsondata.json')
      .then(response => response.json())
      .then(setData);
  }, []);

  // Filter data based on selected value
  const filteredData = data.filter(d => d.topic === filterTopic && d.year === filterYear /* && other conditions based on filters */);

  return (
    <div>
      <Filter options={['gas', 'oil', 'consumption']} value={filterTopic} onChange={setFilterTopic} />
      <Filter options={['2018', '2019', '2020']} value={filterYear} onChange={setFilterYear} />
      // Add more Filter components as needed
      <BarChart data={filteredData} />
    </div>
  );
};

export default App;