import { Title } from '@/components/title'
import React from 'react'
import './index.scss'

function TransitionPage() {
  return (
    <div className='transition-page'>
      <Title title='transition有和无的区别' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='block1'></div>
        <div className='block2'></div>
        <div className='block3'></div>
        <div className='block4'></div>
        <div className='block5'></div>
        <div className='block6'></div>
      </div>
      <Title title='transition复合用法' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='block7'></div>
        <div className='block8'></div>
      </div>
      <Title title='提示框用法' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='dialog-button'>
          Hover Me
          <div className='dialog-content'>这是一段提示文本</div>
        </div>
      </div>
    </div>
  )
}

export default TransitionPage
