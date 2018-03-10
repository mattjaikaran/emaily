import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Emaily</h1>
      <p>Collect feedback from your users</p>
      <Link to="/surveys" className="btn-flat green text-white" style={{ color: 'white'}}>
        View My Surveys
      </Link>
    </div>
  )
}

export default Landing;
