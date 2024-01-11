import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove(); // Clear svg content before drawing new chart

    // Set up scales and axes
    const xScale = d3.scaleBand().range([0, 500]).padding(0.4);
    const yScale = d3.scaleLinear().range([500, 0]);

    xScale.domain(data.map(d => d.topic));
    yScale.domain([0, d3.max(data, d => d.intensity)]);

    // Draw bars
    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.topic))
      .attr('y', d => yScale(d.intensity))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 500 - yScale(d.intensity));

  }, [data]);

  return <svg ref={ref} />;
};

export default BarChart;