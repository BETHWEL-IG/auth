import { useState } from "react";
import { useSignupForm } from "./useSigupForm";

export const SignupUsers=()=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const {signupForm, succcess, error}=useSignupForm()

    const handleSubmit=(e)=>{
        e.preventDefault()
        signupForm(email, password)

        setEmail('')
        setPassword('')
    }
    return(
        <div className="usersForm-div-1">
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
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
                <button>Signup</button>
                {error && <div>{error}</div>}
                {succcess && <div>{succcess}</div>}
            </form>
        </div>
    )
}