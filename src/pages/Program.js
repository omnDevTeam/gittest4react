import React, { Component, useState, useEffect } from 'react'; 
import Plist from '../pages/Plist.js';
import Pinfo from '../pages/Pinfo.js';
import './Program.css';

import { Link } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";





function Program ({match, Pdata}){

    return(         
      <div className="mainPage">     
        <h1>프로그램 목록 페이지</h1>
        <div className="Program">
  
                {Pdata.map(
                  function(mapParameter){  
                    return(
                      <Plist
                              id={mapParameter.title +'_id_'+ mapParameter.id} 
                              link={match.path+'/info/'+mapParameter.title} 
                              iurl={mapParameter.imgUrl}  
                              title={mapParameter.title} 
                              key={mapParameter.title +'_key_'+ mapParameter.id}
                      > 
                      </Plist> 
                    );
                  } 
                ) 
                } 


                <div>
             
                    
                    <Route
                      path={match.path+'/info/:title'}
                      render={props => <Pinfo Pdata={Pdata}{...props}/>}
                      />

              
       
                  
                </div>

        </div>

        
      </div>
    );
  }



export default Program; 