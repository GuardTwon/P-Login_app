import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Dashboar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/home"
            >
                Homem
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                        >
                    Login
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/register"
                        >
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>

  )
}
