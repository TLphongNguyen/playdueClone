import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
	labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
	datasets: [
		{
			label: 'Số tiền nạp',
			data: [30, 40, 30, 50, 60, 40, 70, 80, 50, 40, 60, 70],
			borderColor: 'rgba(0, 76, 255, 1)',
			backgroundColor: 'rgba(0, 76, 255, 0.2)',
			fill: true,
			tension: 0.3,
			pointBackgroundColor: 'rgba(0, 76, 255, 1)',
		},
		{
			label: 'Số tiền rút',
			data: [20, 30, 40, 30, 50, 30, 60, 50, 40, 50, 30, 60],
			borderColor: 'rgba(0, 173, 239, 1)',
			backgroundColor: 'rgba(0, 173, 239, 0.2)',
			fill: true,
			tension: 0.3,
			pointBackgroundColor: 'rgba(0, 173, 239, 1)',
		},
	],
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Total Revenue vs Total Sales',
		},
	},
	scales: {
		y: {
			beginAtZero: true,
			max: 100,
		},
	},
};

function LineChart() {
	return <Line data={data} options={options} />;
}

export default LineChart;
