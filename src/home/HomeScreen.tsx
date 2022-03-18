import React from 'react'
import { NavBar } from '../ui/NavBar'
import {ShopButton} from '../ui/ShopButton'

export const HomeScreen = () => {
    const imgURl = "/assets/pexels-dominika-roseclay-977737.jpg"
  return (
    <div>
        <NavBar/>
        <div className="home_background">
            <img src={imgURl} alt="background-puff" />
        </div>
        <div className='home_title-b'>
        <p className='home_text'>
        ESTÁR CÓMODO,
        </p>
        <p className='home_text'>
        NUNCA FUE TAN FÁCIL.
        </p>
      </div>
      <ShopButton/>
        
    </div>
  )
}
