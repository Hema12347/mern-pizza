/* eslint-disable jsx-a11y/alt-text */
import React , {useState} from 'react'
import  {Modal}  from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux'
import { addToCart } from '../actions/cartActions';
import Ripples from 'react-ripples'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Pizza({pizza}) {

    AOS.init()

    const [ quantity , setquantity ] = useState(1)
    const [ varient , setvarient ] = useState('small')
    const [ toppings , setToppings ] = useState('cheese')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const dispatch = useDispatch()
    function addtocart()
    {
        dispatch(addToCart(pizza,quantity,varient,toppings))
    }

    return (
        
        <div 
        data-aos='zoom-in' style={{color:'#FF8066'}}
         className="shadow-lg p-3 mb-5 bg-white rounded "  key={pizza._id}>
                
            <div onClick={handleShow}>
            <h1>{pizza.name}</h1>
            <img src={pizza.image} className="img-fluid" style={{height:'200px',width:'200px'}}/>
            </div>


            <div className="flex-container" >

                <div className='w-100 m-1'>
                    <p>Varients</p>
                    <select className='form-control' value={varient} onChange={(e)=>{setvarient(e.target.value)}}> 
                    {pizza.varients.map(varients =>{
                        return <option value={varients}>{varients}</option>
                    })}
                    </select>
                </div>

                <div className='w-100 m-1' >
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                        {[...Array(10).keys()].map((x , i)=>{
                            return <option value={i+1}>{i+1}</option>
                        })}
                    </select>
                </div>

                <div className='w-100 m-1'>
                    <p>Toppings</p>
                    <select className='form-control' value={toppings} onChange={(e)=>{setToppings(e.target.value)}}> 
                    {pizza.toppings.map(toppings =>{
                        return <option value={toppings}>{toppings}</option>
                    })}
                    </select>
                </div>

            </div>

            <div className="flex-container" >
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Price : {pizza.prices[0][varient]*quantity} Rs/-</h1>

                </div>
                <div className='m-1 w-100 btn1 '>
                    <Ripples color='#FBEAFF'>
                        <button className="btn add" onClick={addtocart}><span> <i className="fa fa-plus" aria-hidden="true" style={{color:"red"}}></i></span>ADD TO CART</button>
                        </Ripples>
                </div>
                    
            </div>

            <Modal show={show}>
  <Modal.Header closeButton>
    <Modal.Title>{pizza.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <img src={pizza.image} className="img-fluid" style={{height:'400px'}}/>
    <p>{pizza.description}</p>
  </Modal.Body>

  <Modal.Footer>
    <button className="btn" onClick={handleClose}>CLOSE</button>
  </Modal.Footer>
</Modal>

        </div>
       
    )
}
