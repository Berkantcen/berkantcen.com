import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// COMPONENTS
import Header from './components/Header'
import HomePage from './pages/HomePage'
import CommunityEvents from './pages/CommunityEvents'
import Footer from './components/Footer'

function App() {
  return (
    <div className='app flex flex-col justify-between h-screen'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/community-events' element={<CommunityEvents />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
