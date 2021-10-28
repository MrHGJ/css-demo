import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.scss'

function Home() {
  const history = useHistory()
  const renderMenu = (param: { title: string; path: string; backColor: string }) => {
    const { title, path, backColor } = param
    return (
      <div
        className='menu'
        style={{ background: backColor }}
        onClick={() => {
          history.push(path)
        }}
      >
        {title}
      </div>
    )
  }
  return (
    <div className='home'>
      <div className='home__block'>
        {renderMenu({ title: 'ColorUI微动画', path: 'color-ui-animation', backColor: '#158bb8' })}
        {renderMenu({ title: 'transform', path: 'transform-page', backColor: '#b2bbbe' })}
      </div>
    </div>
  )
}

export default Home
