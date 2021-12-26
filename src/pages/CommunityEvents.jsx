import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Test1 from '../components/communityEvents/Test1'
const CommunityEvents = () => {
  return (
    <>
      <Link to='test'>Test</Link>
      <Routes>
        <Route path='/community-events/test' element={<Test1 />} />
      </Routes>
    </>
  )
}

export default CommunityEvents
