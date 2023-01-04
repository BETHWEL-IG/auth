import { useState } from "react";
//import { useSignupForm } from "../hooks/useSigupForm";
import { useLoginForm } from "./useLoginForm";
import './login.css'

export const LoginUsers=()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {loginForm,succcess, error}=useLoginForm()
    //const {signupForm}=useSignupForm()

    const handleSubmit=(e)=>{ 
        e.preventDefault()
        loginForm(email, password)

        
    }
    return(
        <div className="usersForm-div-1">
            <h3 className="login-h3-1">Login</h3>
            <form className="login-form-1" onSubmit={handleSubmit}>
                <label >Email</label>
                <input 
                    type="text"
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label >password</label>
                <input 
                    type="text"
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button>Login</button>
                {error && <div>{error}</div>}
                {succcess && <div>{succcess}</div>}
            </form>
        </div>
    )
}