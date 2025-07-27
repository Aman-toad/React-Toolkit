import React, { useState } from 'react';
import StarField from '../components/StarBackground';

export default function FaviconGenerator() {

  const [text, setText] = useState('')
  const [bgColor, setBgColor] = useState('#010101');
  const [textColor, setTextColor] = useState('#111111');
  const [fontSize, setFontSize] = useState(32);
  const [fontFamily, setFontFamily] = useState("sans-serif");
  const [shape, setShape] = useState("square");
  const [faviconUrl, setFaviconUrl] = useState('')

  const generateFaviconFromText = (text, bgColor, textColor, fontSize, fontFamily, shape) => {
    const canvaContainer = document.getElementById('canva-container');
    canvaContainer.innerHTML = '';
    const canvas = document.createElement('canvas')
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')

    //shape
    if (shape === 'circle') {
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    //bgcolor
    ctx.fillStyle = bgColor;

    //text
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    canvaContainer.appendChild(canvas);

    //download set
    const dataUrl = canvas.toDataURL('image/png');
    setFaviconUrl(dataUrl)
  }

  const generateFaviconFromImage = (file) => {
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, 64, 64);

      const dataUrl = canvas.toDataURL('image/png');
      setFaviconUrl(dataUrl); 

      const canvaContainer = document.getElementById('canva-container');
      canvaContainer.innerHTML = '';
      canvaContainer.appendChild(canvas);
    };
    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
};


  return (
    <div className='relative min-h-screen'>
      <StarField />
      <h2 className='flex justify-center text-3xl underline mb-10 font-bold'>FAVICON GENERATOR</h2>
      <div id='container' className="bg-slate-800 pt-5 pb-5 grid grid-cols-1 md:grid-cols-2">
        <div className='flex flex-col justify-center items-center md:border-r space-y-5'>

          <input
            type="text"
            placeholder="Write Short text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border px-3 py-2 rounded w-1/2"
          />
          <h2>OR</h2>
          <input
            className="border px-3 py-2 rounded w-1/2"
            type="file"
            accept='image/*'
            onChange={(e) => generateFaviconFromImage(e.target.files[0])}
            placeholder='Upload Image'
          />

          <div className='mt-10 '>
            <h2 className='flex justify-center text-2xl font-semibold'>Customization</h2>
            <div className='grid grid-cols-2 gap-5 border p-4 bg-slate-800 rounded-md'>

              <p>Font Size: </p>
              <input
                className='border p-1 rounded-sm'
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
              />

              <p>Font Family: </p>
              <select
                className='bg-black p-1 cursor-none'
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
                <option value="cursive">Cursive</option>
              </select>

              <p>Background Color: </p>
              <input
                className='border p-1 rounded-sm w-full'
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                type="color" />

              <p>Text Color: </p>
              <input
                className='border p-1 rounded-sm w-full' type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />

              <p>Shape: </p>
              <select
                className='bg-black p-1 cursor-none'
                value={shape}
                onChange={(e) => setShape(e.target.value)}
              >
                <option value="square">Square</option>
                <option value="circle">Circle</option>
              </select>

            </div>
          </div>

          <button
            onClick={() => generateFaviconFromText(text, bgColor, textColor, fontSize, fontFamily, shape)}
            className="mb-12 md:mb-0 mt-10 cursor-none px-4 py-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-700"
          >
            Generate Favicon
          </button>


        </div>

        <div className='flex flex-col justify-center items-center content-center' id='canva-container'>
          {faviconUrl && (
            <div className="flex flex-col items-center mt-10">
              <a href={faviconUrl} download="favicon.png" className='cursor-none'>
                <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 cursor-none">
                  Download Favicon
                </button>
              </a>
            </div>
          )}
        </div>



      </div>
    </div>
  )
}