import React, { useState } from 'react';
import StarField from '../components/StarBackground';

export default function JsonToCsv() {

  const [error, setError] = useState('')
  const [inputJson, setInputJson] = useState('');
  const [outputCsv, setOutputCsv] = useState('')
  const [copy, setCopy] =useState('Copy CSV')

  const handleConvert = () => {
    try {
      const arr = JSON.parse(inputJson);
      if (!Array.isArray(arr) || arr.length === 0) {
        setError('Invalid or empty JSON array')
      }

      const headers = Object.keys(arr[0]);
      const csvRows = [];

      csvRows.push(headers.join(','));

      for(const row of arr){
        const values = headers.map(header => {
          const val = row[header];

          return `"${String(val).replace(/"/g, '""')}"`;
        }) ;
        csvRows.push(values.join(','));
      }
      setOutputCsv(csvRows.join('\n'))

    } catch (error) {
      setError('Invalid Input!!')
    }
  }

  const handleCopy = () => {
    if (outputCsv === '') setError('Nothing to Copy !');
    else {
      navigator.clipboard.writeText(outputCsv);

      setCopy('Copied !')
      setTimeout(() => { setCopy('Copy CSV') }, 1500);
    }
  }

  const handleClear = () => {
    setInputJson(''); setOutputCsv('');
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <h1 className="flex justify-center items-center mt-3 mb-7 font-bold text-2xl lg:text-4xl text underline">JSON TO CSV</h1>

      <div className="grid grid-cols-1 text-center content-center ">
        {/* input textarea minified */}
        <div>
          <textarea name="jsonInput" value={inputJson} onChange={(e) => setInputJson(e.target.value)} rows="10" placeholder="Input JSON..." className=" border w-[80%] lg:w-[60%] p-3">
          </textarea>
        </div>

        {/* a button  */}
        <div >
          <button onClick={handleConvert} className="p-3 m-1 text-xl bg-sky-600 rounded-2xl cursor-none hover:bg-sky-700 ">Convert</button>
        </div>

        {/* display formatted json format */}
        <div>
          <textarea value={outputCsv} readOnly name="displayJson" rows="10" placeholder="CSV text..." className="border w-[80%] lg:w-[60%] p-3">
          </textarea>
        </div>

        <div className="flex justify-center items-center">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-6 content-center w-[60%] gap-2 items-center'>
            <button onClick={handleCopy} className="p-3 text-lg bg-sky-600 rounded-xl cursor-none hover:bg-sky-700 ">{copy}</button>
            <button onClick={handleClear} className="p-3 text-lg bg-sky-600 rounded-xl cursor-none hover:bg-sky-700 ">Clear</button>
          </div>
        </div>

        {/*Error div */}
        <div className='mb-10'>
          {error && <p className="text-red-500 mt-3 mb-50">{error}</p>}
        </div>
      </div>
    </div>
  )
}