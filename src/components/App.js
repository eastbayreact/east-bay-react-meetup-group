import React from 'react'
import logo from '../static/svgs/logo.svg'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.meetup.com/East-Bay-React-Meetup-Group/"
          target="_blank"
          rel="noopener noreferrer">
          {`We're on Meetup.com!`}
        </a>
      </header>
    </div>
  )
}
