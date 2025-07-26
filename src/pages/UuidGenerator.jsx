import React, { useState } from 'react';
import StarField from '../components/StarBackground';
import {v4 as uuidv4} from 'uuid'

export default function UUIDGenerator() {

  const [uuid, setUuid] = useState('')
  const [copy, setCopy] = useState('Copy')
  const generateUuid = () => {
    const id = uuidv4();
    setUuid(id);    
  }

  const handleCopy = () => {
    if (uuid === '') setError('Nothing to Copy !');
    else {
      navigator.clipboard.writeText(uuid);

      setCopy('Copied !')
      setTimeout(() => { setCopy('Copy') }, 1500);
    }
  }

  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div>
        <h1 className="flex justify-center items-center mb-7 font-bold text-2xl lg:text-4xl text underline">UUID GENERATOR</h1>

        <div className='flex flex-col justify-center items-center'>
          <button onClick={generateUuid} className='p-4 mt-10 text-lg font-bold bg-sky-500 rounded-sm cursor-none hover:bg-sky-600'>
            GENERATOR UUID
          </button>

        </div>

        {uuid && (
          <div className='flex justify-center items-center mt-10'>
            <input
            readOnly
            value={uuid}
              type="text"
              className='border border-r-0 rounded-l-xl p-3 w-1/2 lg:w-1/3'
            />
            <button onClick={handleCopy} className='p-3 text-lg font-bold bg-sky-500 rounded-r-sm cursor-none h-13 hover:bg-sky-600'>
              {copy}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}