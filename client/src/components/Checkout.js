import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch , useSelector} from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";

export default function Checkout({subtotal}) {

    const orderstate = useSelector((state)=> state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const  dispatch = useDispatch()

    function tokenHander(token)
    {
        console.log(token)
        dispatch(placeOrder(token,subtotal))
    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error='Something went wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}
            <StripeCheckout
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51K9SaMSG2ugsD1kJNfbS2xFDe5zArQvu9TW9NE36DNqCVtbboSe0FQJxEUxlq835ipC8urPyTWxPIZqRFQlShGHc00O4bgBUrw'
            currency='INR'
            >

                <button className='btn'>Pay Now</button>

            </StripeCheckout>


        </div>
    )
}

