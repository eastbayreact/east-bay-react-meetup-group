import React, { useState, useEffect } from 'react'

import Home from '../pages/home'
import Nav from './Nav'
import { useWindowOrientation } from '../hooks'
import logo from '../static/svgs/logo.svg'

export default function App() {
  const { shouldShowMainContent, slideClassName } = useSlidingSplash()
  const isWindowLandscape = useWindowOrientation()

  return (
    <div className="app">
      <div className={`app--splash__${slideClassName}`}>
        <img src={logo} className="logo" alt="logo" />
        {isWindowLandscape && <Nav />}
      </div>
      <main className="app--content">
        {shouldShowMainContent && (
          <Home shouldShowNav={shouldShowMainContent} />
        )}
      </main>
    </div>
  )
}

function useSlidingSplash() {
  const [splashState, setSplashState] = useState({
    shouldShowMainContent: false,
    slideClassName: `active`
  })

  const doSlideTransition = () =>
    setSplashState({
      shouldShowMainContent: true,
      slideClassName: `inactive`
    })

  useEffect(() => {
    setTimeout(doSlideTransition, 1000)
  })

  return splashState
}
