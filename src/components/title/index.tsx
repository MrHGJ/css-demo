import React from 'react'
import './index.scss'

interface IProps {
  title: string
  style?: React.CSSProperties
  className?: string
}
export const Title = (props: IProps) => {
  const { title, style, className } = props
  return (
    <div className={`common-title ${className}`} style={style}>
      <div className='common-title__block'></div>
      <div className='common-title__content'>{title}</div>
    </div>
  )
}
