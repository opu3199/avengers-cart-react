/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Cart.css'

const Cart = ({selectactor,reamining,totalcost}) => {
const {name}=selectactor
    return (
        <div  className='cart-container p-10 '>
           <h2 className='text-3xl text-white font-bold mb-5'>Total Actor : {selectactor.length}</h2> 
           <h2  className='text-3xl text-white font-bold mb-5'>Reamaining : {reamining}</h2>
           <h2  className='text-3xl text-white font-bold mb-5'>Total cost :{totalcost} </h2>
           
           {
            selectactor.map(actor=><li className='text-2xl font-bold text-yellow-400 ' key={actor.id}>{actor.name}</li>)
           }


        </div>
    );
};

export default Cart;