import React from 'react'

import Nav from '../components/Nav'
import { useWindowOrientation } from '../hooks'

export default function Home() {
  const isWindowLandscape = useWindowOrientation()
  return (
    <div className="home">
      {!isWindowLandscape && <Nav />}
      <div className="info">
        <h1>
          we are
          {` `}
          <span className="highlight">east bay react</span>
          {isWindowLandscape && (
            <span className="small">
              <a
                href="https://www.meetup.com/East-Bay-React-Meetup-Group/"
                className="info--link">
                on meetup.com
              </a>
            </span>
          )}
        </h1>
      </div>
    </div>
  )
}
