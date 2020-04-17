import React, { Component } from 'react'
import RenderPreviewCanvas from "./PreviewCanvas"
import RenderEditCanvas from "./EditCanvas"
import "./index.css"
import { Tabs,Radio } from 'antd';
import { Row, Col } from 'antd';
const { TabPane } = Tabs;
export default class ContentCav  extends Component {
    constructor(props){
        super(props)
        this.state={
            size: 'small',
            isPreviewMode: false
        }
    }
    onChange = e => {
        // console.log(e.target.value)
        this.setState({ 
            size: e.target.value,
            isPreviewMode: !this.state.isPreviewMode
        });
      };
    render(){
        const { size,isPreviewMode } = this.state;
        return (
            <div className="content">
               
        <Radio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <Radio.Button value="small"> 编辑区域 </Radio.Button>     
          <Radio.Button value="default"> 预览区域</Radio.Button>
        </Radio.Group>
        <Row>
      <Col span={24} >
          <div className="canvas-wrapper">
              {
                isPreviewMode? <RenderPreviewCanvas />
                : <RenderEditCanvas />
              }
          </div>
      </Col>
    </Row>
            </div>
        )
    }
}