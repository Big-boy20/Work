import React from 'react'
import ReactDOM from 'react-dom'

import Login from './components/login/login.js'


const App = () => {
  return (
    
    <div>
      <Login/>
    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

