import * as images from '../utils/images.ts';
import './logo_topleft.css';


const LogoTopLeft = () => {
    return <div style={{zIndex: "99999"}}>
        <img src={images.dear1} className="dear1"/>
        <img src={images.dear2} className="dear2"/>
        <img src={images.underline} className="underline"/>
        <img src={images.the_coded_epistolary} className="logo"/>
    </div>
}

export default LogoTopLeft;