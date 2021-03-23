import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../styles/cover.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children, breadcrumbs }) {
  return (
    <>
      <Helmet>
        <title>Slaod</title>
      </Helmet>

      <div className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container mx-auto">
          <header className="d-flex mx-auto mt-5">
            <h3 className="flex-fill">
              <span className="" style={{ color: "red" }}>
                Slaod
              </span>
            </h3>

            <nav className="flex-fill nav nav-masthead navbar-expand-lg pl-5 ml-5">
              <Link
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link" activeClassName="active" to="/about/">
                About
              </Link>
              <Link
                className="nav-link"
                activeClassName="active"
                to="/contact/"
              >
                Contact
              </Link>
            </nav>
          </header>

          <main>{children}</main>
          <footer className="pt-5 mt-auto text-white-50">
            <p>Slaod ©</p>
          </footer>
        </div>
      </div>
    </>
  )
}
