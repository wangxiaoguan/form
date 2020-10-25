
import { Route } from 'react-router-dom';
import React from 'react';
import Home from '@/pages/Home/Home';//首页
import Doc from '@/pages/Doc/Doc';//概览
import Tuto from '@/pages/Tuto/Tuto';//组织生活
import Blog from '@/pages/Blog/Blog';//教育学习
import Comm from '@/pages/Comm/Comm';//组织生活新添
import Test from '@/pages/Test';//组织生活新添
import Base from './base'
const match = '';
const Router = () => {
    return (
        <Base>
          <Route exact path="/" component={Home}/>
          <Route  path={`${match}/Home`} component={Home} />
          <Route  path={`${match}/doc/:text`} component={Doc} />
          <Route path={`${match}/tuto`} component={Tuto} />
          <Route  path={`${match}/comm`} component={Comm} />
          <Route  path={`${match}/blog`} component={Blog} />
          <Route  path={`${match}/test`} component={Test} />
        </Base>
    );
  };
  
  export default Router;