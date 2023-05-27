import Navbar from "../components/Navbar";
import { citydata } from "../constants/Citydata";
import { useState, useContext, useEffect } from "react";
import { CityContext } from "../context/CityContext";

const Cityselection = () => {

    const [cityname,setCityname] = useState("")

    const { setCity } = useContext(CityContext);

    useEffect(() => {
        setCity(cityname)
    }, [cityname]);

    const setcitycontext = () => {
        alert(`City is selected go to select seat tab to select seats`)
    }


    return (
        <div className="bg-[#f7f7f7] relative min-h-[100vh]">
            <Navbar gotocart={true} selectseat={true} addcity={false}/>
            <div className="mt-[30px] bg-[#F7F7F7] md:mt-[70px] lg:mt-[50px] ">
                <div className="flex items-center justify-center gap-3"><h1 className="text-[26px] md:text-[34px] text-[#474747]">Select your Location </h1><img className="h-[40px]" src="location.png" alt="location_icon" /></div>

                {/* Search bar */}
                <div className="search flex justify-between items-center h-[45px] w-[80%] mb-14 mx-[10%] mt-8 px-8 rounded-[20px]"><input className="w-[100%] focus:outline-0 " type="text" placeholder="Search"/><img src="search.png" alt="serch_icon" /></div>

                {/* City info */}
                <div className="mt-18 mb-[60px] sm:mt-22">
                    {citydata.map((city) => { return (
                            <div key={city.id} className="flex mb-[2px] bg-[#fff] py-2 justify-between items-center px-[2%] sm:px-[10%]">
                                <span className="flex gap-3  items-center w-[100px]"><img src="city.png" alt="city_icon"/><h1 className="font-bold text-[14px] sm:text-[18px]">{city.name}</h1></span>
                                <p className="text-[12px]">{city.date}</p>
                                <span className="flex cursor-pointer justify-center items-center"><h1 className="font-bold text-[14px] sm:text-[18px] text-[#ababab] underline hover:text-[#F01885] transition-all duration-700" onClick={() => {setCityname(city.name);setcitycontext()}}>Book Now</h1><img src="right_arrow.png" alt="city_icon"/></span>
                            </div>
                        )})}
                </div>

                {/* Contact footer */}
                <div className="bg-[#EAEAEA] py-14 px-5 bottom-0 left-0 right-0 max-h-[350px] flex flex-col justify-center items-center">
                    <h1 className="text-[20px] text-[#7C7C7C] text-center sm:text-[26px]">Not found the City you were looking for 😕?</h1>
                    <div className="flex justify-center gap-2 px-2 py-2 items-center w-[200px] h-[50px] bg-[#fff] mt-4 rounded-[34px]"><button className="text-[22px] text-[#020202]">Contact sales</button><img src="contact.png" alt="contact_icon"/></div>
                </div>
            </div>
        </div>
    )
}

export default Cityselection