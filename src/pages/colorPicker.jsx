import React, { useEffect, useState } from 'react';
import StarField from '../components/StarBackground';

export default function ColorPicker() {
  const [color, setColor] = useState('#3498db')
  const [showColorCode, setShowColorCode] = useState('')
  const [rgb, setRgb] = useState({})
  const [hsl, setHsl] = useState({})

  useEffect(() => {
    const rgbValue = hexToRgb(color);
    const hslValue = rgbToHsl(rgbValue.r, rgbValue.g, rgbValue.b)
    setRgb(rgbValue)
    setHsl(hslValue)
  },[color])

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16)
    return { r, g, b };
  }

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
        case g: h = ((b - r) / d + 2); break;
        case b: h = ((r - g) / d + 4); break;
      }
      h *= 60;
    }
    return {
      h: Math.round(h),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    }
  }

  return (
    <div className='relative min-h-screen bg-[#0c0c0c]'>


      <div className='flex flex-col items-center content-center w-full'>
        <div className='flex justify-center items-center flex-col'>
          <h1 className='flex justify-center text-3xl font-bold underline'>
            Color Picker
          </h1>

          <h2 className='mt-10'>Pick A color</h2>
          <input
            type="color"
            className='w-full h-40'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className='border w-[30%] h-fit p-3 mt-4 rounded bg-slate-900 text-white'>
          <p><span className='font-bold'>HEX:</span> {color}</p>
          <p><span className='font-bold'>RGB:</span> rgb({rgb.r}, {rgb.g}, {rgb.b})</p>
          <p><span className='font-bold'>HSL:</span> hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</p>
        </div>
      </div>
    </div>
  )
}