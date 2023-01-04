import { NavLink, Outlet } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


export const RootLayout=()=>{
    const {user}=useAuthContext()
    const {logout}=useLogout()
    const handleLogout=()=>{
        logout()
    }
    return(
        <div>
            <header>
                <nav>
                    <h3>Auth Routers</h3>
                    {user &&(
                        <div>
                            <NavLink to={'/'}>Home</NavLink>
                            <span>{user.email}</span>
                            <button onClick={handleLogout}>Logout</button>
                           
                        </div>
                    )}
                    {!user &&(
                        <div>
                            <NavLink to={'/signup'}>Signup</NavLink>
                            <NavLink to={'/login'}>Login</NavLink>
                        </div>
                    )}
                    
                </nav>
                
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}