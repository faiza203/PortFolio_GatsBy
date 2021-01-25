import React from "react"
import { Link } from "gatsby"
import "../css/navbar.css"

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <Link to="/calculator">
          <h1>Calculator</h1>
        </Link>
      </div>
      <div>
        <Link to="/about">
          <h1>About US </h1>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
