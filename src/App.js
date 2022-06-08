import React from 'react';
import "../src/App.css"
import  HomeContainer from "./container/HomeContainer";
import HeaderContiner from "./container/HeaderContainer"

export default function App() {
  return (
    <div className='full'>
      <HeaderContiner/> 
     <HomeContainer />
    </div>
  )
}  
