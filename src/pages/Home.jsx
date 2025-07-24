import React from "react";
import StarField from "../components/StarBackground";
import Navigation from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {

  const cards = [
    { title: 'JSON Formatter', disc: 'a json formatter which set your data structure in a easy mode', tech: 'JS', eg: '<h1> Hello world </h1>', link:'json-formatter' },
    { title: 'Regex Tester', disc: 'a json formatter which set your data structure in a easy mode', tech: 'JS', eg: '<h1> Hello world </h1>',link:'regex-tester' },
    { title: 'Live Markdown Preview', disc: 'a markdown previwer help you too preview how your text looks in your readme', tech: 'JS', eg: '<h1> Hello world </h1>',link:'markdown-preview' },
    { title: 'Base 64 Tool', disc: 'a json formatter which set your data structure in a easy mode', tech: 'JS', eg: '<h1> Hello world </h1>',link:'base64' },
    { title: 'JWT Decoder', disc: 'a json formatter which set your data structure in a easy mode', tech: 'JS', eg: '<h1> Hello world </h1>', link:'jwt-decoder' },
    { title: 'Color Picker', disc: 'a json formatter which set your data structure in a easy mode', tech: 'JS', eg: '<h1> Hello world </h1>', link:'color-picker' }
  ]

  return (
    <div className="relative min-h-screen">
      <StarField />
      <div className="min-h-screen">
        <Navigation />

        <div className="flex items-center justify-center pt-20">
          <div className="w-full max-w-2xl flex flex-col">
            <h1 className="text-3xl md:text-4xl font-normal mb-16 ">Welcome,  to react tools where you can find the tools that make your Work easy</h1>

            <div className="flex justify-center items-center mt-50">
              <button className="border p-5 w-50 text-2xl rounded-3xl hover:bg-gray-800 cursor-none">
                Tools
              </button>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="mt-40 mb-150 w-full ">
          <div className="ml-10 space-x-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-10">
            {cards.map((card) => (
              <div className="p-8 bg-slate-800 rounded-2xl flex flex-col mb-7 w-full content-start">
                <div className="circles flex gap-2 mb-6">
                  <div className="h-4 w-4 rounded-full bg-red-600"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                  <div className="h-4 w-4 rounded-full bg-green-600"></div>
                </div>
                <h2 className="font-bold text-2xl mb-4">{card.title}</h2>
                <p className="text-gray-300 mb-4">{card.disc}</p>
                <button className="border w-10 rounded-sm">{card.tech}</button>
                <div className="border mt-8 p-4 rounded-md">
                  {card.eg}
                </div>
                <Link 
                to={card.link}
                className="mt-5 cursor-none hover:underline">View Tool &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}