import React,{useState,useEffect} from 'react'
import {Col,Row} from 'react-bootstrap'
import Restaurants from './Restaurants'
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'

function Home() {
    const dispatch=useDispatch();
    const restaurantReducer=useSelector(state=>state.restaurantReducer)
    const {restaurants} =restaurantReducer
    // const [hotels,setHotels]=useState([])
    useEffect(()=>{
        dispatch(listRestaurants())


        // const FetchData=async()=>{
        //     await fetch('/restaurants.json')
        //     .then((res)=>res.json())
        //     .then((data)=>setHotels(data.restaurants))
        // }
        // FetchData();
    },[dispatch])
    return (
        <>
         {/*hotels*/restaurants ? (
             
                 <Row>
                 {/*hotels&*/restaurants.map(item=>(
                     <Col sm={12} md={8} lg={6} xl={3}>
                        <Restaurants cardItem={item}/>
                     </Col>
                 ))}
                 </Row>
            
         ):null}   
        </>
    )
}

export default Home


//use state
//use Effect -it fires of the effect written inside the useeffect hoock,
// if you want to give a effect to a component we use use effect hook
//component lifecycle method- mounting, updateing, unmounting