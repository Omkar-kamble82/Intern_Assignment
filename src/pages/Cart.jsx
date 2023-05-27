import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Cart = () => {

    let storage = JSON.parse(localStorage.getItem("CityState"))

    const navigate = useNavigate()

    const [empty, setEmpty] = useState(false)
    const [cost, setCost] = useState(0)
    const [donepayment, setDonepayment] = useState(false)

    const pay = () => {
        setDonepayment(true)
        storage.city = ""
        storage.h1seat = 0
        storage.h2seat = 0
        storage.h3seat = 0
    }

    const gotohome = () => {
        setDonepayment(false)
        navigate("/cityselection")
    }

    useEffect(() => {
        if(!storage.city && !(storage.h1seat || storage.h2seat || storage.h3seat)) {
            setEmpty(true)
            return
        } else {
            setCost(storage.h1seat * 55000 + storage.h2seat *35000 + storage.h3seat * 25000)
        }
    }, []);


    return (
        <div className="bg-[#F7F7F7] relative min-h-[100vh]">
            <Navbar gotocart={false} addcity={true} selectseat={true}/>
            <div className="mt-[30px] bg-[#F7F7F7] md:mt-[70px] lg:mt-[50px] ">
                <h1 className="text-[26px] text-center md:text-[34px] text-[#474747]">Shopping Bag - Checkout  🛒 </h1>

                {/* cart items */}
                {empty === false ?
                    <>
                        <div className="max-w-[1200px] px-[10px] mx-auto mt-10">
                            <span className="flex gap-3 py-3 items-center"><span className="h-[15px] w-[15px] block rounded-full bg-[#00B33C]"></span><h1 className="font-bold text-[18px] text-[#00B33C] sm:text-[24px]">H1 - {storage.h1seat * 55000}</h1></span>
                            <p className="text-[22px] font-bold text-[#7C7C7C]">{storage.city ? storage.city : "unknown"} | Quatity - {storage.h1seat ? storage.h1seat : "0"} | Stall Type Details</p>
                            <p className="text-[14px] text-[#7c7c7c] mt-2"><span className="text-[#555454] font-bold">Terms and Conditions -</span>Select your favorite social network and share our icons with your contacts or friends. If you don’t have these social networks</p>
                        </div>
                        <div className="max-w-[1200px] px-[10px] mx-auto mt-10">
                            <span className="flex gap-3 py-3 items-center"><span className="h-[15px] w-[15px] block rounded-full bg-[#FF6600]"></span><h1 className="font-bold text-[18px] text-[#FF6600] sm:text-[24px]">H2 - {storage.h2seat *35000}</h1></span>
                            <p className="text-[22px] font-bold text-[#7C7C7C]">{storage.city ? storage.city : "unknown"} | Quatity - {storage.h2seat ? storage.h2seat : "0"} | Stall Type Details</p>
                            <p className="text-[14px] text-[#7c7c7c] mt-2"><span className="text-[#555454] font-bold">Terms and Conditions -</span>Select your favorite social network and share our icons with your contacts or friends. If you don’t have these social networks</p>
                        </div>
                        <div className="max-w-[1200px] px-[10px] mx-auto mt-10">
                            <span className="flex gap-3 py-3 items-center"><span className="h-[15px] w-[15px] block rounded-full bg-[#808080]"></span><h1 className="font-bold text-[18px] text-[#808080] sm:text-[24px]">H3 - {storage.h3seat * 25000}</h1></span>
                            <p className="text-[22px] font-bold text-[#7C7C7C]">{storage.city ? storage.city : "unknown"} | Quatity - {storage.h3seat ? storage.h3seat : "0"} | Stall Type Details</p>
                            <p className="text-[14px] text-[#7c7c7c] mt-2"><span className="text-[#555454] font-bold">Terms and Conditions -</span>Select your favorite social network and share our icons with your contacts or friends. If you don’t have these social networks</p>
                        </div>
                    </>
                    :
                    <div className="flex flex-col justify-center px-4 items-center">
                        <img src="/empty_cart.png" alt="empty" />
                        <p className="text-xl text-rose-600 font-bold mt-4 text-center">*you have not seleted all required field</p>
                    </div>
                }

                {/* payment footer */}
                <div className="bg-[#E0E0E0] mt-10 px-[10px] bottom-0 right-0 left-0 py-6">
                    <p className="text-[18px] text-[#EB008B] text-center font-bold">*We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.</p>
                    <div className="max-w-[1200px] mx-auto mt-10 flex justify-between items-center">
                        <div>
                            <p className="text-[20px] text-[#7c7c7c] font-bold">Subtotal</p>
                            <p className="text-[20px] text-[#7c7c7c] font-bold">Tax</p>
                            <p className="text-[30px] font-bold">TOTAL</p>
                        </div>
                        <div>
                            <p className="text-[20px] text-[#7c7c7c] font-bold">₹{cost ? cost : 0}</p>
                            <p className="text-[20px] text-[#7c7c7c] font-bold">₹{cost ? cost * 0.18 : 0}</p>
                            <p className="text-[30px] font-bold">₹{cost ? cost + cost * 0.18 : 0}</p>
                        </div>
                    </div>
                    {!empty ? <button className="loginbutton w-[40%] ml-[30%] h-[45px] sm:h-[50px] text-xl text-white font-bold sm:text-2xl my-3 sm:w-[20%] sm:ml-[40%]" onClick={() => {pay()}}>Pay now</button> : <button className="nopay w-[40%] ml-[30%] h-[45px] sm:h-[50px] text-xl text-white font-bold sm:text-2xl my-3 sm:w-[20%] sm:ml-[40%]">Pay now</button>}
                    {donepayment && <div className="absolute inset-0 bg-black flex justify-center items-center"> 
                        <div className="bg-white min-w-[280px] relative min-h-[100px] flex justify-center items-center">
                            <p className="absolute top-2 right-2 text-xl font-bold cursor-pointer" onClick={() => {gotohome()}}>X</p>
                            <h1 className="text-xl font-bold text-blue-600 text-center mt-2"> Your payment was succeful</h1>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Cart