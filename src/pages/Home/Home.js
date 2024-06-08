import { Fragment } from "react";
import { Navbar, HotelCard } from "../../components";

import "./Home.css";

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <main className="main">
                <HotelCard />
            </main>
        </Fragment>
    );
}

export default Home;