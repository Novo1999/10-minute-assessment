import React from 'react'
import styles from './PriceTag.module.css'

interface PriceTagProps {
  price: string | number
  currency?: string
  className?: string
}

const PriceTag: React.FC<PriceTagProps> = ({ price, currency = '৳', className = '' }) => {
  return (
    <span className={`${styles.cardPrice} ${className}`}>
      {currency}
      {price}৳ ছাড়
    </span>
  )
}

export default PriceTag
