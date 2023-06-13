import './About.css';

function About(){
    return(
        <div>
               
            <div className='imagesAll'>
                <h2>Exclusive Pottery Artists</h2>
                <img src='resources/terracoka.jpg'alt=''/>
                <p className='term'>Terracotta is a term used generally for sculptures made in earthenware, and also those forms created for various utilitarian purposes like<br></br>vessels, flower pots, bricks etc. Pottery is a specialized art that has always fascinated art lovers.Terracotta has been used for a very long time with Archaeologists finding many terracotta sculptures, more than 5,000 years old. In ancient era,the clay sculptures were sun dried and later placed in open hearths before finally being placed in kilns.</p>
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
        </div>
    )
}

export default About;