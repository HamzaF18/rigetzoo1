import "./Home.css";
import { useNavigate } from "react-router-dom";
import lion from "E:/PRE-RELEASE/task2work/rigetzoo1/src/Assets/lion2.jpg"
import image8 from "E:/PRE-RELEASE/task2work/rigetzoo1/src/Assets/website.jpg";
import image9 from "E:/PRE-RELEASE/task2work/rigetzoo1/src/Assets/rare.jpg"
import image10 from "E:/PRE-RELEASE/task2work/rigetzoo1/src/Assets/treasure.jpg"


const HomeButton = ({ text, path }) => {
    const navigate = useNavigate()


    return (
        <button className="home-button" onClick={() => navigate(path)}>
            {text}
        </button>
    )
}



const Home = () => {
    return (
        <div className="home-page">
            <div className="section-1">
                <div className="home-img">
                    <img src={lion} alt="Lion" />
                </div>
                <div className="home-text">
                    <h1>Welcome to Riget Zoo Adventures</h1>
                    <h3>Our Safari-style wild life zoo is home to some of Africas prized jewels</h3>
                </div>
                <div className="home-btns">
                    <HomeButton text="book ticket" path="/signin" />
                    <HomeButton text="learn more" path="/about" />
                </div>
            </div>
            {/*about*/}
            <div className="section-2">
                <div className="home-text-2">
                    <h1>RZA has some of the world's rarest animals<br /> for you to see!</h1>
                    <h3>Our animals are the heart of our zoo and are kept in well-built facilities.<br /> Have a look at some of our animals below!</h3>
                </div>
                <div className="card-container">
                    <div className="card-1"><img src="https://cdn.freewebstore.com/origin/436013/anthonyandraeshoneybadger2copy_1693559654455.jpg" alt="honey badger" />
                    </div>
                    <div className="card-2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg" alt="lion" /></div>
                </div>
                <div className="card-container-2">
                    <div className="card-3"><img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Grevy%27s_Zebra_Stallion.jpg" alt="zebra"/></div>
                    <div className="card-4"><img src="https://cdn.britannica.com/02/152302-050-1A984FCB/African-savanna-elephant.jpg" alt="elephant"/></div>
                </div>
                <div className="home-btn">
                    <HomeButton text="view all animals" path="/animals" />
                </div>
            </div>
            <div className="section-3">
                <div className="home-text-3">
                    <h1>Here are some trending articles at our zoo</h1>
                </div>
                <div className="article-container">
                    <div className="article-1">
                        <div className="article-img-1">
                            <img src={image8} alt="website"/>
                        </div>
                    </div>
                    <div className="article-2">
                        <div className="article-img-2">
                            <img src={image9} alt="rare"/>
                        </div>
                    </div>
                    <div className="article-3">
                        <div className="article-img-3">
                            <img src={image10} alt="treasure"/>
                        </div>
                    </div>
                </div>
                <div className="article-content">
                    <div className="article-txt-1">
                        <h3>Riget Zoo Adventures<br />
                            Brand New Website!</h3>
                    </div>
                    <div className="article-txt-2">
                        <h3>Worlds most "rarest" animals<br />
                            have began breeding at RZA</h3>
                    </div>
                    <div className="article-txt-3">
                        <h3>RZA animal themed<br /> treasure hunt!</h3>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9927.187032409774!2d-0.1534303!3d51.5352875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad73297f857%3A0xb1723f26e03c12a8!2sLondon%20Zoo!5e0!3m2!1sen!2suk!4v1713880669799!5m2!1sen!2suk" alt="map"></iframe>
        </div>
    )
}
export default Home;