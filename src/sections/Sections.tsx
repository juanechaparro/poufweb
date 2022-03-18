import React from 'react'


export const Sections = () => {
    const ubmbrelasImg = "/assets/umbrelas.jpg";
    const singleUmbrela = "/assets/singleumbrela.PNG";
    const puffImg = "/assets/beachpf2.jpg";
    const singlePuff = "/assets/singlepuff.PNG";
    const cartsimgs = "/assets/market-bags.jpeg";
    const singleCart = "/assets/Cartimg.PNG";
    const napsingle =  "/assets/naps.PNG";
    const napelton = "/assets/singlenapelton.jpg"
    
  return (
      <div className='section-main'>

     
    <div className='section_container'>
         <div className='section_container-child  '>
                            <div className="section_container__img2">
                                    <button className='button-container2'>SHOP</button>
                                    <img src={ubmbrelasImg} alt="umbrelas" />
                                    
                            </div>
                        <div className='section_container__card  section_triangle-l section_background'>
                                <img src={singleUmbrela} alt="single umbrela img" />
                                <h5>Pufi Rain</h5>
                                <div className='section_line'></div>
                                
                                <p>Descripcion del producto. Este es <br /> <span> un texto simulado</span></p>
                                <br />
                                <p> {"> "} VER MAS </p>
                            </div>
                        </div>
    
        <div className='section_container-child   reversed '>
                            <div className="section_container__img">
                                    <img src={puffImg} alt="Puff" />
                            </div>
                            <div className='section_container__card  section_triangle-r'>
                                <img src={singlePuff} alt="single puff img" />
                                <h5>Pufi PUFF</h5>
                                <div className='section_line'></div>
                                <p>Descripcion del producto. Este es <br />un texto simulado</p>
                                <br />
                                <p> {"> "} VER MAS </p>
                            </div>


        </div>

        <div className='section_container-child  '>
                            <div className="section_container__img">
                                    <img src={cartsimgs} alt="carts" />
                            </div>
                        <div className='section_container__card  section_triangle-l'>
                                <img src={singleCart} alt="single cart img" />
                                <h5>Pufi CART</h5>
                                <div className='section_line'></div>
                                <p>Descripcion del producto. Este es <br />un texto simulado</p>
                                <br />
                                <p> {"> "} VER MAS </p>
                            </div>
                        </div>
    
                        <div className='section_container-child   reversed '>
                            <div className="section_container__img">
                                    <img src={napelton} alt="nap" />
                            </div>
                            <div className='section_container__card  section_triangle-r'>
                                <img src={napsingle} alt="single pufi nap" />
                                <h5>Pufi NAP</h5>
                                <div className='section_line'></div> 
                                <p>Descripcion del producto. Este es <br /> un texto simulado</p>
                                <br />
                                <p> {"> "} VER MAS </p>
                            </div>


                            
         </div>

                        

                        
    
    </div>
    </div>
  )
}
