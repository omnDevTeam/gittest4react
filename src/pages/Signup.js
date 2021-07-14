import React, { useState, useEffect } from 'react'; 
import './Signup.css'

import { Link } from 'react-router-dom';



function Signup ({Authenticated}){

    return(
        <div className='signup'>

            <h2>가입하기</h2>

            <form method='post' action='/api/signup'>
                <input type='text' name='username' placeholder='아이디' required/>
                <input type='password' name='password' placeholder='비밀번호' required/>
                <input type='text' name='name' placeholder='이름' required/>
                <input type='submit' name='signup' />
            </form>

            <Link to ='/login'>
            <input type='button' value='가입 그만두기'/>
            </Link>
        </div>
    )

}


export default Signup