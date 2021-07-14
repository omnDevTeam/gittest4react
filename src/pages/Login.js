import React, { useState, useEffect } from 'react'; 
import { Switch, Redirect, Route } from 'react-router-dom';
import './Login.css'
import Signup from '../pages/Signup'

import { Link } from 'react-router-dom';



function Login ({Authenticated}){

  const { from } = { from: { pathname: "/home" } };


    if (Authenticated) {
        console.log('loginwindow auth 상태:', Authenticated);
        console.log('***loginwindow auth인증 완료. 홈으로 이동하는것을 시도합니다.');
        return <Redirect to={from} />;
    } else{ 
      console.log('loginwindow auth 상태:',Authenticated);
    }


    return(

        <div className='login'>

          <h1> 로그인/로그아웃 페이지</h1>

            <form method='post' action='/api/login'>

              <input className='loginForms' type='text' required placeholder='아이디' id='id' name='username'/>
              <input className='loginForms' type='password' required placeholder='비밀번호' id='pw' name='password'/>
              <input className='loginForms' type='submit' id='submit'/>

            </form>

          <Link to={'/signup'}>
              <input type='button' value='가입하기' id='linkbtn'/>
          </Link>

          <Switch>

            <Route
            path={'/signup'}
            render={props => <Signup Authenticated={Authenticated} {...props}/>}
            />
            
          </Switch>


         
        </div>


    )

}

export default Login;





