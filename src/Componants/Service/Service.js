import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Topic from '../Topic/Topic'
import './service.css'
const Service = () => {
    const[work,setWork]=useState([])
    useEffect(()=>{
        fetch('./service.json')
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])
    return (
        <div>
            <Menu></Menu>
           
                
                    <div className="topic-container">
                        <h2>Our Service</h2>
                        {
                            work.map(pd=><Topic pd={pd}></Topic>)
                        }
                    </div>
             
            
            <Footer></Footer>
        </div>
    );
};

export default Service;