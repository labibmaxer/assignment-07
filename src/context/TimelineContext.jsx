'use client';
 
import React, { createContext, useContext, useState } from 'react';
const TimelineContext = createContext();


export const TimelineProvider = ({children}) => {

 const [timeline , setTimeline] = useState([]);
 const addEntry = (entry) => setTimeline ((prev) => [entry, ...prev] )

    return (
        <TimelineContext.Provider value={{addEntry, timeline}}>
          {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext)