import React, { children } from 'react'

const BannerCard = ({ children , bgImage}) => {
  const bgCover = `url(${bgImage})`
  return (
    <div className="banner-container">
    <div className="banner-bg" style={{backgroundImage: bgCover}}>
        <div className="banner-shade">
          {children}
        </div>
      </div>
    </div>

  )
}

export default BannerCard