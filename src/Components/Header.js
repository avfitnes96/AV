import React from 'react'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='logo'><i class="ri-customer-service-fill"></i></div>
        <div className='right-div'>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button><i class="ri-login-box-line"></i></button>
        </div>
      </div>
    </>
  )
}

export default Header
