import React, { useEffect } from 'react'

import Nav from '../components/Nav'
import { useSlidesReducer, useWindowOrientation } from '../hooks'

export default function Home() {
  const isWindowLandscape = useWindowOrientation()
  const [slideClassName, dispatch] = useSlidesReducer({
    initialState: `inactive`,
    activeClassName: `active`,
    inactiveClassName: `inactive`
  })
  useEffect(
    () => {
      setTimeout(() => {
        dispatch({ type: `activate` })
      }, 1000)
    },
    [slideClassName]
  )

  return (
    <div className="home">
      {!isWindowLandscape && <Nav />}
      <div className={`content__${slideClassName}`}>
        <h1>
          we are
          {` `}
          <span className="highlight">east bay react</span>
          {isWindowLandscape && (
            <span className="small">
              <a
                href="https://www.meetup.com/East-Bay-React-Meetup-Group/"
                className="content--link">
                on meetup.com
              </a>
            </span>
          )}
        </h1>
      </div>
    </div>
  )
}
