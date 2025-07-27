import React, { useState } from 'react';
import StarField from '../components/StarBackground';

export default function TimeZoneConverter() {
  const [fromZone, setFromZone] = useState('Asia/Calcutta');
  const [toZone, setToZone] = useState('America/New_York')
  const timeZones = Intl.supportedValuesOf('timeZone')
  const [convertedTime, setConvertedTime] = useState('')

  const convertTime = () => {
    const now = new Date();

    const fromTime = new Date(
      now.toLocaleString('en-US', { timeZone: fromZone })
    );

    const toTimeStr = fromTime.toLocaleString("en-US", {
      timeZone: toZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour12: true,
    });

    setConvertedTime(toTimeStr);
  }


  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div className='flex flex-col justify-center items-center gap-10'>
        <h1 className='flex justify-center text-2xl font-bold underline'>Time Zone Converter</h1>

        <div className="grid grid-cols-1 gap-5">
          <p className='font-medium block'>Set Date and Time: </p>
          <select
            className='border p-2 rounded w-full'
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
          >
            {timeZones.map((tz) => (
              <option className='bg-black' key={tz} value={tz}>{tz}</option>
            ))}
          </select>
          <label className="block font-medium">To Time Zone</label>
          <select
            className="border p-2 rounded w-full"
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
          >
            {timeZones.map((tz) => (
              <option className='bg-black' key={tz} value={tz}>{tz}</option>
            ))}
          </select>

          <button
            onClick={convertTime}
            className="mb-12 md:mb-0 mt-10 cursor-none px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-700">Convert </button>

          {/* result */}
          {convertedTime && (
            <div className="mt-4 text-lg font-semibold">
              Converted Time: {convertedTime}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}