import people from "./data1";
import {FaChevronLeft,FaChevronRight,FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
import "./style.css";
import { useState } from "react";

function App()
{
  const [index,setIndex]=useState(0)
  
  const { id, name, job, image, text } = people[index]

  console.log('current index =',index);





  const checkIndex=(number)=>
  { 
      const maxIndex=people.length-1
    if (number > maxIndex)
    {
      number=0
    }
    if (number < 0)
    {
      console.log("number is less that 0 ",);
        number=maxIndex  
    }
    console.log("number in checkindex function=",number);
    return number;
  }

  const moveToNext=()=>
  {
    
    setIndex((currentIndex)=>{
      const newIndex = currentIndex + 1
      return checkIndex(newIndex);
    })
  }

  const moveToPrevious = () => {

    setIndex( (currentIndex)=>{
      const newIndex = currentIndex - 1
      return checkIndex(newIndex);
    })
   
   
  }
  
  const surpriseClick=()=>
  {
    setIndex(()=>{
      const newIndex=Math.floor(Math.random()*8);
      console.log(newIndex,"is the new random index");
      return newIndex
    })
  }

  return (
    <div className="top-container">
      <div className="main_div">
        <div className="img_div">
          <img src={image} alt="name" />
        </div>

        <div className="info_container">
          <h1>{name}</h1>
          <h3>{job}</h3>
          <p>
            {id} {text}
          </p>
        </div>
        <div className="btn_container">
          <button onClick={ moveToPrevious }><FaChevronLeft/></button>
          <button onClick={ moveToNext }><FaChevronRight /></button>
        </div>
        <button className="btn_surprise" onClick={surpriseClick}>Surprise me</button>
      </div>
    </div>
  );
}
export default App;
