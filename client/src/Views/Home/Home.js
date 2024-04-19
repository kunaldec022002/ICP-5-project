import React, { useEffect, useState } from "react";
import './Home.css';
import Navbar from "../../Components/Navbar/Navbar.js";
import axios from 'axios';
import {checkLogin} from "../../utils/auth";
import ProductCard from "../../Components/ProductCard/ProductCard.js";


function Home(){
    const [products,setProducts]= useState([]);

    const loadProducts = async ()=>{
        const response = await axios.get("/products");
        setProducts(response?.data?.data);

    }

    useEffect(()=>{
        checkLogin();
        loadProducts();

    },[]);

    
    return(
        <div>
            <Navbar/>
          
          

                <div className="product-container">

                    {
                        products?.map((product, index)=>{

                            const { _id, name, price, description, image} = product;
                            return(<ProductCard key={index} id={_id} name={name} price={price}
                            description={description} image={image}/>)
                        })
                    }
                </div>    
        </div>
    )
}

export default Home;