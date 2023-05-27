import Navbar from "../components/Navbar";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CityContext } from "../context/CityContext";

const Selectseats = () => {

    // Seat states
    const [h1seats,setH1seats] = useState(0)
    const [h2seats,setH2seats] = useState(0)
    const [h3seats,setH3seats] = useState(0)

    const { setH1Seat, setH2Seat, setH3Seat } = useContext(CityContext);

    useEffect(() => {
        setH1Seat(h1seats)
        setH2Seat(h2seats)
        setH3Seat(h3seats)
    }, [h1seats, h2seats, h3seats]);

    return (
        <div className="bg-[#F7F7F7] min-h-[100vh]">
            <Navbar gotocart={true} addcity={true}/>
            <div className="pt-[25px] px-[8px] flex flex-col justify-center items-center">
                <img className="mb-8" src="seats.png" alt="seats_img" />
            </div>
            <div>
                {/* Seats and color code */}
                <div className="flex justify-between items-center px-[4%] bg-[#DDDDDD] py-[6px] lg:px-[10%]">
                    <p className="text-[#474747] font-bold text-[17px] underline">Colour Code</p>
                    <div className="flex justify-center items-center gap-3">
                        <div className="flex items-center justify-center gap-2"><p className="text-[#00B33C] font-bold">H1-</p> <span className="h-[15px] w-[15px] block rounded-full bg-[#00B33C]"></span></div>
                        <div className="flex items-center justify-center gap-2"><p className="text-[#FF6600] font-bold">H2-</p> <span className="h-[15px] w-[15px] block rounded-full bg-[#FF6600]"></span></div>
                        <div className="flex items-center justify-center gap-2"><p className="text-[#808080] font-bold">H3-</p> <span className="h-[15px] w-[15px] block rounded-full bg-[#808080]"></span></div>
                    </div>
                </div>
                <div className="mb-10">
                    {/* H1 Seat */}
                    <div className="flex mb-[2px] bg-[#fff] py-2 justify-between items-center px-[2%] sm:px-[10%]">
                        <span className="flex gap-3 py-3 items-center"><span className="h-[15px] w-[15px] block rounded-full bg-[#00B33C]"></span><h1 className="font-bold text-[18px] text-[#00B33C] sm:text-[24px]">₹55,000</h1></span>
                        <p className="font-bold text-[15px] text-[#00B33C] sm:text-[18px]">32 Sq. Mt.</p>
                        <span className="flex cursor-pointer justify-center items-center"><img onClick={() => {setH1seats(h1seats+1)}} src="add.png" alt="city_icon"/><h1 className="font-bold text-[14px] sm:text-[18px] text-[#ababab] px-4">{h1seats}</h1><img onClick={() => {setH1seats(h1seats-1)}} src="minus.png" alt="city_icon"/></span>
                    </div>
                    {/* H2 Seat */}
                    <div className="flex mb-[2px] bg-[#fff] py-2 justify-between items-center px-[2%] sm:px-[10%]">
                        <span className="flex items-center gap-3 py-2"><span className="h-[15px] w-[15px] block rounded-full bg-[#FF6600]"></span><h1 className="font-bold text-[16px] text-[#FF6600] sm:text-[22px]">₹35,000</h1></span>
                        <p className="font-bold text-[14px] text-[#FF6600] sm:text-[16px]">24 Sq. Mt.</p>
                        <span className="flex cursor-pointer justify-center items-center"><img onClick={() => {setH2seats(h2seats+1)}} src="add.png" alt="city_icon"/><h1 className="font-bold text-[14px] sm:text-[18px] text-[#ababab] px-4">{h2seats}</h1><img onClick={() => {setH2seats(h2seats-1)}} src="minus.png" alt="city_icon"/></span>
                    </div>
                    {/* H3 Seat */}
                    <div className="flex mb-[2px] bg-[#fff] py-2 justify-between items-center px-[2%] sm:px-[10%]">
                        <span className="flex items-center gap-3 py-2"><span className="h-[15px] w-[15px] block rounded-full bg-[#808080]"></span><h1 className="font-bold text-[14px] text-[#808080] sm:text-[18px]">₹25,000</h1></span>
                        <p className="font-bold text-[12px] text-[#808080] sm:text-[14px]">18 Sq. Mt,</p>
                        <span className="flex cursor-pointer justify-center items-center"><img onClick={() => {setH3seats(h3seats+1)}} src="add.png" alt="city_icon"/><h1 className="font-bold text-[14px] sm:text-[18px] text-[#ababab] px-4">{h3seats}</h1><img onClick={() => {setH3seats(h3seats-1)}} src="minus.png" alt="city_icon"/></span>
                    </div>
                </div>
                <Link to="/cityselection"><span className="flex cursor-pointer justify-center gap-2 items-center py-10"><img src="back.png" alt="city_icon"/><h1 className="font-bold text-[18px] sm:text-[22px] text-[#ababab] underline hover:text-[#F01885] transition-all duration-700">Back to City</h1></span></Link>
            </div>
        </div>
    )
}

export default Selectseats