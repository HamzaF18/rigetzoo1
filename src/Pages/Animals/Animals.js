import "./Animals.css"
import image1 from "../../../src/Assets/african wild dog.jpg"
import image2 from "../../../src/Assets/baboon.jpg"
import image3 from "../../../src/Assets/elephant.jpg"
import image4 from "../../../src/Assets/gervey's zebra.jpg"
import image5 from "../../../src/Assets/hippo.jpg"
import image6 from "../../../src/Assets/lion3.jpg"

const Animals = () => {

    return (
         <div className="animals-page">                                                               
            <div className="animal-txt">
                <h1>Animals</h1>
                <h3>Our animals are the heart of RZA</h3>
            </div>
            <div className="animal-1">
                <img src={image1}/>
                <p><strong>African Wild dog</strong><br/>
                The African wild dog is a very rare african animal.<br/>The African wild dog is a very rare african animal</p>
            </div>
            <div className="animal-2">
                <img src={image2}/>
                <p><strong>Baboon</strong><br/>
               The Baboon is a very rare african animal.</p>
            </div>
            <div className="animal-3">
                <img src={image3}/>
                <p><strong>African Elephant</strong><br/>
                The African Elephant is a very rare african animal.<br/>The African Elephant is a very rare african animal</p>
            </div>
            <div className="animal-4">
                <img src={image4}/>
                <p><strong>Gervey's Zebra</strong><br/>
                The Gervey's Zebra is a very rare african animal.</p>
            </div>
            <div className="animal-5">
                <img src={image5}/>
                <p><strong>Hippo</strong><br/>
                The Hippo is a very rare african animal.</p>
            </div>
            <div className="animal-6">
                <img src={image6}/>
                <p><strong>African Lion</strong><br/>
                The African Lion is a very rare african animal.</p>
            </div>
        </div>
    )
}
export default Animals;