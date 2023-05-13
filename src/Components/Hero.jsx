import {useState} from 'react'
import Man from '../assets/dweep io 1.svg'
import './Hero.css'
const Hero = ()=>{

    const [info, setInfo] = useState(false)
    const [mail, setMail] = useState("")
    function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
    const handleRegister=(e)=>{
        e.preventDefault()
        if(isValidEmail( mail)){
            setInfo(true)
        }else{
            alert("please provide a valid mail")
            setInfo(false)
        }
    }

    const handleChange=(e)=>{
        setMail(e.target.value)
    }
    return(
        <>
            <div className="banner">
        <div className="section-left">
            <p className="header">An inspiring design delivered to your inbox every morning</p>
            <p className="description">Our team scouts the internet for the best designs, illustrations and art and delivers
                a truly inspiring
                one
                every day to
                your inbox</p>
            {info?<p className="header">Thank You!</p>:<><p className="tag">Show me how it looks</p>
            <input type="email" placeholder="Your e-mail address" value={mail} onChange={handleChange}/>
            <button onClick={handleRegister}>Register Now</button></>}    
            <div className="bottom-line">Free - No Spam - No Data Sharing</div>
        </div>
        <div className="section-right">
            <img src={Man} />
        </div>
    </div>
        </>
    )
}

export default Hero