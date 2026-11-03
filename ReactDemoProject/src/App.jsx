import React from 'react'
import Nevbar from './components/Nevbar'
import Info from './components/Info'
import CardContainer from './components/CardContainer'

const App = () => {
  return (
    <div >
      <Nevbar />
      <div className=' flex flex-row '>
        <Info />
        <CardContainer />
      </div>

    </div>
  )
}

export default App