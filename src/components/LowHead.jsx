import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import WeatherWidget from './WeatherWidget';

function LowHead() {

    const [savedName, setSavedName]  = useLocalStorage("userName","");

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