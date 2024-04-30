import { useNavigate } from "react-router-dom";
import "./Sitemap.css";

const SiteButton = ({text,path})=>{
    const navigate = useNavigate()


    return(
        <button className="site-btn" onClick={()=> navigate(path)}>
            {text}
        </button>
    )
}

const Sitemap = () => {
    return (
        <div className="sitemap">
            <div className="site-btns">
                <SiteButton text="View animals" path="/animals"/>
                <SiteButton text="Help" path="/help"/>
                <SiteButton text="Contact Us" path="/contact"/>
                <SiteButton text="Terms & Conditions" path="/terms"/>
                <SiteButton text="FAQs" path="/faq"/>
                <SiteButton text="Legal guidelines"path="/legal"/>
            </div>
        </div>
    )
}
export default Sitemap;