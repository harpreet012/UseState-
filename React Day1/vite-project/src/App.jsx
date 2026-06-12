import React, { useState } from 'react'
import './App.css'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'

const App = () => {

  const [page, setPage] = useState("welcome")

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "welcome" && (
        <div className="section home">
          <h1>Welcome To My Website</h1>
          <p>Click any button from navbar to explore.</p>
        </div>
      )}

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "gallery" && <Gallery />}
      {page === "contact" && <Contact />}
    </>
  )
}

export default App