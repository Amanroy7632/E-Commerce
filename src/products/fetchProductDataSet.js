export default  async function getProduct(){
   const result= await fetch('https://dumyjson.com/products')
   return result;
}

