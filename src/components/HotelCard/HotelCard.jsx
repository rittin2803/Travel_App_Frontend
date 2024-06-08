import "./HotelCard.css"

const HotelCard = () => {
    return (
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div>
                <img src="" alt="hotelcard" />
                <div className="hotelcard-details">
                    <div className="d-flex align-center">
                        <span className="location"> Bir, Himachal Pradesh </span>
                        <span className="rating d-flex align-center">
                            <span className="material-symbols-outlined">star</span>
                            <span>4.3</span>
                        </span>
                    </div>
            
                    <p className="hotel-name">Sukoon Bag</p>
                    <p className="price-details">
                        <span className="price">Rs. 3500</span>
                        <span>/night</span>
                    </p>
                </div>  
            </div>
                <button className="button btn-wishlist absolute">
                <span className="material-icons favorite cursor">favorite</span>
                </button>
        </div>
    );
}

export default HotelCard;