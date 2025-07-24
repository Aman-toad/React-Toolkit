import React, { useEffect, useRef, useState } from 'react';
import StarField from '../components/StarBackground';

export default function JWTDecoder() {

  const [error, setError] = useState('')
  const [copyHeader, setCopyHeader] = useState('Copy Header')
  const [copyPayload, setCopyPayload] = useState('Copy Payload')
  const [inputJwt, setInputJwt] = useState('')
  const [displayOutput, setDisplayOutput] = useState('')
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.style.height = 'auto';
      outputRef.current.style.height = `${outputRef.current.scrollHeight}px`
    }
  }, [displayOutput])

  const handleConvert = () => {
    setDisplayOutput('');
    try {
      const splitInput = inputJwt.split('.');
      if (splitInput.length !== 3) {
        setError('Invalid JWT Token'); return
      }
      const header = atob(splitInput[0]);
      const payload = atob(splitInput[1]);
      const signature = splitInput[2];

      setDisplayOutput(
        `Header: ${JSON.stringify(JSON.parse(header), null, 2)}\n` +
        `Payload: ${JSON.stringify(JSON.parse(payload), null, 2)}\n` +
        `Signature: ${signature}`
      );
    } catch (error) {
      setError('Invalid String !!!')
    }
  }

  const copyHead = () => {
    if (displayOutput === '') setError('Nothing to Copy !');
    else {
      const splitInput = inputJwt.split('.');
      const header = atob(splitInput[0]);

      navigator.clipboard.writeText(header);

      setCopyHeader('Copied !')
      setTimeout(() => { setCopyHeader('Copy Header') }, 1500);
    }
  }

  const copyPay = () => {
    if (displayOutput === '') setError('Nothing to Copy !');
    else {
      const splitInput = inputJwt.split('.');
      const payload = atob(splitInput[1]);

      navigator.clipboard.writeText(payload);
      setCopyPayload('Copied !')
      setTimeout(() => { setCopyPayload('Copy Payload') }, 1500);
    }
  }

  const clearAll = () => {
    setInputJwt(''); setDisplayOutput(''); setError('')
  }

  return (
    <div className='relative max-h-screen'>
      <StarField />

      <div className='grid grid-cols-1 content-center w-full'>
        <h1 className='flex justify-center text-3xl font-bold underline'>
          JWT Decoder
        </h1>
        <div className='m-10 flex justify-center flex-col items-center'>
          <textarea
            value={inputJwt}
            onChange={(e) => {
              setInputJwt(e.target.value);
              setError('')
            }}
            className='w-full lg:w-[70%] border bg-slate-900 rounded-md p-3 m-2'
            placeholder='Write a JWT String...'
            rows="5">
          </textarea>

          <textarea 
            ref={outputRef} value={displayOutput} readOnly className='w-full lg:w-[70%] border bg-slate-900 rounded-md m-2 p-3' placeholder='Your Output...' rows="5">
          </textarea><p className='text-red-500'>{error}</p>
          <div className='grid grid-cols-2 md:grid-cols-4 content-center gap-10 m-3'>
            <button onClick={handleConvert} className='p-1 pl-3 pr-3 bg-orange-500 rounded-sm cursor-none flex justify-center items-center hover:bg-orange-600'>Convert</button>
            <button onClick={clearAll} className='p-1 pl-3 pr-3 bg-red-500 rounded-sm cursor-none flex justify-center items-center hover:bg-red-600'>Clear</button>
            <button onClick={copyHead} className='p-1 pl-3 pr-3 bg-green-500 rounded-sm cursor-none flex justify-center items-center hover:bg-green-600'>{copyHeader}</button>
            <button onClick={copyPay} className='p-2 pl-3 pr-3 bg-sky-500 rounded-sm flex justify-center items-center cursor-none hover:bg-sky-600'>{copyPayload}</button>
          </div>
        </div>
      </div>
    </div>
  )
}