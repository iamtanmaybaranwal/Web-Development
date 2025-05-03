// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import React, { useRef } from 'react'

// const App = () => {

//   // const boxRef = useRef()

//   // useGSAP(() => {
//   //   gsap.from(boxRef.current, {
//   //     y : 300,
//   //     duration : 0.7,
//   //     delay : 0.5,
//   //     rotate :360,
//   //   })
//   // })

//   useGSAP(() => {
//     gsap.from(".box",{
//       rotate : 360,
//       y : 300,
//       opacity : 0,
//       delay : 0.5,
//       duration : 0.7,
//     })
//   }, {scope : ".kuch"}) /*scope ka use hum karte hain jab hume kisi specific ko animate karna ho toh*/

//   return (
//     <main>
//       <div className="container">
//         <div className="circle"></div>
//         <div  className="box"></div>   {/* {ref wale ke liye hum ref = {boxRef} ka use krte hain before className}  */}
//       </div>

//       <div className="kuch">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>
//     </main> 
//   )
// }

// export default App



import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {

  const randomX = gsap.utils.random(-500,500,100)
  const randomY = gsap.utils.random(-200,200,100)
  const rotateX = gsap.utils.random(-300,300,30)

  const [XValue, setXValue] = useState(0)
  const [YValue, setYValue] = useState(0)
  const [Roti, setRoti] = useState(0)

  const imgRef = useRef()

  useGSAP(()=>{
    gsap.to(imgRef.current, {
      x : XValue,
      y : YValue,
      duration : 0.6,
      // rotate : Roti,
    })
  }, [XValue, YValue, Roti])

  return (
    <main>
      {/* <button>Animate</button> */}
      {/* <div ref={boxRef} className="box"></div> */}
      <img  onClick={()=>{
        setXValue(randomX)
        setYValue(randomY)
        setRoti(rotateX)
      }} ref={imgRef} src="https://imgs.search.brave.com/m9QYu38gu5zB7ZMjcoauYr-1DoMOy7go3y3yYAGoDmA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvRmx5/LVBORy1IRC1RdWFs/aXR5LnBuZw" alt="" />
    </main>
  )
}

export default App
