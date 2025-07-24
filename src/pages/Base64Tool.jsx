import React, { useState } from 'react';
import StarField from '../components/StarBackground';

export default function Base64() {

  const [copy, setCopy] = useState('Copy')
  const [mode, setMode] = useState('encode')
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState('')
  const [displayText, setDisplayText] = useState('')

  const copyCode = () => {
    if (inputText === '') setError('Nothing to copy !!');
    else {
      navigator.clipboard.writeText()
      setCopy('Copied !')
      setTimeout(() => { setCopy('Copy') }, 1500);
    };


  }
  const resetCode = () => {
    setInputText('');
    setDisplayText('');
  }

  const handleConvert = () =>{
    try {
      if(inputText === ''){
        setError('Plese write your text !!')
      }
      else if(mode === 'encode'){
        const encoded = btoa(inputText);
        setDisplayText(encoded)
      }else{
        const decoded = atob(inputText);
        setDisplayText(decoded)
      }
    } catch (error) {
      setError('Invalid Base64 input for decoding !!')
    }
  }

  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div className='grid grid-cols-3 gap-10 m-4'>
        <h1 className='text-lg'>Base 64 Encoder/Decoder</h1>
        <button onClick={copyCode} className='p-1 pl-3 pr-3 bg-green-500 rounded-sm cursor-none hover:bg-green-600'>{copy}</button>
        <button onClick={resetCode} className='p-1 pl-3 pr-3 bg-red-500 rounded-sm cursor-none hover:bg-red-600'>Reset</button>
        <div>
          <button onClick={() => setMode('encode')} className={`border p-2 rounded-l-xl transition duration-200 cursor-none ${mode === "encode" ? "bg-slate-500 text-white" : "hover:bg-slate-700"
            }`}>Encode</button>
          <button onClick={() => setMode("decode")}
            className={`border border-l-0 p-2 rounded-r-xl transition duration-200 cursor-none ${mode === "decode" ? "bg-slate-500 text-white" : "hover:bg-slate-700"
              }`}>Decode</button>
        </div>
        <button className='p-1 pl-3 pr-3 bg-sky-500 rounded-sm cursor-none hover:bg-sky-600' onClick={handleConvert}>Convert</button>
      </div>

      <p className='text-red-500'>{error}</p>

      <div className='w-full grid grid-cols-2 bg-slate-900 h-full border-t-2'>
        <div className='border-r'>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="28"
            className='w-full border-none p-2 pl-4'
            placeholder='Write your Text/Code....'
          ></textarea>
        </div>
        <div className=''>
          <textarea
            value={displayText}
            onChange={(e) => setDisplayText(e.target.value)}
            rows='28'
            readOnly
            className='w-full border-none p-2 pr-4'
            placeholder='Encoded/Decoded text..'
          ></textarea>
        </div>
      </div>
    </div>
  )
}