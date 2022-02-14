import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartActions'
import {deleteFromCart} from '../actions/cartActions'
import Checkout from '../components/Checkout'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ReactTypingEffect from 'react-typing-effect';

export default function Cartscreen() {

    AOS.init()

    const cartstate = useSelector(state=>state.cartReducer)
    const  cartItems= cartstate.cartItems
    var subtotal = cartItems.reduce((x , item)=> x+item.price ,0)
    const dispatch = useDispatch()

    return (
        <div className='cartscreen'>
            <div className='row justify-content-center p-2' data-aos='fade-down'>
                
                <div className='col-md-6'>
                        <h2 style={{fontSize:'40px',color:'#FF8066'}}>My Cart~<ReactTypingEffect
        text={["Order Now","Pay Now"]}
      /></h2>

                        {cartItems.map(item=>{
                          return    <div className='flex-container'>
                              <div className='shadow-lg p-3 w-100 mb-5 bg-white rounded' style={{display:'inline-flex'}}>
                              <div className='text-start m-1 w-100'>
                                <h1>{item.name} [{item.varient}] </h1>
                                <h1>Toppings : {item.toppings} </h1>
                                <h1>Price : {item.quantity}*{item.prices[0][item.varient]} = {item.price} </h1>
                               
                                <h1 style={{display:'inline'}}>Quantity :</h1>
                                <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1,item.varient))}}></i>
                                <b>{item.quantity}</b>
                                <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1,item.varient))}}></i>
                                {/* <hr /> */}
                              </div>
                              <div className='m-1 w-100'>
                                    <img src={item.image} style={{height:'80px',width:"80px"}} alt=""/>
                              </div>
                              <div className='m-1 w-100'>
                              <i className="fa fa-trash mt-5" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}} ></i>
                              </div>
                            </div>
                          </div>

                        })}

                      
                </div>
                        
                <div className='col-md-5 text-end cart'>
                    <h2 style={{fontSize:'45px',color:'#FF9671'}}>SubTotal : <span style={{color:'#845EC2'}}>{subtotal} /-</span></h2>
                 <Checkout  subtotal={subtotal}/>
                </div>
               
               
            </div>
        </div>
    )
}

