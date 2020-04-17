import React, { Component } from 'react'
import nativeData from '../../asset/schema'
import { Card } from 'antd';
import ShortcutButton from "./shortcuts-panel"
// const { Meta } = Card;
export default class LeftSider extends Component {

    onClickShortcut (item) {
        console.log(item)
        if (this.props.handleClickShortcut) {
          this.props.handleClickShortcut(item)
    }
}
    render() {
    const pluginsList = [
  {
    title: '图片',
    icon: 'photo',
    url: nativeData.images.img,
    visible: true,
 
    
  },
  {
    title: '文字',
    icon: 'text-width',
    url: nativeData.images.text,
    visible: true
  },
  {
    title: '轮播图',
    icon: 'photo',
    url: nativeData.images.slider,
    visible: true
  },

  {
    title: '视频',
    icon: 'file-video-o',
    url: nativeData.images.video,
    visible: true
  }
]    
        return (
            <div style={{height:700}}>
    <Card title="组件列表" bordered={false} style={{ width:200}}>

        <ul>
      {pluginsList.filter(plugin => plugin.visible).map((plugin,index)=>{
          return  <ShortcutButton  clickFn={this.onClickShortcut.bind(this, plugin)}  shortplugin={plugin} key={index}/>
      })

      }
      </ul>
    </Card>
            </div>
        )
    }
}
