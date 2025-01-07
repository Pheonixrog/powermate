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
    <div className="flex justify-center items-center w-full h-full p-0 md:p-4">
      <div className="relative w-full max-w-[360px] aspect-[9/18]"> {/* Maintain aspect ratio */}
        {/* Image overlay */}
        <img 
          src="/mac.svg" 
          alt="Device Frame" 
          className="absolute inset-0 w-full h-full z-20 object-contain"
        />
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-[calc(100%-25px)] h-[calc(100%-25px)] top-[14px] left-[10px] md:top-[14px] md:left-[10px] z-10 rounded-[22px]"
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

