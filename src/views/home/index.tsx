import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

function Home() {
  const history = useHistory()
  return (
    <div className='home'>
      <div
        className='menu menu__color-ui'
        onClick={() => {
          history.push('color-ui-animation')
        }}
      >
        ColorUI微动画
      </div>
    </div>
  )
}

export default Home
