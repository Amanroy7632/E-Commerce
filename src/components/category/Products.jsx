import React from 'react'

function Products({data}) {
  return data && data.products ?( data.products.map((item)=>(<p>Hello Vro</p>))
  ):console.log();("Kuch to bhej bhai");
}
// function Products() {
//     // alert("Welcome to Product section")
//       return (
//         <h1>Hello I am Aman</h1>
//       )
// }

export default Products
