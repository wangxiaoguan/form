import React, { Component } from "react";
import Header from "@/components/public/header";
import styles from "@/styles/common.css";
import {withRouter  } from 'react-router-dom';
class Base extends Component {
  constructor(p) {
    super(p);
    this.state = {
       flag:true
    };
  }

  changeLocation=()=>{
      this.setState({
        flag:false
      },()=>{
        this.setState({
          flag:true
        })
      })
  }

  componentWillReceiveProps(){
    this.changeLocation();
}

  render() {
    console.log(this.props)
    const { children } = this.props;
    const {flag} =this.state;
    return (
      <div>
        <div className={styles.header}>
          {flag?<Header {...this.props}/>:null} 
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
export default withRouter(Base);
