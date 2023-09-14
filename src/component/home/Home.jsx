/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {

    const [actor,setactor]=useState([])
    const [selectactor,setselectactor]=useState([])
    const [reamining,setremaining]=useState([0])
    const[totalcost,settotalcost]=useState([0])
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=>res.json())
        .then(data=>setactor(data))
    },[])
    const cartnamehandle=(actor)=>{
        const ishave=selectactor.find(item=>item.id == actor.id)
        let count=actor.salary;
        if(ishave){
           return alert('already booked this name')
        }else{

            selectactor.forEach((items)=>{
                count=count+items.salary
            })
           const totalremaining=(40000-count)
           if(count>40000){
            return alert('dur beta taka ses chor marmo')
           }else{
            settotalcost(count)
            setremaining(totalremaining)
            setselectactor([...selectactor,actor]);
           }
           
        }    
    }
  

    return (
        <div>
            <h1 className='text-4xl font-bold mb-10 text-yellow-400 underline'>Make a Avengers Movie</h1>
       
        <div className='container flex'>
            <div className='full-container'>
            <div  className='card-container'>
               {
                actor.map(actor=>  <div key={actor.id} className='card space-y-3'>
                <div className='image-container'>
                <img className='mx-auto' src={actor.image} alt="" />
                </div>
                <h2 className='text-xl font-bold text-yellow-400'>{actor.name}</h2>
                <p className=''><small className='text-white font-bold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, voluptas!</small></p>
                <div className='info flex justify-evenly'>
                    <h3 className=' text-white text-2xl font-bold'>{actor.salary}</h3>
                    <h3 className='text-white text-lg font-bold'>{actor.role}</h3>
                </div>
                <button className='btn1 p-2 px-5 mt-2 rounded-xl text-lg text-black font-bold' onClick={()=>cartnamehandle(actor)}>click</button>

            </div>) 
               }

            </div>

            <div className='cart'>
                <Cart selectactor={selectactor}reamining={reamining} totalcost={totalcost} ></Cart>
                

            </div>

            </div>
          
        </div>
        </div>
    );
};

export default Home;