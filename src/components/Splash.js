import React, { useEffect } from 'react'

import Nav from './Nav'
import { useSlidesReducer, useWindowOrientation } from '../hooks'

import logo from '../static/svgs/logo.svg'

export default function Splash() {
  const isWindowLandscape = useWindowOrientation()

  const [slideClassName, dispatch] = useSlidesReducer({
    initialState: `active`,
    activeClassName: `active`,
    inactiveClassName: `inactive`
  })
  useEffect(
    () => {
      setTimeout(() => {
        dispatch({ type: `deactivate` })
      }, 1000)
    },
    [slideClassName]
  )

  return (
    <div className={`splash__${slideClassName}`}>
      <img src={logo} className="logo" alt="logo" />
      {isWindowLandscape && <Nav />}
    </div>
  )
}
