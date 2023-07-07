import React, { useState,useEffect } from "react"
import { IonIcon } from '@ionic/react';
import axios from 'axios';

import { FaHome, FaSortAmountUp, FaDirections } from 'react-icons/fa';


const Rating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            style={ { color: index <= rating ? 'gold' : 'gray' } }
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

const CustomCard = ({ vars,setSection }) => {
const [data, setData] = useState(null);
const [filter, setFilter] = useState(null);
const [load,setLoad] = useState(false)
const [toast, setToast] = useState({ isOpen: false, message: "", color: "" });


useEffect(() => {
  const params = new URLSearchParams(location.search);
  const urlFilter = params.get('filter');

  if (urlFilter) {
    try {
      setFilter(JSON.parse(decodeURIComponent(urlFilter)));
    } catch (e) {
      console.error('Failed to parse filter:', e);
    }
  }
}, []);



useEffect(() => {
  const filterString = filter && Object.keys(filter).length ? JSON.stringify(filter) : "";
  axios.get(`${import.meta.env.VITE_APP_API_URL}properties/list`,{ 
    params: { 
      filter: filterString 
    } 
  }).then((res) => {
    setData(res.data.data);
    setLoad(true);
  }).catch(err => {
    setToast({ isOpen: true, message: err.response.data.error, color: "danger" });
  });


}, [filter]);





return(
  <>
{load && data?.map(d => 
  (

  <div key = { d._id } style={ { border: '1px solid #ccc', borderRadius: '15px', padding: '10px', maxWidth: '400px' } }>
    <h2>{ d.Title }</h2>
    <img src={d.Image } alt="Card top" style={ { width: '100%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' } } />
    <div style={ { display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px 0' } }>
      <div>
        <FaHome />
        <span>{  d.Facing } </span>
      </div>
      <div>
        <FaSortAmountUp />
        <span>{  d.PlotNumber } </span>
      </div>
      <div>
        <FaDirections />
        <span>{  d.Facing } </span>
      </div>
      <div>
        {/* <BiCurrentLocation /> */}
        <span>{  d.Possession } </span>
      </div>
    </div> 
    
    <div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }>
    </div>
  </div>)
  )
}
</>
  )
};
  
export default CustomCard;