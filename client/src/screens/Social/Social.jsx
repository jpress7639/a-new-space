import React, { Component } from 'react'

class Social extends Component {
  render() {
    
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>

        <div className="social-media-container">

          {/* Button to close the screen */}
          <h3>x</h3>

          <h3>SHARE</h3>

          {/* Need to change these link tags to buttons instead of links to site. I needed to use some href for the site to accept the icons */}
          <div className="social-media-buttons">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.reddit.com/">
              <i className="fab fa-reddit"></i>
            </a>
          </div>

          <h3>COPY LINK</h3>
          <input name="copy-link" />
        </div>
      </div>
    )
  }
}

export default Social
