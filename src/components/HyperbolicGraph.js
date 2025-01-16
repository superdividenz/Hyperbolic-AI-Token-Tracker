import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const HyperbolicGraph = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 800;
    const height = 600;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    // Clear previous content
    svg.selectAll('*').remove();

    // Custom hyperbolic projection (Poincaré disk model)
    const projection = (x, y) => {
      const scale = 150; // Scale factor
      const centerX = width / 2;
      const centerY = height / 2;

      // Convert hyperbolic coordinates to Poincaré disk coordinates
      const r = Math.sqrt(x * x + y * y);
      const theta = Math.atan2(y, x);

      const diskR = Math.tanh(r / 2); // Poincaré disk radius
      const diskX = diskR * Math.cos(theta) * scale + centerX;
      const diskY = diskR * Math.sin(theta) * scale + centerY;

      return [diskX, diskY];
    };

    // Draw nodes
    svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => projection(d.x, d.y)[0])
      .attr('cy', (d) => projection(d.x, d.y)[1])
      .attr('r', 5)
      .attr('fill', 'blue');
  }, [data]);

  return <svg ref={ref}></svg>;
};

export default HyperbolicGraph;