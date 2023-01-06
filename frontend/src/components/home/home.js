import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../hooks/useAuthContext"

export const Home=()=>{
    const {user}=useAuthContext()

    if(!user){
        return <Navigate to={'/login'} replace={true}/>
    }
    return(
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repellat libero, debitis quaerat, provident quod perspiciatis voluptates aliquid quo, nesciunt maxime error fugit nihil quis magni quisquam rem ea excepturi.</p>
        </div>
    )
}