import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Footer = ({ theme }) => {
  return (
    <>
      {/*theme==="light"?(
      <div className='footer1'>
      <div className="flexbox">

        <div className='flex1'>
          <div className='img1'>
          <img src="https://s3-alpha-sig.figma.com/img/dc85/e6f6/7fa0d3b00cb2ce5d9bff92eea139d8aa?Expires=1647216000&Signature=V~MwJC4RuQ-CkE6MdVl4v5CAdqjMETPsg3rzHZIBkJWr49zfGQMoDixgflyvWU~xKtr~QL4e~nlZBPZ7XuIGo4TWZmy7ZSw6pm4KQc6p0ou7m1E0GLAaAQ5FbfQA8~qHonRM-lqx0YfTee~RuxZ5weE1MyD21jigBfEQ-0C9LTPclS7eQHYRfy2MEX5y~tLWetdKPoALOd9F9pMPtjPXY2mXXuwaf6tS1LoZl0Qyd6osdBvERKjOSCTkCcG5SpXY001cvy5o3LPUoNfoxmujW8PFqZ1Vxv5ogCBhxwMj4oIhT22babOeMDrRGfC1q40ll3jkeeNzNn6jXvonf~Ez6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="gamecoin" />
          </div>
          <div className='content'>
            <p>
            The best and largest digital marketplace for <br /> Spotrs crypto collectibles and non-fungible <br /> tokens (NFTs). Buy, sell, and discover exclusive <br /> digital items.
            </p>
            <div className='socialmedia'>
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook" />
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin" />
            </div>
          </div>
        </div>
        <div className='flex2'>
          <h3>Resources</h3>
          <div className='list'>
            <p>Academy</p>
            <p>Blog</p>
            <p>Theme</p>
            <p>Hosting</p>
            <p>Developers</p>
            <p>Support</p>
          </div>
        </div>
        <div className='flex3'>
          <h3>My Account</h3>
          <div className='list'>
            <p>Profile</p>
            <p>Favourite</p>
            <p>My Collections</p>
            <p>Settings</p>
          </div>
        </div>
        <div className='flex4'>
          <h3>Stay In The Loop</h3>
          <p>
          Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.
          </p>
          {/*<div className='inputfield'>
            <div className='emailbox'>
              <input type="email" name="email" id="email" placeholder='Enter your email address'/>
              <input type="button" value="Suscribe Now" />
            </div>
            <div className='language'>
              <h3>Language</h3>
              <input type="text" name="lang" id="lang" placeholder='English'/>
            </div>
          </div>}
        </div>
        
      </div>
      <p className='copyright'>
      Copyright © 2022 Siddharth Patel
      </p>
    </div>
   ):(
    <div className='footer2'>
    <div className="flexbox">
      <div className='flex1'>
        <div className='img1'>
        <img src="https://s3-alpha-sig.figma.com/img/dc85/e6f6/7fa0d3b00cb2ce5d9bff92eea139d8aa?Expires=1647216000&Signature=V~MwJC4RuQ-CkE6MdVl4v5CAdqjMETPsg3rzHZIBkJWr49zfGQMoDixgflyvWU~xKtr~QL4e~nlZBPZ7XuIGo4TWZmy7ZSw6pm4KQc6p0ou7m1E0GLAaAQ5FbfQA8~qHonRM-lqx0YfTee~RuxZ5weE1MyD21jigBfEQ-0C9LTPclS7eQHYRfy2MEX5y~tLWetdKPoALOd9F9pMPtjPXY2mXXuwaf6tS1LoZl0Qyd6osdBvERKjOSCTkCcG5SpXY001cvy5o3LPUoNfoxmujW8PFqZ1Vxv5ogCBhxwMj4oIhT22babOeMDrRGfC1q40ll3jkeeNzNn6jXvonf~Ez6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="gamecoin" />
        </div>
        <div className='content'>
          <p>
          The best and largest digital marketplace for <br /> Spotrs crypto collectibles and non-fungible <br /> tokens (NFTs). Buy, sell, and discover exclusive <br /> digital items.
          </p>
          <div className='socialmedia'>
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook" />
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin" />
          </div>
        </div>
      </div>
      <div className='flex2'>
          <h3>Market Place</h3>
          <div className='list'>
            <p>All NFTs</p>
            <p>New</p>
            <p>Art</p>
            <p>Sports</p>
            <p>Utility</p>
            <p>Music</p>
            <p>Domain Name</p>
          </div>
        </div>
        <div className='flex3'>
          <h3>My Account</h3>
          <div className='list'>
            <p>Profile</p>
            <p>Favourite</p>
            <p>My Collections</p>
            <p>Settings</p>
          </div>
        </div>
      <div className='flex4'>
        <h3>Stay In The Loop</h3>
        <p>
        Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.
        </p>
        <div className='inputfield'>
          <div className='emailbox'>
            <input type="email" name="email" id="email" placeholder='Enter your email address'/>
            <input type="button" value="Suscribe Now" />
          </div>
          <div className='language'>
            <h3>Language</h3>
            <input type="text" name="lang" id="lang" placeholder='English'/>
          </div>
        </div>
      </div>
    </div>
    <p className='copyright'>
    Copyright © 2022 Siddharth Patel
    </p>
  </div>
   )*/}
      <div className='footer1'>
        <div className='flexbox'>
          
          <div>
            <h3>Have a Good portfolio</h3>
            <h3>Predict Today</h3>
            <p>High level prediction in stock</p>
            <p > Get Started</p>
            </div>
            <div className='flex2'>
              <h3>Resources</h3>
              <div className='list'>
                <p>Academy</p>
                <p>Blog</p>
                <p>Theme</p>
                <p>Hosting</p>
                <p>Developers</p>
                <p>Support</p>
              </div>
            </div>
            <div className='flex3'>
              <h3>My Account</h3>
              <div className='list'>
                <p>Profile</p>
                <p>Favourite</p>
                <p>My Collections</p>
                <p>Settings</p>
              </div>
            </div>
            <div className='flex3'>
              <h3>My Account</h3>
              <div className='list'>
                <p>Profile</p>
                <p>Favourite</p>
                <p>My Collections</p>
                <p>Settings</p>
              </div>
            </div>
            <div className='flex3'>
              <h3>Company</h3>
              <div className='list'>
                <p>About us</p>
                <p>Contact us</p>
                
              </div>
            </div>
          </div>
          
    
    <div className='copyright'>
      
            <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook" />
            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="twitter" />
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin" />
            </div>
    
        </div>
      

    </>
  )
}

export default Footer