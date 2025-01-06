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
    const card = cardRef.current
    if (!card) return

    const updateCardRotation = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cardCenterX = rect.width / 2
      const cardCenterY = rect.height / 2
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      const angleX = ((mouseY - cardCenterY) / cardCenterY) * maxRotation
      const angleY = -((mouseX - cardCenterX) / cardCenterX) * maxRotation
      const angleZ = ((mouseX - cardCenterX) / cardCenterX) * maxZRotation

      setRotation({ x: angleX, y: angleY, z: angleZ })

      const glossyX = (mouseX / rect.width) * 100
      const glossyY = (mouseY / rect.height) * 100
      setGlossyPosition({ x: glossyX, y: glossyY })
    }

    const resetCardRotation = () => {
      setRotation({ x: 0, y: 0, z: 0 })
      setIsHovering(false)
    }

    card.addEventListener('mousemove', updateCardRotation)
    card.addEventListener('mouseleave', resetCardRotation)

    return () => {
      card.removeEventListener('mousemove', updateCardRotation)
      card.removeEventListener('mouseleave', resetCardRotation)
    }
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500" style={{ perspective: '500px' }}>
      <div
        ref={cardRef}
        className="w-[250px] bg-white p-4 rounded-2xl flex justify-center items-center overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        style={{
          transition: 'transform 0.1s ease',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        }}
        onMouseEnter={() => {
          setIsHovering(true)
          setRotation({ x: 0, y: 0, z: 0 })
        }}
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

