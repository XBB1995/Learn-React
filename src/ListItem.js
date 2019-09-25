import React, { Component } from 'react'

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
    )
  }

  handleClick () {
    // 注意在接受函数时的this指向问题
    this.props.deleteItem(this.props.index)
  }
}

export default ListItem
