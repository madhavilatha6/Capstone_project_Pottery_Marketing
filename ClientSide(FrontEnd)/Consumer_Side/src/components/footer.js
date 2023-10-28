import './Images.css'
function Footer(){
    return(

    <div className='footer1'>
                    <div className='about'>
                        <h4>AboutUs</h4>
                        <p>Potters</p>
                        <p>Vision</p>
                        <p>Aim</p>
                    </div>
                    <div className='service'>
                        <h4>Services</h4>
                        <p>Writing</p>
                        <p>Vision</p>
                        <p>Aim</p>
                    </div>
                    <div className='contact'>
                        <h4>Contactus</h4>
                        <p>Andrapradesh</p>
                        <p>Karnataka</p>
                        <p>Tamilnadu</p>
                    </div>
                    <div className='social'>
                        <h4>Socialmedia</h4>
                        <p>Facebook</p>
                        <p>WhatsApp</p>
                        <p>Twitter</p>
                        <p>Google</p>
                        <p>Instagram</p>
                    </div>
                    <div className='logo'>
                    <img className="google" src="resources/google.png" alt="mud pot"/>
                    <img className="facebook" src="resources/facebook.png" alt="mud pot"/>
                    <img className="instagram" src="resources/instagram.png" alt="mud pot"/>
                    <img className="whatsapp" src="resources/whatsapp.png" alt="mud pot"/>
                    </div>
                    <div>
                    <img className="colorpots" src="resources/colorPots.png" alt="mud pot"/>
                    </div>  
            </div>
    )
}

export default Footer;