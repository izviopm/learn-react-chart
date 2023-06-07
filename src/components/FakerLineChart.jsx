/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const subjects = ['Matematika', 'Bahasa Inggris', 'Fisika', 'Biologi', 'Kimia', 'Sejarah', 'Geografi', 'Ekonomi', 'Bahasa Indonesia', 'Seni Budaya'];

function generateLineData(length) {
  const data = [];
  for (let i = 0; i < length; i++) {
    const point = {
      x: subjects[i % subjects.length],
      y: faker.number.int({ min: 40, max: 100 }),
    };
    data.push(point);
  }
  return data;
}

function generateMultipleLinesData(lines, length) {
  const data = [];
  for (let i = 0; i < lines; i++) {
    const line = {
      label: faker.person.firstName(),
      data: generateLineData(length),
    };
    data.push(line);
  }
  return data;
}

function getLineColor(index) {
  const redPastel = 'rgb(255, 128, 128)';
  const greenPastel = 'rgb(128, 255, 128)';
  const bluePastel = 'rgb(128, 128, 255)';
  const colors = [redPastel, greenPastel, bluePastel];
  return colors[index % colors.length];
}

function getBackgroundColor(index) {
  const redPastel = 'rgba(255, 99, 132, 0.2)';
  const greenPastel = 'rgba(75, 192, 192, 0.2)';
  const bluePastel = 'rgba(54, 162, 235, 0.2)';
  const colors = [redPastel, greenPastel, bluePastel];
  return colors[index % colors.length];
}

export default function FakerLineChart() {
  const linesData = generateMultipleLinesData(3, 10);
  console.log(linesData);
  const data = {
    datasets: linesData.map((line, index) => ({
      label: line.label,
      data: line.data,
      borderColor: getLineColor(index),
      backgroundColor: getBackgroundColor(index),
      borderWidth: 1,
      fill: false,
    })),
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div>
      <Line data={data} height={200} options={options} />
    </div>
  );
}
