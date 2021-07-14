import React, { Component, useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Deco.css'


function Deco ({decoState}){

 



    return(

        <div className='Deco'>

            <h1>리액트의 틀과 서버의 정보 결합</h1>

        <div>
            <span id='DecoLabel'>서버에서 받아온 정보 : </span> 
            <span id='DecoLabel2'>{decoState}</span>
        </div>


      </div>


    )

}

export default Deco;



/*

 useEffect(()=>{

        fetch('/api/deco',{
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
        })
        .then(res=>res.json())
        .then(res=>setDecoState(res.serverTest))
        .catch(error=> alert('error'))
    
      },[])



      */