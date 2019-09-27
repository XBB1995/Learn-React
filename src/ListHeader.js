import React, { Component } from 'react'

class ItemHeader extends Component {
  constructor (props) {
    super(props)
    // 接受传递的参数
    this.state = {
      // 这样另存数据后 数据失去了响应
      //   value: this.props.value
    }
  }

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
