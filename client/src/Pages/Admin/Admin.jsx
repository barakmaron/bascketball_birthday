import React, { useCallback, useEffect } from 'react';
import Constants from '../../Constants';
import NavBar from '../../Components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Form from '../../Components/Form/Form';

const Admin = ({ 
  logged_in, 
  LoginAction,
  AuthUserAction
}) => {

  const LoginSubmit = useCallback((event, form) => {
    event.preventDefault();
    LoginAction(form);
  }, [LoginAction]);

  useEffect(() => {
    AuthUserAction();
  }, [AuthUserAction]);

  return (<>
    { logged_in && <NavBar
    routes={Constants.admin_routes}></NavBar> }
    <div>
    { logged_in && <Outlet/> }      
    </div>
    { !logged_in && <Form inputs={Constants.login_form} action={LoginSubmit}/> }
    </>);
};

export default Admin;
