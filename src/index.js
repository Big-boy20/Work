import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './components/Heder.js'

const App = () => {
  return (
    
    <div>
      <Dashboard/>
     <p>Hello world!</p>
      <p>Hello world(by Dimapppp)!</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

