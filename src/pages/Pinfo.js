import React, { Component, useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Pinfo.css'


function Pinfo ({Pdata,match}){



    
    const PinfoData = Pdata.find(
        function(parameter) {
             return parameter.title === match.params.title //match params 는 주소창에 있는 title 을 가져온다. 결국 match params title 과 동일한 title을 가진 parameter가 program으로 선정된다.
            });

    return(

        <div className='pInfo'>

            <h1>프로그램 정보</h1>

        <div>
            <span id='info1'>프로그램 제목 : </span> 
            <span id='info2'>{PinfoData.title}</span>
        </div>
        <div>
            <span id='info3'>프로그램 요약 : </span> 
            <span id='info4'>{PinfoData.summary}</span>
        </div>

      </div>


    )

}

export default Pinfo;