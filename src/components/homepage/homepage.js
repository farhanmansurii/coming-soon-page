import React from 'react'
import './homepage.sass'
import { useState } from 'react'
import BackImg  from '../assets/bg-pattern-desktop.svg'
import DeskImg from '../assets/hero-desktop.jpg'
import TabImg from '../assets/hero-mobile.jpg'
import Arrow from '../assets/icon-arrow.svg'
import Error from '../assets/icon-error.svg'


function Homepage() {
  let hideError = {
    opacity:0,
  }
  const [error, setError] = useState(hideError);
  const [btnStatus, setBtnStatus] = useState(true);
  
  const storeEmail =(event) => {
    event.preventDefault()
    alert(document.getElementById("mail").value)
  }

  const checkMail = (event)=>{
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    let emailInput = event.target.value;
    let showError = {
      opacity:1,
    }

    if (emailInput.match(pattern) || emailInput === '') {
      setError(hideError)
      event.target.style.border = "1px solid hsl(0, 36%, 80%)"
      setBtnStatus(false)
    }
    else{
      setError(showError)
      event.target.style.border = "2px solid hsl(0, 93%, 68%)"
      setBtnStatus(true)
    }
    if(emailInput === ''){
      setBtnStatus(true)
    }
  }

  return (
    <header>
      <div className="textcontent">
        <figure>
          <img src={BackImg} alt="" />
        </figure>
        <div className="text-area">
          <h1><span>WE'RE</span><br /> COMING <br /> SOON</h1>
          <p>Welcome, shoe enthusiasts! Wafeandy Shoes Store is currently undergoing renovations. We'll be back soon with an amazing selection of footwear to elevate your style.</p>
          
        </div>
      </div>
      <picture>
        <source media="(max-width: 1024px)" srcset={TabImg} />
        <img src={'https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?q=80&w=2518&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" />
      </picture>
    </header>
  )
}

export default Homepage