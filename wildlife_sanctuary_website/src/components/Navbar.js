import { Link, useMatch, useResolvedPath } from "react-router-dom";



export default function Navbar({ isSignedIn }) {
  return (
    <nav className="nav">
       <Link className="navbar-brand" href="#section1"  to={'/'}>
              <img src="./tiger3.jpg"></img>
              <Link to="/" className="site-title">
        Wildicare
      </Link>
            </Link>
      
      <ul>
        
        {!isSignedIn && <CustomLink to="/">Home</CustomLink>}
        {isSignedIn && <CustomLink to="Tourism">Tourism</CustomLink>}
        {!isSignedIn && <CustomLink to="/Register">Register</CustomLink>}
        {!isSignedIn && <CustomLink to="/Whywe">Why we?</CustomLink>}
        {!isSignedIn && <CustomLink to="/Instructions">Instructions</CustomLink>}
        {!isSignedIn && <CustomLink to="/Gallery">Gallery</CustomLink>}
        {!isSignedIn && <CustomLink to="/About">About us</CustomLink>}
        {!isSignedIn && <CustomLink to="/Donate">Donate</CustomLink>}
        {!isSignedIn && <CustomLink to="/Login">Sign in</CustomLink>}
        
      </ul>

      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
