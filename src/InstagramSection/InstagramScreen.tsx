import React from 'react'
// import axios from 'axios'



//   const fetchcus = async() =>{
//     try {
//         const response = await axios.get(`https://graph.instagram.com/1116239486?fields=id,username&access_token=----`)
//         const result = await response.data //[4].Background
//         console.log(result);
//         return result
//     } catch (error) {
//         console.log(error);
//     }
// }
export const InstagramScreen = () => {
    //  fetchcus();
  return (
    <>
       <div className='insta_containert'>
            <p className='title_a'>INSTAGRAM</p>
            <a href="https://www.instagram.com/puffeando/">
            <h1 className='title_b'> #ESPUFI </h1>
            </a>
            
        </div>
       
    <div className='insta_containerg'>
        <div className='insta_colleccion'>
            
                   <div className='insta_frame'>
                   <iframe src="https://www.instagram.com/p/CX9kGMRvptX/embed"></iframe>
                   </div> 
                   <div className='insta_frame'>
                   <iframe src="https://www.instagram.com/p/CXlnqSYrAHT/embed"></iframe>
                   </div> 
                   <div className='insta_frame'>
                   <iframe src="https://www.instagram.com/p/CWbECFdr-hm/embed"></iframe>
                   </div> 
                   <div className='insta_frame'>
                   <iframe  src="https://www.instagram.com/p/CWLSISeLo1y/embed"></iframe>
                   </div> 
                   <div className='insta_frame'>
                   <iframe src="https://www.instagram.com/p/CWOCQSQAZI7/embed"></iframe>
                   </div> 
                   <div className='insta_frame'>
                   <iframe   src="https://www.instagram.com/p/CWUBwBhAZGV/embed"></iframe>
                   </div> 

                  
             
        </div>
        </div>
        </>
  )
}
