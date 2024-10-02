
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import view from '../assets/view.svg'
import Enter from '../assets/Enter.svg'
import z from '../assets/z.svg'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = () => {
  const dummyData = [
    {
      
      data: [5000, 6000, 5500, 6500, 5200, 6300, 7000, 7200, 7100, 6800, 6600, 6400],
      backgroundColor: '#883DCF',
      borderRadius: 10,
      barThickness: 10,
    },
    {
     
      data: [3000, 4000, 3500, 4200, 3100, 3800, 4400, 4600, 4500, 4300, 4100, 3900],
      backgroundColor: '#F98550',
      barThickness: 10,
      borderRadius: 10,
    },
    {
     
      data: [2000, 3000, 2500, 3200, 2100, 2800, 3400, 3600, 3500, 3300, 3100, 2900],
      backgroundColor: '#00DDEB',
      barThickness: 10,
      borderRadius: 10,
    },
  ];

  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    setChartData({
      labels: [
        'Jan', 'Feb', 'Mar', 'April', 'May', 'June',
        'July', 'Augu', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      datasets: dummyData,
    });
  }, []);

  const options = {
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
       

      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false, 
        },
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value === 0) {
              return value;
            }
            return '$' + value; 
          },
        },
        border: {
          display: false,
          dash: [2, 2],
        },
        grid: {
          color: '#64748B',
        },
      },
    },
  };

  return (
    <div className="flex my-8 space-x-4">
      
      <div className="flex-grow w-[70%] bg-white p-4 rounded-lg shadow-lg">
        <div className='w-full flex justify-between'>
          <div>
       <p className='text-[24px] font-semibold'>Revnue</p>
       <p className='text-[16px] font-normal'>Your Revnue This year</p>
       </div>
       <div className='flex gap-4 border h-8 p-2 '><p className='text-[12px] hover:text-[#883DCF] hover:bg-[#F4ECFB] font-semibold'>All
        </p>
        <p className='text-[12px] font-semibold'>Enterprise</p>
        <p className='text-[12px] font-semibold'>Advisor</p>
        <p className='text-[12px] font-semibold'> Orphan
          </p>
          </div>
        
       </div>
       <section className='flex gap-10'>
        <div className='flex gap-3'>
        <img src={Enter} alt="error" />
        <div className='mt-3'>
          <p>Enterprice</p>
          <div className='flex gap-2'>
          <p className='text-[24px] font-semibold'>$26000</p>
          <p className='text-[16px] font-bold text-[#1A9882]'>10%</p>
          <img src={z} alt="error" className='' />
          </div>
        </div>
        </div>
        <div className='flex gap-3'>
        <img src={Enter} alt="error" />
        <div className='mt-3'>
          <p>Advisors</p>
          <div className='flex gap-2'>
          <p className='text-[24px] font-semibold'>$2000</p>
          <p className='text-[16px] font-bold text-[#1A9882]'>10%</p>
          <img src={z} alt="error" className='' />
          </div>
        </div>
        </div>
        <div className='flex gap-3'>
        <img src={Enter} alt="error" />
        <div className='mt-3'>
          <p>Indviduals</p>
          <div className='flex gap-2'>
          <p className='text-[24px] font-semibold'>$26000</p>
          <p className='text-[16px] font-bold text-[#1A9882]'>10%</p>
          <img src={z} alt="error" className='' />
          </div>
        </div>
        </div>
       </section>
       
       
        <Bar data={chartData} options={options} />
        
      </div>
      <div className="flex-none w-[30%]  bg-[#FFFFFF] p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-[20px] ">Recent Activities</h2>
        <p className='text-[13px] font-semibold'>Based on the recent activities by customers </p>
        <div className='flex gap-3 mt-5'>
        <img src={view} alt="error" />
        <div className='flex  w-full justify-between'>
        <div className=''>
          <h1 className='text-[13px] font-semibold'>Global travelers</h1>
          <p className='text-[10px] mt-[-2px]'>Campain started</p>
         
        </div>
        <p className=' text-[#F86624] mt-2 rounded h-6 text-[12px] font-semibold px-[10px] py-[4px]  bg-[#F9731633]'>View</p>
        </div>
      </div>
      <div className='flex gap-3 mt-5'>
        <img src={view} alt="error" />
        <div className='flex  w-full justify-between'>
        <div className=''>
          <h1 className='text-[13px] font-semibold'>ABN Consultants </h1>
          <p className='text-[10px] mt-[-2px]'>Shared a Post</p>
         
        </div>
        <p className=' text-[#883DCF]  mt-2 rounded h-6 text-[12px] font-semibold px-[10px] py-[4px]  bg-[#883DCF33]'>View</p>
        </div>
      </div>
      <div className='flex gap-3 mt-5'>
        <img src={view} alt="error" />
        <div className='flex  w-full justify-between'>
        <div className=''>
          <h1 className='text-[13px] font-semibold'>Free World </h1>
          <p className='text-[10px] mt-[-2px]'>Purchased gold package </p>
         
        </div>
        <p className=' text-[#2E2D74] mt-2 rounded h-6 text-[12px] font-semibold px-[10px] py-[4px]  bg-[#2E2D7433]'>View</p>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Barchart;
