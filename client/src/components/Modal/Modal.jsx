import React, { useEffect, useState, useRef } from 'react'
import Social from '../../screens/Social/Social'

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

      <button onClick={() => setIsOpen(!isOpen)} className="toggle-social">SHARE</button>
      
      {isOpen ? (
        <div className="modal">
          <Social />
        </div>
      ) : null}
      
    </div>
  )
}

export default Modal