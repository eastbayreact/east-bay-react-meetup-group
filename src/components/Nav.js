import React from 'react'

import { useWindowOrientation } from '../hooks'

export default function Nav() {
  const isWindowLandscape = useWindowOrientation()
  return (
    <nav className="nav">
      <ul className="header--menu">
        <li className="menu--location">
          <a href="https://www.google.com/maps/place/85C+Bakery+Cafe+-+Berkeley/@37.8719944,-122.2703732,17z/data=!3m1!4b1!4m5!3m4!1s0x80857e9e60317c95:0xcfd5ee224fa07e15!8m2!3d37.8719902!4d-122.2681845?hl=en">
            directions?
          </a>
        </li>

        {!isWindowLandscape && (
          <>
            <li>next meetup is on nov. 18</li>
            <li>
              <a
                href="https://www.meetup.com/East-Bay-React-Meetup-Group/"
                className="info--link">
                we're on meetup.com
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
