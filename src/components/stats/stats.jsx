import React, { useState } from 'react';
import Stattabs from './stattabs'
import Map from '../map/map'
import ProgressBar from './progressbar';

const Stats = () => {
  const dailyProgressBarsData = [
    [
      { heading: 'Public Transport', percent: 30 },
      { heading: 'Cycling', percent: 40 },
      { heading: 'Walking', percent: 75 },
    ],
    [
      { heading: 'Public Transport', percent: 70 },
      { heading: 'Cycling', percent: 50 },
      { heading: 'Walking', percent: 35 },
    ],
    [
      { heading: 'Public Transport', percent: 50 },
      { heading: 'Cycling', percent: 20 },
      { heading: 'Walking', percent: 55 },
    ],
    [
      { heading: 'Public Transport', percent: 30 },
      { heading: 'Cycling', percent: 50 },
      { heading: 'Walking', percent: 75 },
    ],
    [
      { heading: 'Public Transport', percent: 80 },
      { heading: 'Cycling', percent: 40 },
      { heading: 'Walking', percent: 25 },
    ],
    [
      { heading: 'Public Transport', percent: 80 },
      { heading: 'Cycling', percent: 60 },
      { heading: 'Walking', percent: 45 },
    ],
    [
      { heading: 'Public Transport', percent: 30 },
      { heading: 'Cycling', percent: 50 },
      { heading: 'Walking', percent: 75 },
    ],

  ];

  const [selectedDay, setSelectedDay] = useState(0);

  const handleTabChange = (dayIndex) => {
    setSelectedDay(dayIndex);
  };

  return (
    <div>
      <div className='text-4xl font-bold justify-center flex pt-10 pb-10'>STATISTICS</div>
      <Stattabs onTabChange={handleTabChange} />
      <div className="p-8">
        {dailyProgressBarsData[selectedDay].map((data, index) => (
          <ProgressBar key={index} heading={data.heading} percent={data.percent} />
        ))}
      </div>
      <Map/>
    </div>
  )
}

export default Stats