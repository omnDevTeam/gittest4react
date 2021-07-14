import React, { useState, useEffect } from 'react'; 
import './Account.css'

import { Link } from 'react-router-dom';



function Account ({accountInfo}){

      useEffect(()=>{
        console.log('유저정보를 불러옵니다...');
        console.dir(accountInfo);
      },[accountInfo])

    return(
        <div className='account'>

            <p>유저 이름 : {accountInfo.name}</p>
            <p>유저 아이디 : {accountInfo.username}</p>
            <p>유저 비밀번호 : {accountInfo.password}</p>

            <a href='/api/logout'>
            <input
                type='button'
                name='Logout'
                value='로그아웃'
            />
            </a>



        </div>

    )
}

export default Account