import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import Himage1 from "./images/first.png";
import Himage2 from "./images/second.png";
import Himage3 from "./images/banner-3.jpg";
import Himage4 from "./images/fourth.png";
import Himage5 from "./images/banner-1.jpg";
import Himage6 from "./images/banner-2.jpg";
import Testimonial from "../testimonial/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./slide/Slide";
// import  { CartState } from "../../context/Context";
// import useCart, { cartContextProvider } from '../../context/cartContext'
import SingleProduct from "../product/SingleProduct";
import { useSelector } from "react-redux";
// import { getData  } from "../../products/productDataSet";
// import getProduct from "../../products/productDataSet";
import SearchBox from "../search/SearchBox";

// import ProductDetail from "../productdetail/ProductDetail";
async function getProduct(){
  await fetch('https://dumyjson.com/products').then(
      (res)=>{
          const res_data=res.json();
          console.log(res_data)
          // setData(res_data)
      }
  ).catch((err)=>{
      console.log("Something went wrong",err);
  })
  console.log("Hello Aman");
}
function Home() {
  
  const items=useSelector(state=>state.cartItem);
  const products=items.products;
  // const products = [
  //   {
  //     pname: "Redmi Note 13 Pro 5G (8GB RAM, 128GB, Coral Purple)",
  //     id: 1,
  //     price: "25999",
  //     ref: "12351",
  //     homeDelevry: true,
  //     imageSrc:
  //       "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShvoWX_D9-DhgL-EdHxlG6Vqy8Ri7sVzZ3zkKkmRzIEt_sQ-BoKLiWyHgbJ9bK1qM4iMci1RKjHoMjFu5JaardbViq7OL-r81sFQ0sEv_CtyVThqtofd12",
  //   },
  //   {
  //     pname: "Samsung Galaxy S24 Ultra - 512 GB - Titanium Gray",
  //     id: 2,
  //     price: "129999",
  //     ref: "12352",
  //     homeDelevry: false,
  //     imageSrc:
  //       "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsJh85eOZrwIVd-MFioR669ekIWZ99Oz1PQpEedGx_vxAzGFJNaWpuB7lRVxOiiJAVtfFCdzyt3kU1E6aR1xtWcWZVcOzsGqsAgsKz0oh-lnjQBsIfxpSS",
  //   },
  //   {
  //     pname: "Apple Iphone 12 128 GB Black",
  //     id: 3,
  //     price: "54900",
  //     ref: "12353",
  //     homeDelevry: true,
  //     imageSrc:
  //       "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuTLofES66LaKx7QXtSvMO7dB1NnCSIjU013y3UawpA6nOP8nmcioWqdqHCn4cRhxSJOrRi4v5DF3XpEcBvgGdrvubu8rdJaXyUrXHPBRVuR0FTUt2mv9nnA",
  //   },
  //   {
  //     pname: "Pens",
  //     id: 4,
  //     price: "2906.52",
  //     ref: "12354",
  //     homeDelevry: true,
  //     imageSrc:
  //       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqBaDz9BuI-TPR-Pq2T7j2oXoa1y0LHthEARYKHEWaFsxxL50F5oG0uaEifQRKBhTO7JYjVaMRtRvOq8xu3WDrhg1GxDLaimLntub8i_MJ1wRglIBNHadPcg",
  //   },
  // ];
  const [search,setSearch] = useState("");
  const [product, setProduct] = useState(products);
  // const itemName=product.filter()
  const [filteredItemName,setFilteredItemName] = useState([]);
  useEffect(()=>{
    const filterData=(name)=>{
    }
    const filteredData=products.filter((item)=>(item.title.toLowerCase().includes(search.toLowerCase())))
    let data=[]
    setProduct(filteredData)
    filteredData.forEach((item)=>{
      if(item.title){
        data.push(item.title)
      }
      // console.log(item.title.toLowerCase())
    })
    setFilteredItemName(data)
    // console.log(product);
    // console.log(filteredItemName);
  },[search])
  
  // const [addProduct, setAddProduct] = useState({});
  // const {products} = useCart();
  let setting = {
    
    infinite: true,
    autoplay:true,
    pauseOnHover: false, 
    speed: 1000,
    slideToShow: 2,
    initialSlide: 0,
    slidesToScroll: 1,
    // dots: true,
  };
  // const addToCart = (product) => {
  //   setProduct((prevProduct) => {
  //     return [{ id: Date.now(), ...product }, ...prevProduct];
  //   });
  // };

  // const removeToCart = (id) => {
  //   setProduct((prev) => prev.filter((prevProduct) => prevProduct.id !== id));
  // };
  // const addItem = (e) => {
  //   e.preventDefault();
  //   if (!addProduct) {
  //     console.log("Empty item");
  //     return;
  //   }
  //   addToCart(product);
  //   console.log(product);
  // };
  const slideData=[
    {
      id:1,
      title:"Women's latest fashion sale",
      price:349,
      imgSrc:Himage6
    },
    {
      id:2,
      title:"Treanding Outfits for women's",
      price:789,
      imgSrc:Himage5
    },
    {
      id:3,
      title:"New Sale is Live Now",
      price:199,
      imgSrc:Himage3
    },
    {
      id:4,
      title:"Men's latest fashion sale",
      price:139,
      imgSrc:Himage4
    }
  ]
  return (
    <div className="p-items w-full  overflow-y-auto overflow-x-hidden dark:bg-black dark:text-white">
      <SearchBox search={search} setSearch={setSearch} filteredItemName={filteredItemName}/>
    
      <div className=" lg:w-[95%] m-auto md:w-full">
      <Slider {...setting}>
        {
          slideData.map((data)=>(
            <Slide key={data.id} data={data}/>
          ))
        }
        {/* <button id='left' className=' relative'>{`<`}</button> */}
      </Slider>
      </div>
      <div className="text-for-write flex justify-center items-center  h-1/3 pt-5">
        <div className="mt-4 w-[95%] max-sm:w-full">
          {/* <h2>Products</h2> */}
          <ul className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
      {/* <ProductDetail /> */}
      <Testimonial/> 
    </div>
  );
}

export default Home;
