import React, { children } from 'react'
import styled from 'styled-components'

const BannerCard = ({ children, user }) => {
  return (
    <div className="banner-container">
      <div className="banner-bg">
        <div className="banner-shade">
          {children}
        </div>
      </div>
    </div>

  )
}

export default BannerCard