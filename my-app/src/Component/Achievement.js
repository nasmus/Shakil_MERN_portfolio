import React,{useContext, useEffect,useState} from 'react'
import '../CSS/Achievement.css'
import TestAchievement from './TestAchievement';
import { Store } from '../Store';

export default function Achievement() {
  const [isActive, setIsActive] = useState(false);
  const {state} = useContext(Store);
  const {data} = state;

  console.log("scrolldata",data);
  useEffect(() => {
    if(data >= 2417 && data <= 3085){
      setIsActive(true)
     }
  },[data])

  return (
    <div className='achievement'>
        <div data-aos="fade-up" style={{paddingLeft:'30px'}} className='achievement__section '>
            <h1 style={{color:'white'}} >Achievement & Certification</h1>
            {isActive ? <TestAchievement /> : ''}
        </div>
    </div>
  )
}
