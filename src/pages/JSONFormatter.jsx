import React, { useState } from "react";
import StarField from "../components/StarBackground";

export default function JsonFormatter() {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [error, setError] = useState('')
  const [btnText, setBtnText] = useState('Copy')

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(inputJson);
      const pretty = JSON.stringify(parsed, null, 2);
      setOutputJson(pretty);
      setError('')
    } catch (error) {
      setError("Invalid JSON, please fix the formatting");
      setOutputJson('');
    }
  }

  const copyText = () => {
    if (outputJson === '') setError('No json output !!');
    else {
      navigator.clipboard.writeText(outputJson);
      setBtnText('Copied')
    }
  }

  const clearText = () => {
    if(outputJson === '' && inputJson === '') setError('There is nothing to clear !!');
    else {
      setInputJson('');
      setOutputJson('');
      setError('');
      setBtnText('Copy')
    }
  }

  return (
    <div className="relative min-h-screen">
      <StarField />

      <h1 className="flex justify-center items-center mt-3 mb-7 font-bold text-4xl">JSON Formatter</h1>

      <div className="grid grid-cols-1 text-center content-center ">
        {/* input textarea minified */}
        <div>
          <textarea value={inputJson} onChange={(e) => setInputJson(e.target.value)} name="jsonInput" rows="10" placeholder="Input JSON" className=" border w-[80%] lg:w-[60%] p-3">
          </textarea>
        </div>

        {/* a button  */}
        <div >
          <button onClick={handleFormat} className="p-5 m-1 text-xl bg-sky-600 rounded-2xl cursor-none hover:bg-sky-700 ">Format JSON</button>
        </div>

        {/* display formatted json format */}
        <div>
          <textarea readOnly name="displayJson" rows="10" placeholder="Formatted JSON" className="border w-[80%] lg:w-[60%] p-3" value={outputJson}>
          </textarea>
        </div>

        {/*Extra features */}
        <div className="flex justify-center gap-10 ">
          <button onClick={copyText} className="w-25 p-4 m-1 text-20 bg-sky-600 rounded-2xl cursor-none hover:bg-sky-700 ">{btnText}</button>
          <button onClick={clearText} className="w-25 m-1 p-4 text-20 bg-sky-600 rounded-2xl cursor-none hover:bg-sky-700 ">Clear</button>
        </div>

        {/*Error div */}
        <div>
          {error && <p className="text-red-500 mt-3 mb-50">{error}</p>}
        </div>
      </div>
    </div>
  )
}