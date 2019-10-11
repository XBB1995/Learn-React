import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component {
  constructor (props) {
    super(props)
    // 强制绑定this的指向子组件
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
    // console.log(this)
    this.props.deleteItem(this.props.index)
  }

  componentWillReceiveProps () {
    // 只有在非顶层 即接收到props数据的组件中才能触发
    // 组件第一次存在于虚拟dom中，函数时不会被执行
    // 如果已经存在于dom中，函数才会被执行
    console.log('child-componentWillReceiveProps')
  }

  shouldComponentUpdate (nextProps, nextState) {
    // content值不同时才返回true
    if (nextProps.content !== this.props.content) {
      return true
    } else return false
  }

  componentWillUnmount () {
    // 删除组件时触发的生命周期钩子
    console.log('child componentWillUnMount')
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
