import { Title } from '@/components/title'
import React from 'react'
import ImgTest from '@/assets/imgs/test.jpeg'
import './index.scss'

function TransformPage() {
  return (
    <div className='transform-page'>
      <Title title='translate位移变换' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='translateX'>translateX</div>
        <div className='translateY'>translateY</div>
        <div className='translate'>translate</div>
      </div>
      <Title title='scale缩放' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='scaleX'>scaleX</div>
        <div className='scaleY'>scaleY</div>
        <div className='scale'>scale</div>
        <img className='scale-img' src={ImgTest} />
      </div>
      <Title title='rotate旋转变换' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='rotateX'>rotateX</div>
        <div className='rotateY'>rotateY</div>
        <div className='rotate'>rotate</div>
      </div>
      <Title title='skew倾斜' style={{ marginLeft: '100px' }} />
      <div className='container'>
        <div className='skewX'>skewX</div>
        <div className='skewY'>skewY</div>
        <div className='skew'>skew</div>
      </div>
    </div>
  )
}

export default TransformPage
