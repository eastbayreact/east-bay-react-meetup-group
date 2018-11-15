/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react'

export function useWindowOrientation() {
  const [isWindowLandscape, setIsWindowLandscape] = useState(true)
  const handleResize = () => {
    setIsWindowLandscape(window.matchMedia(`(orientation: landscape)`).matches)
  }
  useEffect(() => {
    handleResize()
    window.addEventListener(`resize`, handleResize)
    return () => {
      window.removeEventListener(`resize`, handleResize)
    }
  })

  return isWindowLandscape
}
