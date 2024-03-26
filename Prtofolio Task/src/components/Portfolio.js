import PortifoliCardInfo from "./PrtofolioCard";
import {portofolioData} from "./data";
const Portifoli = () => {
    return ( <>
     <div className="my-portfolio container mt-5">
       <h1>portfolio</h1>
        <div className="portfolio-content container mt-4">
        <div className="row justify-content-evenly gap-3 ">
            <PortifoliCardInfo portofolioData={portofolioData}/>
        </div>
       </div>
     </div>
    
    </> );
}
 
export default Portifoli;