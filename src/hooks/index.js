/* eslint-disable import/prefer-default-export */
import { useState, useReducer, useEffect } from 'react'

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
  }, [])

  return isWindowLandscape
}

export function useSlidesReducer({
  initialState,
  activeClassName,
  inactiveClassName
}) {
  const slideReducer = (state, action) => {
    switch (action.type) {
      case `activate`:
        return activeClassName
      case `deactivate`:
        return inactiveClassName
      default:
        return state
    }
  }

  return useReducer(slideReducer, initialState)
}
