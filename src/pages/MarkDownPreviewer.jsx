import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import StarField from '../components/StarBackground';

export default function MarkDownPreview() {
  const [markdownInput, setMarkdownInput] = useState('');
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [error, setError] = useState('');

  const copyMarkdown = () => {
    if (markdownInput === '') setError('Nothing to copy !!');
    else {
      navigator.clipboard.writeText(markdownInput)
      setCopyStatus('Copied !')
      setTimeout(() => { setCopyStatus('Copy') }, 1500);
    };
  }

  const resetAll =() =>{
    setMarkdownInput('')
  }

  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div className='flex gap-10 m-4'>
        <h1>Markdown Preview</h1>
        <button onClick={copyMarkdown} className='p-1 pr-3 bg-green-500 rounded-sm cursor-none hover:bg-green-600'>{copyStatus}</button>
        <button onClick={resetAll} className='p-1 bg-red-500 rounded-sm cursor-none hover:bg-red-600'>Reset</button>
      </div>

      <p className='text-red-500'>{error}</p>

      <div className='w-full grid grid-cols-2 bg-slate-900 h-full border-t-2'>
        <div className='border-r'>
          <textarea
            value={markdownInput}
            onChange={(e) => setMarkdownInput(e.target.value)}
            rows="28"
            className='w-full border-none p-2 pl-4'
            placeholder='Write your Markdown'
          ></textarea>
        </div>
        <div className='p-3'>
          <ReactMarkdown>{markdownInput}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}