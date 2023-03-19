import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch (err){
            console.error(err);
        }
    }

  return (
    <div>
        <input 
        type="text" 
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
        type="password" 
        placeholder="Password..." 
        onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={signIn}>Sign In</button>
    </div>
  )
}
