'use client'
import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const names = ['conscience', 'Amaka', 'Ikeoluwa', 'Fatima', 'Chinedu', 'Zainab']

function Hero() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % names.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video-new-c5.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 px-6 py-32 max-w-2xl mt-8">
        <h1 className="text-5xl md:text-7xl font-bold text-blue-950 leading-tight mt-14">
          Put your <br /> money to work
        </h1>
        <p className="text-3xl text-gray-200 mb-8">
          Invest wisely like
          <span className="text-blue-400 font-semibold ml-1.5">{names[count]}</span>
        </p>

        <div className="flex overflow-hidden mb-6">
          <input
            type="text"
            placeholder="Your email.."
            className="flex-1 px-4 py-4 outline-none text-gray-800 bg-white rounded-lg"
          />
          <button className="bg-blue-600 text-white px-6 py-3 ml-4 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Investing
          </button>
        </div>

        <div className="flex items-center space-x-3 cursor-pointer text-gray-200 hover:text-blue-300 transition">
          <div className="bg-white/20 p-3 rounded-full">
            <FaPlay className="text-white" size={10} />
          </div>
          <p className="text-sm font-medium">See how 1m+ customers are investing</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
