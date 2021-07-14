import React, { useState, useEffect } from 'react'; 
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import './TestButton.css'
import Program from '../pages/Program'
import Deco from '../pages/Deco'
import Account from '../pages/Account'
import Home from '../pages/Home'


function TestButton ({history, accountInfo, Authenticated}){


    //accountInfo 받아서 userState 설정
    const [userState, setUserState] = useState('없음')
    
        useEffect(()=>{
            if(Authenticated===false){
                setUserState('없음');
            }else{
                setUserState(accountInfo.name);
            }
        },[accountInfo, Authenticated])

  
          //deco 용 fetch 와 state
          const [decoState, setDecoState] =useState('')
  
          useEffect(()=>{
              fetch('/api/deco')
              .then(res=>res.json())
              .then(res=>setDecoState(res.serverTest))
              .catch(error=> alert('error'))
          },[])
  
  
          //프로그램 목록
          const [programState, setProgramState] = useState([])
  
          useEffect(()=>{
              fetch('/api/program')
              .then(res=>res.json())
              .then(res=>setProgramState(res))
              
              .catch(error=> alert('error'))
              },[])



    return(


        <div>


            <div className='TestButton'>

                           

                <h1>홈페이지</h1>

                <h2>로그인된 사용자 : {userState}</h2>

                <a href='/api/greeting'>
                    <input type='button' value='api/greeting 으로'/>
                </a>

                <Link to={'/browse'}>
                    <input type='button' value='프로그램목록보기'/>
                </Link>

                <Link to={'/deco'}>
                    <input type='button' value='리액트틀과 서버정보결합 테스트'/>
                </Link>

                <Link to={'/account'}>
                    <input type='button' value='사용자 정보'/>
                </Link>

        </div>



                <Switch>

                        <Route
                        path={'/home'}
                        render={props => <Home {...props}/>}
                        />


                        <Route
                        path={'/browse'}
                        render={props => <Program Pdata={programState} {...props}/>}
                        />

                        <Route
                        path={'/deco'}
                        render={props => <Deco decoState={decoState} {...props}/>}
                        />

                        <Route
                        path={'/account'}
                        render={props => <Account accountInfo={accountInfo} {...props}/>}
                        />

                </Switch>


      </div>
    )

}

export default TestButton;