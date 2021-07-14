import './App.css';
import React, { useState, useEffect } from 'react'; 
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Login from './pages/Login'
import TestButton from './pages/TestButton'
import AuthRoute from './pages/AuthRoute'


function App() {



  //유저 로그인 정보 fetch 와 state
  const [accountInfo, setAccountInfo]=useState(null)

  let Authenticated = accountInfo != null;
      console.log(Authenticated);
      console.log(accountInfo);

  useEffect(()=>{
      fetch('/api/account')
      .then(res=>res.json())
      .then(res=>setAccountInfo(res))
      
      .catch(error=> setAccountInfo(null))
    },[])




  return (


    <Router>
      
      <Switch>



          <Route
            path={['/login','/signup']}
            render={props => <Login Authenticated={Authenticated} {...props}/>}
            />

            <AuthRoute
            Authenticated={Authenticated}
            path={'/'}
            render={props=> <TestButton Authenticated={Authenticated} accountInfo={accountInfo}  {...props}/>}
            />



      </Switch>

    </Router>
  );
}

export default App;



/*

 //유저 로그인 정보 fetch 와 state
  const [accountInfo, setAccountInfo]=useState([])

  useEffect(()=>{
      fetch('/api/account')
      .then(res=>res.json())
      .then(res=>setAccountInfo(res))
      
      .catch(error=> setAccountInfo({username:'없음',password:'없음',name:'없음'}))
    },[])


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



  return (


    <Router>
      
      <Switch>

       <Route
        exact path={'/'}
        render={props=> <TestButton accountInfo={accountInfo} {...props}/>}
        />

        <Route
          path={'/login'}
          render={props => <Login {...props}/>}
          />

        <Route
          path={'/logout'}
          render={props => <Logout {...props}/>}
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

    </Router>

    */