import React from 'react'
import logo from '../assets/img/img01-min.png'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from 'react-icons/ai'

const HomePage = () => {
  return (
    <main className='px-40 flex items-center flex-col lg:flex-row justify-center '>
      <img src={logo} alt='profile' className='rounded-full w-96 mx-20' />
      <div className='portfolio-text '>
        <h1 className='text-6xl my-4'>FRONTEND DEVELOPER</h1>
        <h3 className='text-4xl my-4'>Youtuber | Video Editor</h3>
        <div className='icons text-6xl flex'>
          <a
            href='https://github.com/Berkantcen'
            className='mr-3 mr-3 hover:text-orange-400'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub />
          </a>
          <a
            href='https://www.instagram.com/berkantcen/ '
            className='mr-3 mr-3 hover:text-orange-400'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineInstagram />
          </a>
          <a
            href='https://www.youtube.com/channel/UC4xi539jsdztcNRtliIbKvA'
            className='mr-3 mr-3 hover:text-orange-400'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineYoutube />
          </a>
          <a
            href='https://twitter.com/BerkantCen'
            className='mr-3 mr-3 hover:text-orange-400'
            target='_blank'
            rel='noreferrer'
          >
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
    </main>
  )
}

export default HomePage
