import './About.css';

function About(){
    return(
        <div>
             <div className="navbar">
                    <div>Home</div>
                    <div>Category</div>
                    <div>About Us</div>
                    <button className="buttonBtn">Register</button>
                    <button className="buttonBtn">Add to cart</button>
                </div>
               
            <div className='imagesAll'>
                <h2>Exclusive Pottery Artists</h2>
                <img src='resources/terracoka.jpg'alt=''/>
                <p className='term'>Terracotta is a term used generally for sculptures made in earthenware, and also those forms created for various utilitarian purposes like<br></br>vessels, flower pots, bricks etc. Pottery is a specialized art that has always fascinated art lovers.Terracotta has been used for a very long time with Archaeologists finding many terracotta sculptures, more than 5,000 years old. In ancient era,the clay sculptures were sun dried and later placed in open hearths before finally being placed in kilns.</p>
            </div>
            <div className='smallPots'>
                <img className="border"src='./resources/birds.webp' alt=''/>
                <img className="border" src='./resources/bothBirds.jpeg' alt=''/>
                <img className="border" src='./resources/mahathi.webp' alt=''/>
                <img className="border" src='./resources/smallbird.webp' alt=''/>
            </div>
            <div className='pottery'>
                <img className="process"src='resources/process.jpg'alt=''/>
                <div className='potteryPara'>
                    <h3>whole process to make pot</h3>
                    <ul>
                        <li>Think the design of the pot</li>
                        <li>Create the pot expected design</li>
                        <li>Finishing the pot</li>
                        <li>Fire the pot</li>
                        <li>Sell to the Customer</li>
                    </ul>
                </div>
            </div>
            <div className="capacity">
                <div className="mission">
                    <img src='./resources/mission.png' alt='no image'/> 
                 </div>
                 <div className='missionBox'>
                    <h2>Mission</h2>
                    <p>To ignite creativity and foster self-expression through the art of pottery, providing a supportive and inclusive environment where individuals of all skill levels can learn, grow, and find joy in working with clay.</p>
                 </div>
               
            </div>
            <div className='capacitys'>
                <div className="vission">
                    <img src='./resources/vission.png' alt='no image'/>
                </div>
                <div className='vissionBox'>
                    <h2>Vission</h2>
                    <p>To be a leading pottery studio, known for our commitment to excellence, innovative techniques, and fostering a strong sense of community. We aim to inspire and empower individuals to explore their artistic potential, create meaningful connections, and contribute to the beauty of the pottery profession. Through our dedication to sustainability, we strive to leave a positive impact on both the artistic community and the environment.</p>
                </div>
            </div>
            <div className='info'>
                <img src='./resources/aboutimg.jpg'alt=''/>
                <p>Terracotta Making in Andhra Pradesh

In AP, Palamaner Mandal in Chittoor District is quite popular for its attractive and varied Terracotta Pottery. The locally available mud/clay is considered suitable for pottery work. The potters here make use of two kinds of mud which are mixed together to make the end products. Black mud and Red mud sourced locally is used. The potters create an array of craft products and these Terracotta products are finally painted, as customers prefer painted objects increasingly these days, compared to the natural terracotta ones. There are wide varieties of Terracotta items available here. Terracotta artisans here make several articles, like lamps, pots, musical instruments, flower vases, horses, idols, plates, elephants, and other highly attractive artefacts.</p>
            </div>
            <div className='potteryimg'>
                <div className='dustbin'>
                    <img src='./resources/infoImage.jpg' alt=''/>
                </div>
            </div>
            <div className='footer1s'>
                    <div className='abouts'>
                        <h4>AboutUs</h4>
                        <p>Potters</p>
                        <p>Vision</p>
                        <p>Aim</p>
                    </div>
                    <div className='services'>
                        <h4>Services</h4>
                        <p>Writing</p>
                        <p>Vision</p>
                        <p>Aim</p>
                    </div>
                    <div className='contacts'>
                        <h4>Contactus</h4>
                        <p>Andrapradesh</p>
                        <p>Karnataka</p>
                        <p>Tamilnadu</p>
                    </div>
                    <div className='socials'>
                        <h4>Socialmedia</h4>
                        <p>Facebook</p>
                        <p>WhatsApp</p>
                        <p>Twitter</p>
                        <p>Google</p>
                        <p>Instagram</p>
                    </div>
                    <div className='logos'>
                    <img className="google" src="resources/google.png" alt="mud pot"/>
                    <img className="facebook" src="resources/facebook.png" alt="mud pot"/>
                    <img className="instagram" src="resources/instagram.png" alt="mud pot"/>
                    <img className="whatsapp" src="resources/whatsapp.png" alt="mud pot"/>
                    </div>
                    <div>
                    <img className="colorpotss" src="resources/colorPots.png" alt="mud pot"/>
                    </div>  
            </div>
        </div>
    )
}

export default About;