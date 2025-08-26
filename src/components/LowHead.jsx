import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import WeatherWidget from './WeatherWidget';

function LowHead() {

    const [savedName, setName]  = useLocalStorage("userName","");

    useEffect(() => {
        const refreshName = () => {
        const stored = localStorage.getItem("userName");
        if (stored !== null) {
            setName(stored); // update state from localStorage
        }
        };

        refreshName(); // run immediately
        const interval = setInterval(refreshName, 1000); // every 10 mins

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-60 z-10 py-6 flex flex-col">
            <p className="text-3xl">Welcome {savedName}</p>
            
            <div className='flex w-full h-full justify-end items-end'>

                <WeatherWidget/>

            </div>

        </div>
  )
}

export default LowHead