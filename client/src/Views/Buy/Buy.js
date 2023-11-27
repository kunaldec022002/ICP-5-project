import React, { useEffect, useState } from "react";
import './Buy.css'
import { useParams } from "react-router-dom";
import { checkLogin } from "../../utils/auth";
import axios from "axios";
import Imginc from '../Buy/img/-plus.png';
import Imgdec from '../Buy/img/-minus.png';
import Navbar from "../../Components/Navbar/Navbar";

export default function Buy()
{

    const {id}=useParams();

    const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);

    const[shippingAddress,setShippingAddress]= useState('');

    const [user, setUser] = useState({});

    const loadProduct = async()=>{

        if(!id)
        {
            window.location.href = '/';
        }
        const response = await axios.get(`/product/${id}`);

        setProduct(response.data.data);

    };

    const increaseQuantity = async()=>{
      setQuantity(quantity+1);
    };

    const decreaseQuantity = async ()=>{
      if(quantity>1){
        setQuantity(quantity -1);
      }
    }


   useEffect(()=>{
    checkLogin();
    loadProduct();
    const user = JSON.parse(localStorage.getItem("user")) || null;
    setUser(user);

  },[]);

  const placeOrder = async()=>{
    const response = await axios.post("/order", {
      product:id,
      quantity:quantity,
      shippingAddress:shippingAddress,
      user: user._id
    })

    alert(response.data.message);
    window.location.href = '/my-orders';
  }


    return(
        <div>
          <Navbar/>

            <div className="buy-container">

              <img src={product.image} className="buy-product-image"/>  

              <div>

                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h1>₹{product.price}</h1>
                

                <div className="quantity-container">

                  <img className="quantity-btn" src={Imgdec} onClick={decreaseQuantity}/>
                  <span className="quantity-text">{quantity}</span>
                  <img className="quantity-btn" src={Imginc} onClick={increaseQuantity}/>

                </div>

                <input type="text"
                placeholder="Shipping Address"
                className="shipping-address"
                value={shippingAddress}
                onChange={(e)=>{
                  setShippingAddress(e.target.value)
                }}/>

                <button type="button" className="buy-btn"
                onClick={placeOrder}>Place Order</button>

              </div>
            </div>
            
        </div>
    )
}