// ('use client');
"use client"
// import React, { useState } from 'react';
import { useTimeline } from '@/context/TimelineContext';
const Timeline = () => {
    // const TImeline = useState()
    const  {timeline} = useTimeline()
    return (
         <div className="mx-auto max-w-3xl py-10">
      <h1 className="text-3xl font-bold">Timeline</h1>
      {timeline.length === 0 && <p>No activity yet</p>}
      {timeline.map ((item) => (
        <div key={item.id} className="card bg-base-100 p-4 shadow-sm">
          <p>{item.title}</p>
          <p className="text-sm text-gray-500">{item.date}</p>
        </div>
      ))}
    </div>
    );
};

export default Timeline;