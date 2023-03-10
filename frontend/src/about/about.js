import { Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export const About=()=>{
    const {user}=useAuthContext()
    if(!user){
        return <Navigate to={'/login'} replace={true} />
    }
    return(
        <div className="about-div-1">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ab optio corrupti laborum nisi necessitatibus cum blanditiis placeat ratione. Dolorem dignissimos eum iusto minus quo ipsa nihil libero qui itaque?</p>
        </div>
    )
}