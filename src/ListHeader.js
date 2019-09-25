import React, { Component } from 'react'

class ItemHeader extends Component {
  render () {
    return (
      <div>
        {/* 使用 htmlFor 避免和js中的for冲突 */}
        <label htmlFor="input"></label>
        <input
          id="input"
          className="input"
          value={this.props.value}
          onChange={this.props.inputChange}
        / >
        <button onClick={this.props.addList}>add service</button>
      </div>
    )
  }
}

export default ItemHeader
