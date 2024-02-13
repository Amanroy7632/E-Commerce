import {React,useEffect,useState} from 'react'
import Slider from 'react-slick'
import Himage1 from './HomeImage/first.png' 
import Himage2 from './HomeImage/second.png'
import Himage3 from './HomeImage/third.png'
import Himage4 from './HomeImage/fourth.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home() {
  let [start,setStart]=useState(0);
  let setting={
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:2,
    initialSlide:0,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
 




  return (
    <div className='w-full h-screen'>
      <Slider {...setting}>
          <div><img src={Himage2} className=' ' alt="Pic" /></div>
          <div> <img src={Himage1} className=' ' alt="" /></div>
          <div> <img src={Himage3} className=' ' alt="" /></div>
          <div><img src={Himage4} className=' ' alt="" /></div>
          <div> <img src="https://img1.junaroad.com//assets/images/mobileNotif/img-1692595725646.jpg?crsl_pos=5" alt="" /></div>
        {/* <button id='left' className=' relative'>{`<`}</button> */}
        
        </Slider>
      <div className="text-for-write w-full h-1/3 pt-5">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias maiores nobis illum, veritatis corporis commodi fugiat eius. Quaerat qui iure molestias quae perferendis, maxime quas. Culpa a dolorem reprehenderit maxime?
         Aspernatur magnam recusandae itaque quisquam delectus, eius quibusdam quos labore et dolores nulla blanditiis earum tempora, at commodi hic nesciunt voluptas natus totam reprehenderit exercitationem facilis! Voluptate deleniti libero possimus.
      </div>
    </div>
  )
}

export default Home
