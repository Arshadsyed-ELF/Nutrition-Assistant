import React from 'react'
import Unavbar from './Unavbar'
import { Button } from 'react-bootstrap'
import "./suggestion.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()
  return (
    <div style={{backgroundColor:"#b21b46"}}>
        <Unavbar/>
        <br/>
        <h1 className="text-center" style={{color:"black"}}>Welcome to the Nutrition Assistant</h1> <br/> <br/><br/>
        <div style={{display:"flex",justifyContent:"center",}}>
        <p className="text-center"  style={{fontSize:"18px",width:"80%",color:"whitesmoke"}}>The Nutrition Assistant is here to help you achieve your health and wellness goals through personalized nutrition guidance. Whether you want to maintain a balanced diet, support growth and development, or manage your weight, our assistant can provide valuable insights and recommendations tailored to your needs.</p>
        </div><br/>
        <div style={{display:"flex",justifyContent:"center"}}>
    <p className="text-center"  style={{fontSize:"18px",width:"80%",color:"whitesmoke"}}>To get started, simply click the "Go and Get Diet Plans" button below and answer a few questions about your age, height, and weight. Based on this information, our assistant will provide you with personalized nutrition advice to support your specific goals.</p>   
   </div>
   <br/>
   <div style={{display:"flex",justifyContent:'space-around',}}>
   <img src='https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.webp?b=1&s=170667a&w=0&k=20&c=RKgGJW8aIINIPpisynZ2x6UWFiMZ0afmEN32gmbYvVI='  width="350px" style={{borderRadius:"40px"}}/>
   <img src='https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg' width="350px" style={{borderRadius:"40px"}} />
   <img src='https://media6.ppl-media.com/mediafiles/blogs/fruits_4979fd4202.jpg' width="350px" style={{borderRadius:"40px"}} />
   </div>
   <br/>
   <br/>
   <br/>
   <div className="flex justify-center">
  <button className="custom-button-style" onClick={(()=>{navigate('/suggestion')})}>
    get diet plan
  </button>
</div>



   <br/>
   <br/>
   <div>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{color:"blue"}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>It is a platform where u feel like healthy.</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 121-456-349</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Email At: NutriAssist@gmail.com</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By Nutri-Assist. <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
   
   </div>
  )
}

export default Home