import React from 'react'
export const NavBar = () => {
  return (
  <div className="bar">
  <div className="bar__logo m-30">
      <h2>Pufi</h2>
  </div>
  <div className="bar__navigators">
      <div>
      <i className="fas fa-couch"></i>
          <p className='pnavSize'>PUFI PUFF</p>
      </div>
      <div>
      <i className="fas fa-umbrella-beach"></i>
                    <p className='pnavSize'>PUFI RAIN</p>
                   
                </div>
      <div> 
         <i className="fas fa-shopping-bag"></i>
          <p className='pnavSize'>PUFI CART</p>
      </div>
      <div>
      <i className="fas fa-cheese"></i>
          <p className='pnavSize'>PUFI NAP</p>
      </div>
  </div>
  <div className="bar__account navBar_p30">
      <div>
          <p >MI CUENTA <span > <i className="fas fa-angle-down"></i></span></p> 
          
      </div>
      |
      <div>
          <p>MI COMPRA</p>
      </div>
  </div>
</div>
)
}
