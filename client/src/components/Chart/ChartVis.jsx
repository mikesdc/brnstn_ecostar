import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import "./ChartVis.scss";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      }],
    };

    const options = {
      scales: {
        x: [{
          type: 'category',
          labels: ['January', 'February', 'March', 'April', 'May'],
        }],
        y: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    };

    // Destroy any existing Chart instance on the canvas
    const canvas = chartRef.current;
    const context = canvas.getContext('2d');
    const existingChart = Chart.getChart(context);
    if (existingChart) {
      existingChart.destroy();
    }

    // Create the new Chart instance
    const newChart = new Chart(context, {
      type: 'line',
      data: data,
      options: options,
    });

    // Cleanup on component unmount
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
  );
};

export default LineChart;