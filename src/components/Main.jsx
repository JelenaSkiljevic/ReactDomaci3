import React from 'react'
import video from '../videos/video.mp4'
import video2 from '../videos/video2.mp4'
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className='main'>
        <video src={video2} autoPlay muted loop />
        <div className='content'>
            <h1>Scandinavian Candy</h1>
           
            <Link to="/products"><h3 style={{color:"wheat"}}>SHOP NOW</h3></Link>
        </div>
    </div>
  )
}