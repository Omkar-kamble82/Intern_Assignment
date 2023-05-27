import { Link } from "react-router-dom";

const Navbar = ({gotocart , addcity, selectseat}) => {
    return (
        <nav className="bg-[#dfdfdf] w-[100%] px-6 flex justify-between items-center">
            <div className="hidden w-[300px] lg:block"/>
            <div>
                <Link to="/"><img src="/logo.png" alt="logo_img" /></Link>
            </div>
            <div className="flex gap-3 items-center flex-wrap">
                {selectseat === true && <Link to="/selectseats"><div className="flex justify-center gap-1 px-2 items-center w-[95px] h-[30px] seatbutton sm:w-[160px] sm:h-[50px] sm:gap-2"><button className="text-[10px] font-bold text-white sm:text-[20px]">Select Seat</button><img className="w-[20px] sm:w-[30px]" src="city_location_icon.png" alt="cart_icon"/></div></Link>}
                {addcity === true && <Link to="/cityselection"><div className="flex justify-center gap-1 px-2 items-center w-[90px] h-[30px] seatbutton sm:w-[160px] sm:h-[50px] sm:gap-2"><button className="text-[10px] font-bold text-white sm:text-[20px]">Select City</button><img className="w-[20px] sm:w-[30px]" src="city_location_icon.png" alt="cart_icon"/></div></Link>}
                {gotocart === true && <Link to="/cart"><div className="flex justify-center gap-1 px-2 items-center w-[90px] h-[30px] loginbutton sm:w-[160px] sm:h-[50px] sm:gap-2"><button className="text-[10px] font-bold text-white sm:text-[20px]">Go To Cart</button><img className="w-[20px] sm:w-[30px]" src="cart_icon.png" alt="cart_icon"/></div></Link>}
            </div>
        </nav>
    )
}

export default Navbar