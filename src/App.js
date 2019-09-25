import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <ul className="my-list">
        <li>XBB</li>
        <li>Ayou</li>
        <li>{true ? 'XBB' : 'Ayou'} is SGJ</li>
      </ul>
    )
    // var child1 = React.createElement('li', null, 'XBB')
    // var root = React.createElement('ul', { className: 'myList' }, child1)
  }
}

export default App
