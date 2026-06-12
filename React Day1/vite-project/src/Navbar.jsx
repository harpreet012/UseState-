import React from 'react'

const Navbar = ({ setPage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
      <button onClick={() => setPage("services")}>Services</button>
      <button onClick={() => setPage("gallery")}>Gallery</button>
      <button onClick={() => setPage("contact")}>Contact</button>
    </div>
  )
}

export default Navbar