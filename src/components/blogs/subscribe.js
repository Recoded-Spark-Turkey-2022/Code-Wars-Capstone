
import { useState } from "react";





function Subscribeform(){
    const [email , setEmail] = useState("")

    const  Handlesubmit = (e)=>{
e.preventDefault();

}}








return (

<form>
    <label htmlFor='email'>
        <input type="email" placeholder="Enter your e-mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </label>
    <button type="submit" onSubmit={Handlesubmit}>submit</button>
</form>

)
}


export default Subscribeform