
import { useState } from "react";
import { Auth } from "../../firebase";




function Subscribeform(){
    const [email , setEmail] = useState("")

    const  Handlesubmit = (e)=>{
e.preventDefault();
Auth.collection("subscriptions").add({
    email: email
})}








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