import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TestButton from '../pages/TestButton.js';


function AuthRoute({ Authenticated, render, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
            {  if(Authenticated){
                console.log('AuthRoute 전달받은 auth인증 확인, auth상태:',Authenticated);
                console.log('AuthRoute render 진행, 컴포넌트를 렌더 합니다.');
                return render(props);
              }else{
                console.log('AuthRoute 전달받은 auth인증 없음 :',Authenticated,'. =>login페이지로 리다이렉트');
                return <Redirect to={{ pathname: '/login'}}/>;
              }


            }


        }
      />
    ); 
  }
  
  
  
  export default AuthRoute;