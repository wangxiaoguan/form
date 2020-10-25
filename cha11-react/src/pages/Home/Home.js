import React, { Component } from 'react'
import style from './index.css';
import {Button} from 'antd';
import { Link } from 'react-router-dom';
// import Form from './Form'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
  
    render() {
     
        return (
            <div className={style.bg}>
              <div style={{textAlign:"center"}}>
                  <h2>React</h2><p>用于构建用户界面的 JavaScript 库</p><div>
                  <Link to="/doc/core"><Button type="primary">快速开始</Button></Link>
                  <Link to="/tuto"> <Button type="primary">入门教程</Button></Link>
                  </div>
                  {/* <div><Form/></div> */}
                </div>
            </div>
        )
    }
}
