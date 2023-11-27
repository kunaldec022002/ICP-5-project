import React, { useEffect, useState } from "react"
import axios from "axios";
import"./MyOrders.css"
import Navbar from "../../Components/Navbar/Navbar";



function MyOrders(){

    const [orders, setOrders] = useState([]);

    const fetchOrders = async()=>{
        const user = JSON.parse(localStorage.getItem("user")) || null;
        const response = await axios.get(`/orders?id=${user._id}`)

        setOrders(response?.data?.data);
    }

    useEffect(()=>{
        fetchOrders()
    },[]);

    return(
        <div>
            <Navbar/>
            <h1 className="text-center">My Orders</h1>

            <div className="order-information">
                {
                    orders?.map((order,index)=>{

                        const {product, quantity, shippingAddress} = order;
                        return(
                        
                            
                                <div key={index} className="order-card">

                                    <h2>{product.name}</h2>
                                    <p>quantity:{quantity}</p>
                                    <p>Price:{product.price}</p>
                                    <p>Total Amount:{product.price * quantity}</p>
                                    <p>shippingAddress:{shippingAddress}</p>

                                </div>)
                    })
                }

            </div>
            
        </div>
    )
}

export default MyOrders