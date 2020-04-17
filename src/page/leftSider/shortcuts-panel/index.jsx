import React, { Component } from 'react'

export default class ShortcutButton extends Component {
    render() {
        const {shortplugin}=this.props
        const onClick = this.props.clickFn || function () {}
        return (
            <div>
            <li style={{width:60,height:60,backgroundColor:"gray",listStyleType:"none",textAlign:"center"}}   onClick={onClick}>
              <div style={{}}><img src={shortplugin.url} alt="" /></div>
              <span style={{display:"block"}}>{shortplugin.title}</span>
          </li>
            </div>
        )
    }
}
