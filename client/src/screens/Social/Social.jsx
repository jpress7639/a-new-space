import React, { Component } from 'react'

class Social extends Component {
  render() {
    
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

        <div className="social-media-container">

          {/* Need to change these link tags to buttons instead of links to site. I needed to use some href for the site to accept the icons */}
          <div className="social-media-buttons">
            
              <i className="fab fa-facebook"></i>
            
              <i className="fab fa-twitter"></i>
            
              <i className="fab fa-instagram"></i>
            
              <i className="fab fa-reddit"></i>
            
          </div>

          <p className="copy-link">COPY LINK</p>
          <input name="copy-link" />
        </div>
      </div>
    )
  }
}

export default Social
