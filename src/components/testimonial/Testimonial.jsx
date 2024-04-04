import img from "./../home/images/banner-1.jpg"
import Qimg from "./../home/images/q.jpg"
import testinomialPic from "./../home/images/about_img.png"
function Testimonial() {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" container py-16 w-[95%] grid-cols-2 place-items-center">
        <h1 className=" font-medium text-2xl pb-4">Testimonials</h1>
        <div className=" grid lg:grid-cols-[300px,1fr] gap-4">
            <div className=" border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                <div className=" text-center flex flex-col items-center p-5 max-sm:p-2">
                    <img src={testinomialPic} alt="profile" className=" rounded-full inline-block" width={80} height={80} />
                    <h1 className=" text-2xl font-bold text-gray-500 dark:text-white">Aman Roy</h1>
                    <p className=" font-semibold">CEO & Founder of SwiftBuy</p>
                    {/* quote img  */}
                    <img src={Qimg} alt="quotes" width={30} height={30} className=" bg-blend-darken" />
                    <p className=" text-sm">Hello! I'm Aman a CEO & founder of SwiftBuy.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum ab </p>
                </div>
            </div>
            <div className={` bg-cover h-[500px] rounded-2xl grid place-items-center`} style={{backgroundImage:`url(${img})`}}>
            <div className=" bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] rounded-xl py-8 sm:px-8 px-2 flex justify-center flex-col items-center" >
                <div className=" border w-fit px-4 py-2 bg-black text-white rounded-lg cursor-pointer">25% DISCOUNT</div>
                <h2 className=" text-gray-500 font-semibold">Summer Collection</h2>
                <p className=" text-gray-500">Starting @ $20 <span>shop now</span></p>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
