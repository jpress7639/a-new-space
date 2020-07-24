import React, { useEffect, useState, useRef } from 'react'
import Social from '../../screens/Social/Social'
import './Modal.css'

function Modal() {
  const outside = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = event => {
    if (outside.current.contains(event.target)) {
      return
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const getClick = document.addEventListener('click', handleClick)
    return () => {
      getClick()
    }
  }, [])

  return (
    <div className="modal-container" ref={outside}>
      <button className="social" onClick={() => setIsOpen(!isOpen)}>
        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="21.5" cy="21" rx="21.5" ry="21" fill="white" /><path fill-rule="evenodd" clip-rule="evenodd" d="M10 14L18.4 14L18.4 16.5L12.4 16.5L12.4 31.5L31.6 31.5L31.6 16.5L25.6 16.5L25.6 14L34 14L34 34L10 34L10 14ZM20.8 11.5L16 11.5L22 4L28 11.5L23.2 11.5L23.2 24L20.8 24L20.8 11.5Z" fill="#A7A7A7" /></svg>
      </button>
      
      {isOpen ? (
        <div className="modal">
          <Social />
        </div>
      ) : null}  
    </div>
  )
}

export default Modal