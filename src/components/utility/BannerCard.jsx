import React, { children } from 'react'
import styled from 'styled-components'

const BannerCard = ({ children, user }) => {
  return (
    <div className="auto-scroll">
      <div className="large-card-bg">
        <div className="large-shade">
          {children}
        </div>
      </div>
    </div>

  )
}

export default BannerCard