import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-zinc-900 text-white h-20 text-xl px-40 justify-end items-center flex flex-wrap'>
      <nav>
        <ul className='flex'>
          <li className='mx-8'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/community-events'>Community Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
