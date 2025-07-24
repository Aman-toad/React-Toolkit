import React, { useRef, useState } from 'react';
import StarField from '../components/StarBackground';
import QRCode from 'react-qr-code';

export default function QRGenerator() {

  const [text, setText] = useState('');
  const qrRef = useRef(null);

  const handleDownload = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.href = pngFile;
      downloadLink.download = 'qr-code.png';
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="relative min-h-screen">
      <StarField />

      <div className='grid grid-cols-1 content-center w-full'>
        <h1 className='flex justify-center text-3xl font-bold underline'>
          QR CODE GENERATOR
        </h1>
        <div className='m-10 flex justify-center flex-col items-center'>
          <textarea
            value={text.trim()}
            onChange={(e) => setText(e.target.value)}
            className='w-full lg:w-[70%] border bg-slate-900 rounded-md p-3 m-2'
            placeholder='Write Plain Text/URL/Anything.....'
            rows="5">
          </textarea>
          {text && (
            <>
              <div className='flex justify-center items-center flex-col' ref={qrRef}>
                <QRCode
                  className='mt-10 border-2 p-2 bg-slate-900'
                  value={text}
                  size={200}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin={true}
                />
              </div>
              <button onClick={handleDownload} className='p-4 mt-10 text-lg font-bold bg-sky-500 rounded-sm cursor-none flex justify-center items-center hover:bg-sky-600'>
                Download QR Code
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  )
}