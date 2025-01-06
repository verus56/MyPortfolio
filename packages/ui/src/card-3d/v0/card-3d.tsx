'use client'

import React, { useRef, useState, useEffect } from 'react'

interface Card3DProps {
  imageUrl: string
  altText: string
}

export default function Card3D({ imageUrl, altText }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glossyRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 })
  const [glossyPosition, setGlossyPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const maxRotation = 50
  const maxZRotation = 20

  useEffect(() => {
    const updateCardRotation = (e: MouseEvent) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const cardCenterX = rect.left + rect.width / 2
      const cardCenterY = rect.top + rect.height / 2
      const distanceX = e.clientX - cardCenterX
      const distanceY = e.clientY - cardCenterY
      const maxDistance = Math.sqrt(window.innerWidth ** 2 / 4 + window.innerHeight ** 2 / 4)

      const angleX = (distanceY / maxDistance) * maxRotation
      const angleY = -(distanceX / maxDistance) * maxRotation
      const angleZ = (distanceX / maxDistance) * maxZRotation

      setRotation({ x: angleX, y: angleY, z: angleZ })

      const glossyX = ((e.clientX - rect.left) / rect.width) * 100
      const glossyY = ((e.clientY - rect.top) / rect.height) * 100
      setGlossyPosition({ x: glossyX, y: glossyY })
    }

    const resetCardRotation = () => {
      setRotation({ x: 0, y: 0, z: 0 })
      setIsHovering(false)
    }

    document.addEventListener('mousemove', updateCardRotation)
    document.addEventListener('mouseleave', resetCardRotation)

    return () => {
      document.removeEventListener('mousemove', updateCardRotation)
      document.removeEventListener('mouseleave', resetCardRotation)
    }
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500" style={{ perspective: '500px' }}>
      <div
        ref={cardRef}
        className="w-[250px] bg-white p-4 rounded-2xl  flex justify-center items-center overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        style={{
          transition: 'transform 0.1s ease',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          ref={glossyRef}
          className="w-full h-full absolute top-0 left-0 z-2 mix-blend-lighten"
          style={{
            transition: '0.3s',
            opacity: isHovering ? 1 : 0,
            backgroundImage: `radial-gradient(circle at ${glossyPosition.x}% ${glossyPosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`,
          }}
        />
        <img className="w-full h-full rounded-lg" src={imageUrl} alt={altText} />
      </div>
    </div>
  )
}