import React, { useState } from 'react';
import StarField from '../components/StarBackground';
// import axios from 'axios';

export default function TechStackFinder() {
  const [url, setUrl] = useState('');
  const [stack, setStack] = useState([]);
  const [error, setError] = useState('');

  // const fetchStack = async () => {
  //   setError('');
  //   setStack([]);
  //   try {
  //     const response = await axios.get(`https://api.wappalyzer.com/v2/lookup/?urls=${url}`, {
  //       headers: {
  //         'x-api-key': 'YOUR_WAPPALYZER_API_KEY'
  //       }
  //     });
  //     const technologies = response.data[0]?.technologies || [];
  //     setStack(technologies);
  //   } catch (err) {
  //     setError('Something went wrong. Check your URL or API key.');
  //   }
  // };

  return (

    <div className='relative min-h-screen'>
      <StarField />
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold underline">Website Tech Stack Finder</h1>
        <input
          type="text"
          placeholder="https://example.com"
          className="p-2 border rounded w-1/2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          // onClick={fetchStack}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-none"
        >
          Check Stack
        </button>
        {error && <p className="text-red-600">{error}</p>}
        <ul className="mt-4 list-disc">
          {stack.map((tech, idx) => (
            <li key={idx}>
              {tech.name} – <span className="text-gray-500">{tech.categories?.[0]?.name || 'Unknown'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
