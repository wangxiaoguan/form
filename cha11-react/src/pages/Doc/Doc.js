import React, { Component } from 'react'
import style from './index.css';
import { Link } from 'react-router-dom';
export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            LinkList: [
                { to: '/doc/core', text: '核心概念' },
                { to: '/doc/guide', text: '高级指引' },
                { to: '/doc/api', text: 'API' },
                { to: '/doc/hooks', text: 'Hooks' }
            ]

        }
    }

    fixedList = () => {
        const { LinkList } = this.state;
        return <div className={style.right}>
            <ul>
                {LinkList.map((item,index) => {
                    return <Link to={item.to} key={index}><li>{index+1}、{item.text}</li></Link>
                })}
            </ul>
        </div>
    }

    render() {
       
        return (
            <div style={{ height: "100%" }}>
                <div className={style.left}>
                   <h1> {this.props.match.params.text}</h1>
                </div>
                {this.fixedList()}
            </div>

        )
    }
}
