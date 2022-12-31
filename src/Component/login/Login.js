import Sofa from "./Images/Towperson.svg"
import LoginForm from "./loginForm"
import LoginwithGoogle from "./loginwithGoogle";




function Login(){
    return(
      <div>
      <p className="text-5xl mt-7 translate-x-20 ">
        Login
      </p>
      <div className="flex justify-start items-center">
        <div className="flex-1 translate-x-20	" ><LoginForm/> </div>
        <div className=" flex-1  "> <img src={Sofa} alt="SOFA" className="w-9/12" /> </div>
      </div >
      
       <LoginwithGoogle />

      </div>
    )
}
export default Login;