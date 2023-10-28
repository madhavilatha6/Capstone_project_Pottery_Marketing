import { Link } from 'react-router-dom';
import './Images.css';
// import Navbar from './navbar';

function Images(){

    return(
        <div>
            <div>
                <img className="homepageimage" src="resources/homepage.png" alt="mud pot"/>
               
                <div></div>
            <div className='smallPot'>
                    <div className='hangingbrownbellture'>
                        <img className="potteryClass" src="resources/potteryClass.png" alt="mud pot"/>
                        <h4>Water Pots</h4>
                        <div className='paragraph'>
                        <p>Only water pots are containers</p><p>specifically designed for holding </p><p> and storing water.</p>
                        </div>
                    </div>
                    <div className='hangingbrownbellture1'>
                        <img className="designPot" src="resources/designPot.png" alt="mud pot"/>
                        <h4>Design Pots</h4>
                        <div className='paragraph'>
                        <p>Sleek, minimalist pots with ergonomic</p><p>handles and vibrant colors, blending</p><p>orm and function seamlessly.</p>
                        </div>
                    </div>
                    <div className='hangingbrownbellture2'>
                        <img className="giftCart" src="resources/giftCart.png" alt="mud pot"/>
                        <h4>Natural Pots</h4>
                        <div className='paragraph'>
                        <p>Natural pots are containers made</p><p>from organic materials found in nature, </p><p>such as clay, wood, or plant fibers.</p>
                        </div>
                    </div>
                    <div className='hangingbrownbellture3'>
                        <img className="potteryWheel" src="resources/potteryWheel.png" alt="mud pot"/>
                        <h4>Pottery Wheel</h4>
                        <div className='paragraph'>
                        <p>A pottery wheel is a spinning</p><p>device used for shaping clay into </p><p>ceramic objects.</p>
                        </div>
                    </div>

            </div>
            </div>
            <div className='twoimages'>
                <img src='https://sktperfectdemo.com/themepack/pottery/wp-content/uploads/2019/11/welcome-img1.jpg'/>
                <img src='https://sktperfectdemo.com/themepack/pottery/wp-content/uploads/2019/11/welcome-img2.jpg'/>
                
            </div>
            <div class="insideimage">
                    <h3>Welcome to</h3>
                    <h2>Pottery Shop</h2>
                    <p>Natural pots are containers made</p><p>from organic materials found in nature, </p><p>such as clay, wood, or plant fibers.</p>
                    <button className='read1'>ReadMore</button>
                </div>
            <div className='hangingbell'>
                <div>
                    <img className="decorativebell" src="resources/decorativeBell.png" alt="mud pot"/>
                </div>
                <div>
                    <img className="decorative" src="resources/decorativeBell.png" alt="mud pot"/>
                </div>
            </div>
            <div>
                <div className="nextpage">
                    <div className="inside"> <img className="teaset" src="resources/teaSet.jpg" alt="mud pot"/></div>
                </div>
                <div className="nextpage1">
                    <p>About Us</p>
                    <p>***</p>
                    <p>We are a global housewares product design company.<br></br> We bring thought and creativity to everyday items<br></br> through original design.</p>
                    <button className='shop'>Shop Now</button>
                </div>
            </div>
            <div className='embark'>
                <h3>Embark of Process</h3>
                <p>To Making a Pot</p>
            </div>
            <div>
                <div className='making'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/potter-is-sitting-with-greet-hands-in-front-of-a-wheel-2790753-2323936.png"/>
                    <h2>Loyal To Work</h2>
                    <p>Before starting a pot, a potter is typically very loyal to the work, </p>
                    <p>demonstrating dedication and commitment to the craft.</p>
                </div>
                <div className='making1'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-potter-is-making-earthen-pot-on-the-spinning-wheel-2790754-2323929.png"/>
                    <h2> Thoughts are Etched</h2>
                    <p>whispering tales of inspiration and emotion, surface of a pot</p>
                    <p>capturing the artist's essence and narrative within the realm of ceramics.</p>
                </div>
                <div className='making'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-potter-is-making-earthen-pot-on-the-spinning-wheel-with-a-child-2790757-2323930.png"/>
                    <h2>Joy with Collaboration</h2>
                    <p>When Potter and Joy collaborate, their synergy unleashes </p>
                    <p>pure magic, expanding the world of pottery with boundless creativity.</p>
                </div>
                <div className='making1'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/potter-is-sitting-and-painting-on-the-earthen-pot-2790755-2323937.png"/>
                    <h2>kaleidoscope of beauty</h2>
                    <p>With every stroke of color, the pots come alive, revealing</p>
                    <p>kaleidoscope of beauty, capturing the essence of artistic expression.</p>
                </div>
                <div className='making'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk_3VlfdTsAhN-d4DPhI3lhhjxHlDsj-kxo4rxkWSQcIGPSqNpxbQuUey0QOj3Lohbfs&usqp=CAU"/>
                    <h2> Intricate detail of the pot</h2>
                    <p>Through the lens of a phone camera, every intricate detail of the</p>
                    <p>pot is captured, preserving its unique essence for all to behold.</p>
                </div>
                <div className='making1'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-potter-accepting-online-card-payment-2790765-2323935.png"/>
                    <h2>E-Marketplace</h2>
                    <p>To share the pot online for purchase, showcase its exquisite craftsmanship through</p>
                    <p>high-resolution images, accompanied by a detailed description</p>
                </div>
                <div className='making'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-kumhar-is-counting-money-2790761-2323932.png"/>
                    <h2>Prosperity</h2>
                    <p>With his exceptional pottery skills, he crafts masterpieces that not only </p>
                    <p>captivate hearts but also pave the way for a prosperous livelihood.</p>
                </div>
            </div>
            <div className="maindiv">
                <div className="firstdiv">
                    <img className="potterybell" src="resources/hangingBell.jpg" alt="mud pot"/>
                    {/* <img className="potteryflowerbell" src="resources/hangingPotFlowers.webp" alt="mud pot"/> */}
                    
                </div>
                <div className="seconddiv">
                     <img className="hangingbell1" src="resources/hangingBell.jpg" alt="mud pot"/>
                     

                </div>
            </div>
            <div className="middlebox">
                 
                     <img className="hangingpot" src="resources/hangingPot.png" alt="mud pot"/>
                <div className="hangingpottext">
                    <h3>Welcome to</h3>
                    <b>Pottery Shop</b>
                    <p>Pottery is the ceramic material which makes up potteryware.</p>
                    <button className='read'>ReadMore</button>
                </div> 

            </div>
            <div>
            <div className='history'>

            </div>
           
     </div>
     </div>
    )
}


export default Images;