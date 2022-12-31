import facebookicon from "./Images/facebook.svg"
import googleicon from "./Images/google.svg"

function LoginwithGoogle(){
   
    return (
        <>
        <div className="flex items-center h-12 translate-x-20">
        <div className="border-t-2 w-40"> </div>
        <span className="mx-4 border rounded-full px-2 text-center border-2">or</span>
        <div className="border-t-2 w-40"> </div>
      </div>
      <div className="flex w-8 gap-4 translate-x-60 ">
         
      {/* <a href="#">
      <img src={googleicon} alt="image" onClick={handleClick} />
      </a> */}

          <img src={googleicon} alt="googleicon" />
         <img src={facebookicon} alt="facebookicon" />

      </div>
      </>
    )
}
export default LoginwithGoogle ;