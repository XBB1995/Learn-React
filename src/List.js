import React, { Component, Fragment } from 'react'
import './demo.css'
import ListItem from './ListItem'
import ListHeader from './ListHeader'

class List extends Component {
  // 在某一时刻自动执行的函数
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['a', 'b'],
      length: 0
    }
  }

  componentWillMount () {
    console.log('组件将要挂载到页面的时刻')
  }

  componentDidMount () {
    console.log('组件挂载完成的时刻')
  }

  render () {
    return (
      <Fragment>
        {/* jsx文件内部的注释 大括号包裹
            组件化的搭建思想
            子组件中的方法和属性通过props来获取
            注意传递方法中this指向的问题
            state类似Vue中的data来保存数据
            jsx的格式问题！！！
        */}
        <ListHeader
          inputChange={this.inputChange.bind(this)}
          addList={this.addList.bind(this)}
          value={this.state.inputValue}
        />
        <ul ref={(ul) => { this.ul = ul }}>
          <span>已设置的todo事件数量:{this.state.length}</span>
          {
            this.state.list.map((item, index) => {
              return (
                <ListItem
                  content={item}
                  key={`${index} ${item}`}
                  index={index}
                  deleteItem={this.deleteItem.bind(this)}
                />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  shouldComponentUpdate () {
    // 必须返回一个boolean值
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate () {

  }

  componentDidUpdate () {

  }

  // 尚未使用ref绑定前的写法
  inputChange (e) {
    // console.log(e.target.value)
    // 注意this指向 需要在事件绑定当中 用bind方法确定this
    this.setState({
      inputValue: e.target.value
    })
  }

  addList () {
    if (!this.state.inputValue) return
    // setState是异步方法 第二参数是回调函数
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      this.setState({
        length: this.ul.querySelectorAll('li').length
      })
    })
  }

  deleteItem (index) {
    // 禁止对this.state直接操作 容易引起性能问题
    const list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default List
