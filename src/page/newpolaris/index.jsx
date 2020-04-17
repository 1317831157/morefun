import React, { Component } from 'react'
import HeaderBar from "../header/index"
import  LeftSider  from "../leftSider/index"
import  RightSider from "../rightSider/index"
import  ContentCav  from "../content/index"
import { connect } from 'react-redux'
import actionCreator from "./actionCreator"
import { Layout } from 'antd'
import "./index.css"

const { Header,Sider, Content } = Layout;

 class Newpolaris extends Component {

    //点击时右侧增加相应元素
    clone ({title}) {
        console.log(title)
        this.elementManager({
          type: 'add',
          value: { title }
        })
      }

    render() {
        return (
            <div>
    <Layout>
      <Header>
          <HeaderBar />
      </Header>
      <Layout>
        <Sider>
            <LeftSider  handleClickShortcut={this.clone}/>
        </Sider>
            <Content>
                <ContentCav />
            </Content>
        <Sider>
            <RightSider />
        </Sider>
      </Layout>
     
    </Layout> 
                
                             
            </div>
        )
    }
}
var mapState = (state)=>state;
export default  connect(mapState,actionCreator)(Newpolaris)