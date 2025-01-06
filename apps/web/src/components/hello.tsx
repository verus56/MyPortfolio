'use client'

import { useEffect } from 'react'

function Hello() {
  useEffect(() => {
    console.log(`
Hi This is V56!!!
`)
  }, [])

  return null
}

export default Hello
