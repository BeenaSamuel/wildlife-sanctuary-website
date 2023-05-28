import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



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
        
       <CustomLink to="/">Home</CustomLink>
        {isSignedIn && <CustomLink to="Tourism">Tourism</CustomLink>}
        {!isSignedIn && <CustomLink to="/Register">Register</CustomLink>}
         <CustomLink to="/View Donors">View Donors</CustomLink>
        <CustomLink to="/Whywe">Why we?</CustomLink>
        <CustomLink to="/Instructions">Instructions</CustomLink>
         <CustomLink to="/Gallery">Gallery</CustomLink>
        <CustomLink to="/Donate">Donate</CustomLink>
        {!isSignedIn && <CustomLink to="/Login">Sign in</CustomLink>}
        {/* <Button color='teal' fluid size='large' >
            Logout
          </Button> */}
        
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
