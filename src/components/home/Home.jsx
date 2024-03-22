import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import Himage1 from "./HomeImage/first.png";
import Himage2 from "./HomeImage/second.png";
import Himage3 from "./HomeImage/third.png";
import Himage4 from "./HomeImage/fourth.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { CartState } from "../../context/Context";
// import useCart, { cartContextProvider } from '../../context/cartContext'
import SingleProduct from "../product/SingleProduct";
import { useDispatch, useSelector } from "react-redux";
// import { getData  } from "../../products/productDataSet";
// import getProduct from "../../products/productDataSet";
import { useLoaderData } from "react-router-dom";
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
  //  const res=useLoaderData();
  //  console.log(res);
  // const data=getProduct();
  const items=useSelector(state=>state.cartItem);
  const dispatch=useDispatch()
  // console.log(items.products);
  const products=items.products;
  const { state } = CartState();
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
  const [product, setProduct] = useState([]);
  const [addProduct, setAddProduct] = useState({});
  // const {products} = useCart();
  let setting = {
    
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow: 2,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const addToCart = (product) => {
    setProduct((prevProduct) => {
      return [{ id: Date.now(), ...product }, ...prevProduct];
    });
  };

  const removeToCart = (id) => {
    setProduct((prev) => prev.filter((prevProduct) => prevProduct.id !== id));
  };
  const addItem = (e) => {
    e.preventDefault();
    if (!addProduct) {
      console.log("Empty item");
      return;
    }
    addToCart(product);
    console.log(product);
  };
 
  return (
    <div className="p-items w-full  overflow-y-auto overflow-x-hidden dark:bg-black dark:text-white">
      <Slider {...setting}>
        <div className="">
          <img src={Himage2} className=" " alt="Pic" />
        </div>
        <div className="">
          {" "}
          <img src={Himage1} className=" " alt="" />
        </div>
        <div className="">
          {" "}
          <img src={Himage3} className=" " alt="" />
        </div>
        <div className="">
          <img src={Himage4} className=" " alt="" />
        </div>
        <div className="">
          {" "}
          <img
            src="https://img1.junaroad.com//assets/images/mobileNotif/img-1692595725646.jpg?crsl_pos=5"
            alt=""
          />
        </div>
        {/* <button id='left' className=' relative'>{`<`}</button> */}
      </Slider>
      <div className="text-for-write w-full h-1/3 pt-5">
        <div className="mt-4">
          {/* <h2>Products</h2> */}
          <ul className="grid grid-cols-1 max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
          </ul>
        </div>
      </div>
      {/* <ProductDetail /> */}
    </div>
  );
}

export default Home;
