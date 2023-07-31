import Twitter from '../images/Twitter Icon.png';
import Facebook from '../images/Facebook Icon.png';
import Instagram from '../images/Instagram Icon.png';
import Linkedin from '../images/Linkedin Icon.png';
import Github from '../images/GitHub Icon.png';


function Footer(){
    return (
        <div className='footer--div'>
            <img src={Twitter} alt='twitter icon' />
            <img src={Facebook} alt='facebook icon' />
            <img src={Instagram} alt='instagram icon' />
            <img src={Linkedin} alt='linkedin icon' />
            <img src={Github} alt='github icon' />
        </div>
    )
}

export default Footer;