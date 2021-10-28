import React, { useState } from 'react'
import cls from 'classnames'
import './index.scss'
import { Title } from '@/components/title'

function ColorUiAnimation() {
  const [fade, setFade] = useState(false)
  const [scaleUp, setScaleUp] = useState(false)
  const [scaleDown, setScaleDown] = useState(false)
  const [slideTop, setSlideTop] = useState(false)
  const [slideBottom, setSlideBottom] = useState(false)
  const [slideLeft, setSlideLeft] = useState(false)
  const [slideRight, setSlideRight] = useState(false)
  const [shake, setShake] = useState(false)

  const [fadeReverse, setFadeReverse] = useState(false)
  const [scaleUpReverse, setScaleUpReverse] = useState(false)
  const [scaleDownReverse, setScaleDownReverse] = useState(false)
  const [slideTopReverse, setSlideTopReverse] = useState(false)
  const [slideBottomReverse, setSlideBottomReverse] = useState(false)
  const [slideLeftReverse, setSlideLeftReverse] = useState(false)
  const [slideRightReverse, setSlideRightReverse] = useState(false)
  const [shakeReverse, setShakeReverse] = useState(false)

  const renderBlock = (
    animationType: string,
    animationName: string,
    startAnimation: boolean,
    setStartAnimation: {
      (value: React.SetStateAction<boolean>): void
      (value: React.SetStateAction<boolean>): void
      (arg0: boolean): void
    },
    isReverse = false,
  ) => {
    return (
      <div
        className={cls(animationType, {
          [animationName]: startAnimation,
          'animation-reverse': isReverse,
        })}
        onClick={() => {
          setStartAnimation(true)
          setTimeout(() => setStartAnimation(false), 500)
        }}
      >
        {animationType}
      </div>
    )
  }

  return (
    <div className='color-ui-animation'>
      <Title title='正向动画' style={{ marginLeft: '100px' }} />
      <div className='container'>
        {renderBlock('fade', 'animation-fade', fade, setFade)}
        {renderBlock('scale-up', 'animation-scale-up', scaleUp, setScaleUp)}
        {renderBlock('scale-down', 'animation-scale-down', scaleDown, setScaleDown)}
        {renderBlock('slide-top', 'animation-slide-top', slideTop, setSlideTop)}
        {renderBlock('slide-bottom', 'animation-slide-bottom', slideBottom, setSlideBottom)}
        {renderBlock('slide-left', 'animation-slide-left', slideLeft, setSlideLeft)}
        {renderBlock('slide-right', 'animation-slide-right', slideRight, setSlideRight)}
        {renderBlock('shake', 'animation-shake', shake, setShake)}
      </div>
      <Title title='反向动画' style={{ marginLeft: '100px' }} />
      <div className='container'>
        {renderBlock('fade', 'animation-fade', fadeReverse, setFadeReverse, true)}
        {renderBlock('scale-up', 'animation-scale-up', scaleUpReverse, setScaleUpReverse, true)}
        {renderBlock(
          'scale-down',
          'animation-scale-down',
          scaleDownReverse,
          setScaleDownReverse,
          true,
        )}
        {renderBlock('slide-top', 'animation-slide-top', slideTopReverse, setSlideTopReverse, true)}
        {renderBlock(
          'slide-bottom',
          'animation-slide-bottom',
          slideBottomReverse,
          setSlideBottomReverse,
          true,
        )}
        {renderBlock(
          'slide-left',
          'animation-slide-left',
          slideLeftReverse,
          setSlideLeftReverse,
          true,
        )}
        {renderBlock(
          'slide-right',
          'animation-slide-right',
          slideRightReverse,
          setSlideRightReverse,
          true,
        )}
        {renderBlock('shake', 'animation-shake', shakeReverse, setShakeReverse, true)}
      </div>
    </div>
  )
}

export default ColorUiAnimation
