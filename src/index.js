import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Card1 from "./components/card-1.png"
import Card2 from "./components/card-2.png"
import Card3 from "./components/card-3.png"
import Cards from './Cards';
import './style.css';

function StaticPage(){
  return(
    <div className='baap-div'>
      <Navbar/>
      <Hero/>
      <div className='og'>
      <Cards image = {Card1} />
      <Cards image = {Card2} /> 
      <Cards image = {Card3} />
      </div>
    </div>
  )
}

ReactDOM.render(<StaticPage/>, document.getElementById("root"));
