import React, { useState } from 'react';
import StarField from '../components/StarBackground';

export default function RegexTester() {

  const [regexPattern, setRegexPattern] = useState('')
  const [testString, setTestString] = useState('');
  const [selectedFlag, setSelectedFlag] = useState("g")
  const [matchResult, setMatchResult] = useState('');
  const [error, setError] = useState('');
  const [copy, setCopy] = useState('Copy');



  const handleRegex = () => {
    try {
      const regex = new RegExp(regexPattern, selectedFlag);
      const matches = testString.match(regex);
      setMatchResult(matches ? matches : ["No Match Found"]);
      setError("");

    } catch (error) {
      setError("Invalid regular expression")
      setMatchResult([])
    }
  }

  const copyRegex = () => {
    console.log("hello");
    
    if (matchResult === "") setError("No regex to copy");
    else {
      navigator.clipboard.writeText(matchResult)
      setCopy("Copied!")
      setTimeout(() => { setCopy("Copy") }, 1500);
    }
  }

  const clearFields = () => {
    setRegexPattern('');
    setTestString('');
    setMatchResult(false);
    setError('');
    setSelectedFlag("g");
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <div className='flex justify-center items-center flex-col '>
        <h1 className='mt-6 mb-2 '>REGEX TESTER</h1>
        <div className='flex flex-col w-[90%] lg:w-[70%] border p-3 bg-slate-800 rounded-sm'>

          <p>REGULAR EXPRESSION</p>
          <input
            type="text"
            name="regexPattern"
            className='border p-3 mt-1 mb-4 '
            placeholder='insert your regular expression here...'
            value={regexPattern}
            onChange={(e) => setRegexPattern(e.target.value)}
          />

          <p className='mt-2'>TEST STRING</p>
          <textarea
            rows="5"
            value={testString}
            type="text"
            name="testString"
            className='border p-3 mt-1 mb-4 '
            placeholder='insert your test string here...'
            onChange={(e) => setTestString(e.target.value)}>

          </textarea>

          <p className='mb-1'>FLAGS : </p>
          <div className='flex gap-5 text-xl mb-4 border p-2'>
            {["g", "i", "m", "gi", ""].map((flag) => (
              <label key={flag} className='mr-2 cursor-none'>
                <input
                  className='cursor-none'
                  type="radio"
                  value={flag}
                  checked={selectedFlag === flag}
                  onChange={(e) => setSelectedFlag(e.target.value)}
                />
                {flag || "None"}
              </label>
            ))}
          </div>

          {/* showing the matchResult */}
          {matchResult && (
            <div className="mt-4 p-2 bg-gray-700 rounded">
              <h2 className="font-bold mb-2">Match Result:</h2>
              <pre>{JSON.stringify(matchResult, null, 2)}</pre>
            </div>
          )}

          {/* showing error in this p */}
          {error && <p className='bg-red-500'>{error}</p>}

          {/* button */}
          <button
            onClick={handleRegex}
            className="p-2 m-1 text-lg bg-sky-600 rounded-2xl cursor-none hover:bg-sky-700 "
          > Test Regex
          </button>

          <div className='flex justify-center gap-5'>
            <button onClick={copyRegex} className="p-3 m-1 text-lg bg-green-600 rounded-2xl cursor-none hover:bg-sky-700">{copy}</button>
            <button onClick={clearFields} className="p-3 m-1 text-lg bg-red-600 rounded-2xl cursor-none hover:bg-sky-700 ">Clear</button>
          </div>
        </div>
      </div>
    </div>
  )
}