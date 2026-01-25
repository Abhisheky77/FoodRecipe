
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import Navbar from "./components/Navbar";
import Details from './components/pages/Details'

function App() {

  return (
    <div className=' w-screen'>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element={<Home />} />

        <Route
          path='/favorites'
          element={<Favorites />} />

           <Route
          path='/details/:id'
          element={<Details/>} />
     
      </Routes >
     
    </div>
  )
}

export default App
