
import '../styles/_main.scss';
import Image from 'next/image'
import Group from '../images/Group.png'
import Car from '../images/car.webp'
import Ford from '../images/Ford-Mustang-Mach-E.png'
import Poleaster from '../images/Polestar-2.png'
import Rivian from '../images/Rivian-R1S.png'
import Tesla from '../images/Tesla-Model-3.png'
import Petrol from '../images/petrol/picture.svg'
import Phone from '../images/Phone.png'
import AppStore from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import GooglePlay from '../images/Google Play.svg'
import { Genos,Anybody } from 'next/font/google'
import { FiArrowRight } from "react-icons/fi";
import { BiImage } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";
import { IoApertureOutline } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTrip } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";


const genos = Genos({ 
  subsets: ['latin'],
  weight:'400'
 })
const anybody = Anybody({ 
  subsets: ['latin'],
  weight:'400'
 })

export default function Home() {
  return (
      <main className={`${genos.className} ${anybody.className}`}>
          <div className='main-text'>
            <p className='slogan'>Elevate your ride</p>
            <p className='slogan-text'>Rent an electric car and feel the power of the future.</p>
            <button className="vehicles"><p>Vehicles</p> <FiArrowRight style={{ fontSize: '30px', margin:'0 0 0 15px' }}/></button>
          </div>
          <div className='main-images'>
            <Image className='electron' 
              src={ Group }
              alt='eletron' />
            <Image className='car' 
              src={ Car }
              alt='car' />
          </div>
          <div className='block-2'>
            <div>
              <p className='secondary'>How it works</p>
              <p className='paragraph'>Rent your next ev following these steps</p>
            </div>
            <div className="container">
              <div className="block">
                <BiImage style={{ fontSize: '3em' }}/>
                <br></br>
                <h3>Choose an EV</h3>
                <br></br>
                <p className='how-text'>Browse our catalog to view hundreds of EVs.</p>
              </div>
              <div className="block">
                <IoTimerOutline style={{ fontSize: '3em' }}/>
                <h3>Pick a date</h3>
                <br></br>
                <p className='how-text'>Choose the dates you’d like to rent your EV. </p>
              </div>
              <div className="block">
                <IoApertureOutline style={{ fontSize: '3em' }}/>
                <h3>Book your car</h3>
                <br></br>
                <p className='how-text'>Confirm details and book your vehicle.</p>
              </div>
            </div>

          </div>
          <div className='about'>
            <Image className='petrol' 
              src={ Petrol }
              alt='petrol' />
            <div className="about-square">
              <div className="square">
                <AiOutlineCalendar style={{ fontSize: '3em',color:'grey' }}/>
                <br></br>
                <b>Flexible dates</b> 
                <br></br>
                Choose any date, time, and length you’d like to rent your EV for</div>
              <div className="square">
                <BiTrip style={{ fontSize: '3em',color:'grey' }}/>
                <br></br>
                <b>Plan your trip</b> 
                <br></br>
                Our built in charging map helps you plan your trip</div>
              <div className="square">
                <Ri24HoursFill style={{ fontSize: '3em',color:'grey' }}/>
                <br></br>
                <b>24/7 support</b> 
                <br></br>
                Contact us any time of day with any questions, comments, or support needs</div>
              <div className="square">
                <AiOutlineCar style={{ fontSize: '3em',color:'grey' }}/>
                <br></br>
                <b>24hr car delivery</b>
                <br></br>
                Get your EV delivered to your location any time of day</div>
            </div>
          </div>
          <div className='numbers'>
            <h2>numbers that matter</h2>
            <p className='text-3'>With so many vehicle rental websites, here’s some facts that make us stand out.</p>
            <div className="container">
              <div className="block">
                <BsEmojiSmile style={{ fontSize: '3em' }}/>
                <br></br>
                <h1>25k+</h1>
                <br></br>
                <p className='how-text'>Happy customers</p>
              </div>
              <div className="block">
                <AiOutlineCloudSync style={{ fontSize: '3em' }}/>
                <h1>86k+</h1>
                <br></br>
                <p className='how-text'>Carbon emissions saved (kg)</p>
              </div>
              <div className="block">
                <AiOutlineCar style={{ fontSize: '3em' }}/>
                <h1>80+</h1>
                <br></br>
                <p className='how-text'>Vehicles to choose from</p>
              </div>
              <div className="block">
                <BsPeople style={{ fontSize: '3em' }}/>
                <h1>50k+</h1>
                <br></br>
                <p className='how-text'>US based support staff</p>
              </div>
            </div>
          </div>
          <div className='popular'>
            <h1>Most popular rentals</h1>
            <div className="container">
                <div className="block">
                <Image className='Poleaster' 
                src={ Poleaster }
                alt='poleaster' />
                  <br></br>
                  <h1>Polestar 2</h1>
                  <br></br>
                  <p>The Polestar 2 is so fast you’ll leave a Tesla in the dust.</p>
                  <div className="more-info"><button><p>More info</p> <FiArrowRight style={{ fontSize: '25px', margin:'0 0 0 15px' }}/></button></div>
                </div>
                <div className="block">
                  <Image className='Ford' 
                  src={ Ford }
                  alt='ford' />
                  <br></br>
                  <h1>Ford Mustang Mach-E</h1>
                  <br></br>
                  <p>The Mach-E is so stylish you’ll turn heads everywhere you go.</p>

                  <div className="more-info"><button><p>More info</p> <FiArrowRight style={{ fontSize: '25px', margin:'0 0 0 15px' }}/></button></div>
                </div>
                <div className="block">
                  <Image className='Rivian' 
                  src={ Rivian }
                  alt='rivian' />
                  <br></br>
                  <h1>Rivian R1S</h1>
                  <br></br>
                  <p>An electric truck so luxurious it feels like you’re in a Mercedes.</p>
                  <div className="more-info"><button><p>More info</p> <FiArrowRight style={{ fontSize: '25px', margin:'0 0 0 15px' }}/></button></div>
                </div>
                <div className="block">
                  <Image className='Tesla' 
                  src={ Tesla }
                  alt='tesla' />
                  <br></br>
                  <h1>Tesla Model 3</h1>
                  <br></br>
                  <p>The Model 3 is so quiet that you’ll wonder if it’s even on.</p>
                  <div className="more-info"><button><p>More info</p> <FiArrowRight style={{ fontSize: '25px', margin:'0 0 0 15px' }}/></button></div>
                </div>
            </div>
            <button className="shop-all"><p>SHOP ALL</p> <FiArrowRight style={{ fontSize: '30px', margin:'0 0 0 15px' }}/></button>
          </div>
          <div className='app' >
              <Image className='Phone' 
              src={ Phone }
              alt='phone' />

              <section>
                <h1>download the app</h1>
                <br></br>
                <p>With our app, you can book an electric vehicle in minutes, find charging stations near you, and track your rental car’s battery life. Available on both IOS and android.</p>
                <button className='ios'>
                  <Image src= {AppStore}
                  className='AppStore'
                  alt='App Store'
                  />
                </button>
                <button className='android'>
                  <Image src= {GooglePlay}
                  className='Googleplay'
                  alt='Google Play'
                  />
                </button>
              </section>

          </div>
          <div className='footer'>
            <p>Electrify @ 2023. All rights reserved.</p>
            
              <ul className='list'>
                <li>Legal</li>
                <li>Insurance</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Charging</li>
              </ul>
              <ul className='icons'>
                <li><AiFillYoutube style={{ fontSize: '2em' }}/></li>
                <li><BiLogoFacebook style={{ fontSize: '2em' }}/></li>
                <li><AiOutlineTwitter style={{ fontSize: '2em' }}/></li>
                <li><AiOutlineInstagram style={{ fontSize: '2em' }}/></li>
                <li><BiLogoLinkedin style={{ fontSize: '2em' }}/></li>
              </ul>
          </div>  
      
      </main>
    
  )
}
