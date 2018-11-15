import React, { useState, useEffect } from 'react'

import Home from '../pages/home'
import logo from '../static/svgs/logo.svg'

export default function App() {
  const { shouldShowMainContent, slideClassName } = useSlidingSplash()

  return (
    <div className="app">
      <div className={`app--splash__${slideClassName}`}>
        <header className="app--header">
          <img src={logo} className="logo" alt="logo" />
          {shouldShowMainContent}
        </header>
      </div>
      <main className="app--content">{shouldShowMainContent && <Home />}</main>
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
