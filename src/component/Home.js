import React from 'react'
import Header from './Header';
import "./Main.css";
export default function Home(props) {
console.log("Home:",props)
  return (
      <div>
        {/* <Header/> */}
    <div className='grid'>
        <div className='products'>
            <div className='product'>
                <img src="https://www.refurbished.store/cache/images/iphone-x-zilver-0_600x600_BGresize_16777215-tj.png" alt="" />
            </div>
            <div className='producrt-details'>
                <p><span>I-Phone Price</span><span>$1000.00</span></p>
                </div>
                <div>
                <button onClick={()=>
            props.addToCartHandler({price:1000,name:"i-phone"})   
            }>Add to cart</button>

<button onClick={()=>
            props.removeToCartHandler()   
            }>Remove to cart</button>
                </div>
            
        </div>
    </div>
    </div>
  )
}
