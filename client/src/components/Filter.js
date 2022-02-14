import React , {useState , useEffect} from 'react'
import { useDispatch,useSelector} from "react-redux"
import { filterPizzas } from "../actions/pizzaActions"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactTypingEffect from 'react-typing-effect';
export default function Filter() {
    AOS.init()
    const dispatch = useDispatch()
    const [searchkey , setsearchkey] = useState('')
    const [category , setcategory] = useState('all')
     const [extra , setextra] = useState('extra')
    return (
        <div className='container' >
            <div className='row justify-content-center shadow-lg p-3 mb-5 bg-white rounded'>

                <div className='col-md-3 W-100' >
                    <input 
                    onChange={(e)=>{setsearchkey(e.target.value)}}
                    value={searchkey}
                     type="text" className='form-control w-100' placeholder='search pizzas'/>
                </div>
                <div className='col-md-3 W-100'>
                    <select className='form-control w-100 mt-2' value={category} onChange={(e)=>{setcategory(e.target.value)}}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Nonveg</option>
                    </select>
                </div>
                <div className='col-md-3 W-100'>
                    <select className='form-control w-100 mt-2' value={extra} onChange={(e)=>{setextra(e.target.value)}}>
                        <option value="extra">Extras</option>
                        <option value="double ingredients">Double Ingredients</option>
                        <option value="spicy sauce">Spicy sauce</option>
                    </select>
                </div>
                <div className='col-md-3 W-100 mt-2'>
                    <button className='btn w-100 filter' data-aos='fade-down' onClick={()=>{dispatch(filterPizzas(searchkey , category,extra))}}>FILTER~<ReactTypingEffect
        text={["PIZZA","FAVOURITES"]}
      /></button>
                </div>
            </div>
        </div>
    )
}
