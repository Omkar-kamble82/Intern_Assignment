import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-h-[100vh] overflow-hidden">
            <Navbar gotocart={false} addcity={false}/>
            <div className="flex mt-[10px] flex-col-reverse max-w-[1300px] mx-auto justify-between px-6 md:mt-[70px] lg:px-24 items-center lg:mt-[50px] lg:flex-row">
                
                {/* Login image */}
                <img className="w-[600px] object-contain" src="Loginbanner.png" alt="Login_banner" />

                {/* Login form */}
                <div className="flex mb-4 flex-col">
                    <h1 className="text-3xl text-start font-bold mb-2 sm:text-4xl">Login here!</h1>
                    <input className="h-[45px] sm:h-[60px] my-2 px-6 w-[300px] border-[1px] border-black rounded-md" type="text" placeholder="Username or Phone" />
                    <input className="h-[45px] sm:h-[60px] my-2 px-6 w-[300px] border-[1px] border-black rounded-md" type="password" placeholder="Password" />
                    <p className="text-[16px] cursor-pointer underline text-right text-[#635C5C]">Forget password?</p>
                    <Link to="/cityselection"><button className="loginbutton w-[100%] h-[45px] sm:h-[50px] text-xl text-white font-bold sm:text-2xl my-3">Login</button></Link>
                    <div className="center mb-2">
                        <div className="line w-[100%] sm:w-[70%]" />
                        <div className="or text-[16x] ">Or Sign-up With</div>
                    </div>
                    <div className="w-[100%] flex gap-[16px] items-center justify-center">
                        <img src="google_icon.png" alt="google_icon" />
                        <img src="facebook_icon.png" alt="facebook_icon" />
                    </div>
                </div>
            </div>

            <div className="relative h-[10vh]">
                <img className="fixed h-[100px] md:h-[300px] flex bottom-0 left-0 right-0 justify-center items-center w-[100%]" src="Vector.png" alt="vector" />
                <img className="fixed h-[100px] md:h-[300px] bottom-0 left-0 right-0 flex justify-center items-center w-[100%]" src="vector2.png" alt="vector" />
            </div>
        </div>
    )
}

export default Login