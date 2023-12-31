import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import { AppContext } from "./context/ContextApi"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <AppContext>
        <BrowserRouter>
         <div className='flex flex-col h-full' >
          <Header />
            <Routes>
              <Route path='/' exact element={<Feed />} />
              <Route path='/searchResult/:searchQuary' element={<SearchResult />} />
              <Route path='/video/:id' element={<VideoDetails />} />
            </Routes>
          </div>  
        </BrowserRouter>
      </AppContext>
    </>
  )
}

export default App
