import React from 'react'

const Home = () => {
  return (
    <div className="section home">
      <h1>Welcome To My Website</h1>
      <button onClick={() => setPage("welcome")}>Home</button>
      <p>
        This is a beautiful React landing page created using components.
      </p>
    </div>
  )
}

export default Home