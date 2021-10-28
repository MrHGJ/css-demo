import { Title } from '@/components/title'
import React from 'react'
import ImgBoy from '@/assets/imgs/img-boy.jpeg'
import ImgFaceFront from '@/assets/imgs/img-face-front.jpg'
import ImgFaceBack from '@/assets/imgs/img-face-back.jpg'
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
        <img className='scale-img' src={ImgBoy} />
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
      <Title title='transform-origin: 移动变换中心点' style={{ marginLeft: '100px' }} />
      <div style={{ marginLeft: '100px', fontSize: '14px', color: 'lightgray' }}>
        说明：改变变换中心点，不影响translate变换，影响其他变换
      </div>
      <div className='container'>
        <div className='transform-origin-0'>50%, 50%</div>
        <div className='transform-origin-1'>0, 0</div>
        <div className='transform-origin-2'>50%, 100%</div>
      </div>
      <Title title='Demo: 卡片翻转' style={{ marginLeft: '100px' }} />
      <div className='card-container'>
        <div className='card'>
          <img className='card__img card__img__front' src={ImgFaceFront} />
          <img className='card__img card__img__back' src={ImgFaceBack} />
        </div>
      </div>
    </div>
  )
}

export default TransformPage
