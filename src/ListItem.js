import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <li onClick={this.handleClick}>
        {this.props.name} 提供 {this.props.content}
      </li>
    )
  }

  handleClick () {
    // 注意在接受函数时的this指向问题
    this.props.deleteItem(this.props.index)
  }
}

// 参数校验
ListItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  // 必须有值
  name: PropTypes.string.isRequired,
  // 方法对应的类型时 PropTypes.func
  deleteItem: PropTypes.func
}
// 默认值
ListItem.defaultProps = {
  name: 'Someone'
}

export default ListItem
