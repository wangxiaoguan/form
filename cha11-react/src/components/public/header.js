import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 1
		};
	}

	componentDidMount() {
		this.getNewCurrent(this.props);
	}

	getNewCurrent=(nextProps)=>{	
		let num=1;
		if(nextProps.location.pathname==='/Home'){
			num=1;
		}else if(nextProps.location.pathname==='/doc/core'||nextProps.match.path==='/doc/:text'||nextProps.history.location.pathname==="/doc/core"||nextProps.match.url==="/doc/core"||nextProps.location.pathname.indexOf('/doc/')>-1){
			num=2;
		}else if(nextProps.location.pathname==='/tuto'||nextProps.match.url==="/tuto"){
			num=3;
		}else if(nextProps.location.pathname==='/blog'){
			num=4;
		}else if(nextProps.location.pathname==='/comm'){
			num=5;
		}else if(nextProps.location.pathname==='/hooks'){
			num=6;
		}
		this.setState({current:num});
	}

	NavButtonList = () => {
		const { current } = this.state;
		return <div className={styles.btnList}>
			<Link onClick={() => { this.setState({ current: 1 }) }} to="/Home" className={current === 1 ? styles.active : ''}>React</Link>
			<Link onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? styles.active : ''} to="/doc/core">文档</Link>
			<Link onClick={() => { this.setState({ current: 3 }) }} to="/tuto" className={current === 3 ? styles.active : ''}>教程</Link>
			<Link onClick={() => { this.setState({ current: 4 }) }} className={current === 4 ? styles.active : ''} to="/blog" style={{marginRight:'0'}}>博客</Link>
			<Link onClick={() => { this.setState({ current: 5 }) }} className={current === 5 ? styles.active : ''} to="/comm" style={{marginRight:'0'}}>社区</Link>
			<Link onClick={() => { this.setState({ current: 6 }) }} className={current === 6 ? styles.active : ''} to="/hooks" style={{marginRight:'0'}}>Hooks</Link>
		</div>
	}
	render() {
		return (
			<div className={styles.header}>
				{this.NavButtonList()}
			</div>
		);
	}
}
export default Header;