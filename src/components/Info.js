import Image from '../images/Hardik-pic.png'
import Mail from '../images/Mail.png'

function Info(){
    return (
        <div className='info--div'>
            <img className='info--image' src={Image} alt='Hardik'/>
            <h1 className='info--name'>Hardik Khatri</h1>
            <p className='info--job'>Frontend Developer</p>
            <p className='info--site'><small>hardikkhatri.website</small></p>
            <button className='info--btn'><img src={Mail} alt='Mail' />Email</button>
        </div>
    )
}

export default Info;