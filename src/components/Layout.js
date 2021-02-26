import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"


import "../styles/cover.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children, breadcrumbs }) {
  return (
    <>
    <Helmet>
      <title>Johns Website</title>
       {breadcrumbs ? ` - ${breadcrumbs.join(" - ")}` : ``}
      <Link to="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <Link rel="canonical" to="https://getbootstrap.com/docs/5.0/examples/cover/" />
      <Link to="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      <Link to="cover.css" rel="stylesheet" />

      </Helmet>

    <body className="d-flex h-110 text-center text-light bg-dark">

      <div className="cover-container mx-auto flex-column">
        <header className="d-flex mx-auto mt-5">

            <h3 className="flex-fill">John Murphy</h3>

            <nav className="flex-fill nav nav-masthead navbar-expand-lg pl-5 ml-5">

              <Link className="nav-link" activeClassName="active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" activeClassName="active" to="/about/">About</Link>
              <Link className="nav-link"  activeClassName="active" to="/contact/">Contact</Link>

            </nav>


    </header>

    <main>{children}</main>
    <footer className="pt-5 mt-auto text-white-50">
      <p>John Murphy ©</p>
    </footer>
  </div>

    </body>

    </>
  )
}
