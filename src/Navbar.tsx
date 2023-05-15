import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Link to='/'>Home</Link>
        <Link to='/bioPersonSafety'>Bio Person Type Safety-TS</Link>
    </>
  )
}

export default Navbar