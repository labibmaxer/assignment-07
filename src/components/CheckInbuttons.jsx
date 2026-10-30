'use client'
import toast from 'react-hot-toast';
import React from 'react';
import { FiPhoneCall, FiMessageSquare, FiVideo } from "react-icons/fi";
import { useTimeline } from '@/context/TimelineContext';

const CheckInbuttons = ({friend}) => {
    const {addEntry} = useTimeline()
    const handleClick =(type) =>{
        addEntry({
        id: Date.now(),
        type,
        title : `${type} with ${friend.name}`,
        date: new Date().toLocaleDateString(),



        })
        toast.success(`${type} logged with ${friend.name}`)
    }
    const btn = "flex flex-col items-center gap-2 rounded-lg bg-gray-50 py-6 text-sm hover:bg-gray-100";
    return (
       <div className="mt-4 grid grid-cols-3 gap-3">
      <button className={btn} onClick={() => handleClick("Call")}>
        <FiPhoneCall className="text-xl" /> Call
      </button>
      <button className={btn} onClick={() => handleClick("Text")}>
        <FiMessageSquare className="text-xl" /> Text
      </button>
      <button className={btn} onClick={() => handleClick("Video")}>
        <FiVideo className="text-xl" /> Video
      </button>
    </div>
    );
};

export default CheckInbuttons;