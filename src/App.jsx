import { useState } from 'react'
import { Typography, Divider } from 'antd'
import Filter from './components/Filters'

function App() {

  const {Title} = Typography 

  return (
    <>
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{textAlign:'center'}}>Task manager with Redux</Title>
      <Filter/>
      <Divider/>

    </div>
    </>
  )
}

export default App
