import React from 'react'

import Home from '../pages/home'
import Splash from './Splash'

export default function App() {
  return (
    <div className="app">
      <Splash />
      <main className="app--content">
        <Home />
      </main>
    </div>
  )
}
