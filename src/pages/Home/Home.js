import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { Navbar, HotelCard } from "../../components";

import "./Home.css";

const Home = () => {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        ( async () => {
            try{
                const { data } = await axios.get("https://travel-app-backend-vo66.onrender.com/api/v1/hotels");
                setHotels(data);
            }catch(error){
                console.log(error);
            }
        })()
    }, [])

    return (
        <Fragment>
            <Navbar />
            <main className="main d-flex align-center wrap gap-larger">
                {
                    hotels && hotels.map(hotel => <HotelCard key = {hotel._id} hotel={hotel} />)
                }
            </main>
        </Fragment>
    );
}

export default Home;