
import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {connect,Provider} from 'react-redux';
import { Router,Link,HashRouter,Route,Switch} from "react-router-dom";
import { LocaleProvider,ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import "./styles/index.scss";
import Home from './scripts/routes/index';
import ConnectPage from './scripts/content/ConnectPage/index';
import store from './scripts/redux/store';
import { persistor } from './scripts/redux/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
render(
    <HashRouter basename="/" component={ConnectPage}>
        <ConfigProvider locale={zh_CN}>
            <PersistGate loading={null} persistor={persistor}>
                <Provider store={store}>
                    <Home/> 
                </Provider>
            </PersistGate>
        </ConfigProvider>
        
    </HashRouter>,
    document.getElementById("app")
)

               













