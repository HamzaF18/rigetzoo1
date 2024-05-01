import "./Accomodation.css";
import bed from "../../../src/Assets/bed.jpg"
import food from "../../../src/Assets/breakfast.jpg"


const Accomodation = () => {
    return (
        <div className="hotel-page">
            <h1 className="hotel-h1">
                Hotel
            </h1>
            <h2 className="hotel-h2">
                RZA provides accomodation for guests looking for a holiday!
            </h2>
            <p className="hotel-txt">Not only do we provide our visits to our zoo but guests who are looking for a getaway from home can come to<br /> our on-site hotel. Not only do we provide our visits to our zoo but guests who are looking for a getaway from home can come to<br /> our on-site hotel.Not only do we provide our visits to our zoo but guests who are looking for a getaway from home can come to<br /> our on-site hotel.Not only do we provide our visits to our zoo but guests who are looking for a getaway from home can come to<br /> our on-site hotel.</p>
            <div className="hotel-container">

                <div className="hotel-img-1">
                    <img src={bed} />
                    <h1>High Quality Beds</h1>

                </div>


                <div className="hotel-img-2">
                    <img src={food} />
                    <h1>Delicious Morning Breakfast</h1>
                </div>

            </div>
        </div>
    )
}
export default Accomodation;