import React, { useEffect } from 'react';
import { useRoutes, navigate } from 'hookrouter';
import MainPage from './pages/main-page';
import DetailPage from './pages/detail-page';
import LoginPage from './pages/login-page';

const routes = {
  '/': () => <MainPage />,
  '/login': () => <LoginPage />,
  '/list-detail/:id': ({id}) => <DetailPage id={id} />
};

const MyApp = () => {
  useEffect(() => {
    const username = window.sessionStorage.getItem('username');
    if (username) navigate('/')
    else navigate('/login') 
  }, [])
  const routeResult = useRoutes(routes);

  return routeResult;
}
export default MyApp
