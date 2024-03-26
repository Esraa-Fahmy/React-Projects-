import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faInstagramSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return ( 
        <>
        <div className="bg-black container-fluid text-light mt-5">
            <div className="row  justify-content-evenly align-items-center py-4">
                <div className="col-7 col-md-3">
                    <h4>GET IN TOUCH</h4>
                    <div className='row '>
                        <FontAwesomeIcon icon={faEnvelope} className='col-1 mt-2' />
                        <p className='col-2 mt-1'>EsraaFahmy@gmail.com</p>
                    </div>
                    <div className='row '>
                        <FontAwesomeIcon icon={faPhone} className='col-1 mt-2' />
                        <p className='col-2 mt-1'>+00012200000</p>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                <Button variant="outline-light">Contact me .....</Button>
                </div>
                <div className="col-6 col-md-3">
                <div className='row '>
                        <FontAwesomeIcon icon={faFacebookSquare} className='col-1 mt-2' />
                        <FontAwesomeIcon icon={faInstagramSquare} className='col-1 mt-2' />
                        <FontAwesomeIcon icon={faLinkedin} className='col-1 mt-2' />
                </div>
                <p className='mt-3 ms-2'>Google.commm</p>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Footer;