import React, { useState } from 'react';
import StarField from '../components/StarBackground';
import { de } from '@faker-js/faker';

export default function ResponsiveDesigntester() {
  const devices = {
    "iPhone 14": { width: 390, height: 844 },
    "iPad": { width: 768, height: 1024 },
    "Laptop": { width: 1366, height: 768 },
    "Desktop": { width: 1920, height: 1080 },
  };

  const [url, setUrl] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('iPhone 14');
  const [orientation, setOrientation] = useState('portrait');

  const { width, height } = devices[selectedDevice];
  const displayWidth = orientation === 'portrait' ? width : height;
  const displayHeight = orientation === "portrait" ? height : width;

  return (
    <div className='relative min-h-screen'>
      <StarField />

      <div className="space-y-4">
        <h1 className='flex justify-center text-3xl underline font-bold'>Responsive Design Tester</h1>
        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border px-3 py-2 rounded w-1/2"
          />
          <select
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
            className="border px-2 py-2 rounded cursor-none bg-black"
          >
            {Object.keys(devices).map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
          <button
            onClick={() =>
              setOrientation((prev) =>
                prev === "portrait" ? "landscape" : "portrait"
              )
            }
            className=" cursor-none px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Rotate
          </button>
        </div>

        <div className="border shadow-lg flex justify-center items-center content-center overflow-hidden">
          {url && (
            <iframe
              src={url}
              title="responsive-view"
              width={displayWidth}
              height={displayHeight}
              style={{
                border: "1px solid #ccc",
                transform: "scale(0.9)",
                transformOrigin: "top left",
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}