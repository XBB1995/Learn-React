import React, { Component, Fragment } from 'react'
import './demo.css'
import ListItem from './ListItem'
import ListHeader from './ListHeader'

class Demo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render () {
    return (
      <Fragment>
        {/* jsx文件内部的注释 */}
        <ListHeader
          inputChange={this.inputChange.bind(this)}
          addList={this.addList.bind(this)}
          value={this.state.inputValue}
        />
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <ListItem
                  content={item}
                  key={index + item}
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

  inputChange (e) {
    // console.log(e.target.value)
    // 注意this指向 需要在事件绑定当中 用bind方法确定this
    this.setState({
      inputValue: e.target.value
    })
  }

  addList () {
    if (!this.state.inputValue) return
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
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

export default Demo
