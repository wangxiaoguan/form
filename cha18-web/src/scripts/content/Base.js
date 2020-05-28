import React, { Component } from "react";
import { getToken } from '../utils/ProjectUtils';
import "./Base.less";
export default class Base extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad:true,
      titleList: [
        { key: 1, value: "Tab-1",  Path: "/InformationSubmit",},
        { key: 2, value: "Tab-2",  Path: "/InformationExamine" },
        { key: 3, value: "Tab-3",  Path: "/InformationCollect" },
        { key: 4, value: "Tab-4",  Path: "/InvestSubmit",},
        { key: 5, value: "Tab-5",  Path: "/InvestExamine" },
        { key: 6, value: "Tab-6",  Path: "/InvestCollect" },
        { key: 7, value: "Tab-7",  Path: "/YearPlanSubmit" },
        { key: 8, value: "Tab-8",  Path: "/YearPlanExamine" },
        { key: 9, value: "Tab-9",  Path: "/YearPlanCollect"},
      ],
    };
  }
  componentDidMount(){
    
  }




  TabPane = (data) => {
    location.hash = data.Path;
  };

  render() {
    const { titleList } = this.state;


    if(!getToken()){
      location.hash = '/'
    }

    return (
      <div id="web">
        <div className="top">　</div>
        <div className="top-content">
          <div>
            {
              titleList.map((item) => {
                const isSelect = location.hash.indexOf(item.Path) > 0;
                return (
                  <div className={`top-content-tab ${isSelect ? "top-content-tab-active" : "" }`} key={item.key} onClick={() => this.TabPane(item)}>
                    <span className='top-content-tab-title'>{item.value}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="mainContent">{this.props.children}</div>
        </div>
        <div className='projectFooter'>技术支持:XXXXXX 联系电话:XXXXXX</div>
      </div>
    );
  }
}
