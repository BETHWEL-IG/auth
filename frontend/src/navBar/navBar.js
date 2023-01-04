import { NavLink, Outlet,Link} from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"
import './navBar.css'
import { useEffect, useRef, useState } from "react"


export const NavBar=()=>{
    const {user}=useAuthContext()
    const {logout}=useLogout()
    const [open, setOpen]=useState(false)
    const [navOpen, setNavOpen]=useState(false)
    const [body, setBody]=useState(false)
    const burgerRef=useRef()
    const handleLogout=()=>{
        logout()
    }
    
    const handleClick=()=>{
        setOpen(!open)
        setNavOpen(!navOpen)  
        setBody(!body)
    }

    useEffect(()=>{
      const closeNavBar=(e)=>{
        
        if(e.path[0] !== burgerRef.current){
            setNavOpen(false)
           
        }
        
      }
      
      document.body.addEventListener('click', closeNavBar)

      return ()=> document.body.removeEventListener('click', closeNavBar)
        
    },[])
    
    const toggleClassCheck=open ? "open": "";
    const toggleClassCheck1=navOpen ? "nav-open": "";
    
    

   
    return(
        <div className='navBar-div-1'>
            
                <nav className="navBar-nav-1">
                    
                    {user &&(
                        <>
                            <div className="navBar-div-2">
                                <div className="navBar-div-4">
                                    <div ref={burgerRef} className={`burger ${toggleClassCheck}`} onClick={handleClick}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <p className="navBar-p-1">Logo</p>
                            
                                </div>
                                <div>
                                    <span className="navBar-span-1">{user.email}</span>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            </div>

                         
                        </>
                         
                    )}
                    {!user &&(
                        <div className="navBar-div-5-auth">
                            <p>Logo</p>
                            <div className="auth-1">
                                <NavLink to={'/signup'}><span>Singup</span></NavLink>
                                <NavLink to={'/login'}><span>Login</span></NavLink>
                            </div>
                        </div>
                    )}
                    
                </nav>
                {user && (
                    <div className="navBar-div-3">
                        
                        <div><NavLink to={'/'}>Home</NavLink></div>
                        <div><NavLink to={'/'}>About</NavLink></div>
                        <div><NavLink to={'/'}>Contact</NavLink></div>
                        <div><NavLink to={'/'}>Services</NavLink></div>


                        <nav className={`nav ${toggleClassCheck1}`}>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/'}>About</Link>
                            <Link to={'/'}>Contact</Link>
                            <Link to={'/'}>Services</Link>
                        </nav>
                    </div> 
                    
                    
                )}
               
            <main>
            
                <Outlet/>
            </main>
        </div>
    )
}