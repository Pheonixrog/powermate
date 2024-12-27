'use client'

import { useRef, useEffect } from 'react'

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-[360px] h-[730px]"> {/* Outer container dimensions */}
        {/* Image larger by 2px */}
        <img 
          src="/mac.svg" 
          alt="Device Frame" 
          className="absolute inset-0 w-[calc(100%)] h-[calc(100%)] z-20 object-cover -top-1 -left-1" 
        />
        {/* Video lies perfectly inside the image */}
        <video
          ref={videoRef}
          className="absolute left-1 top-2 inset-0 object-cover w-[calc(100%-25px)] h-[calc(100%-20px)] z-10 rounded-3xl"
          loop
          muted
          playsInline
        >
          <source src="/vids.MOV" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
