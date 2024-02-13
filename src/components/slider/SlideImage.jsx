import React from "react";
import Slider from "react-slick";

export default function SlideImage() {
  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="bg-black w-full border h-full">
        <h3 className="text-red">1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea iste maiores perferendis, mollitia labore magnam quam ipsam sed illo, nesciunt non blanditiis minima accusantium amet facere officia, deleniti assumenda.
        Inventore, voluptatem facilis quos sed tenetur, beatae illo quam magnam similique labore iure porro laborum nulla fuga. Maiores modi deserunt amet necessitatibus quam autem nostrum laboriosam explicabo, aspernatur ut doloremque!</h3>
      </div>
      <div>
        <h3>2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea iste maiores perferendis, mollitia labore magnam quam ipsam sed illo, nesciunt non blanditiis minima accusantium amet facere officia, deleniti assumenda.
        Inventore, voluptatem facilis quos sed tenetur, beatae illo quam magnam similique labore iure porro laborum nulla fuga. Maiores modi deserunt amet necessitatibus quam autem nostrum laboriosam explicabo, aspernatur ut doloremque!</h3>
      </div>
      <div>
        <h3>3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea iste maiores perferendis, mollitia labore magnam quam ipsam sed illo, nesciunt non blanditiis minima accusantium amet facere officia, deleniti assumenda.
        Inventore, voluptatem facilis quos sed tenetur, beatae illo quam magnam similique labore iure porro laborum nulla fuga. Maiores modi deserunt amet necessitatibus quam autem nostrum laboriosam explicabo, aspernatur ut doloremque!</h3>
      </div>
      <div>
        <h3>4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea iste maiores perferendis, mollitia labore magnam quam ipsam sed illo, nesciunt non blanditiis minima accusantium amet facere officia, deleniti assumenda.
        Inventore, voluptatem facilis quos sed tenetur, beatae illo quam magnam similique labore iure porro laborum nulla fuga. Maiores modi deserunt amet necessitatibus quam autem nostrum laboriosam explicabo, aspernatur ut doloremque!</h3>
      </div>
      <div>
        <h3>5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea iste maiores perferendis, mollitia labore magnam quam ipsam sed illo, nesciunt non blanditiis minima accusantium amet facere officia, deleniti assumenda.
        Inventore, voluptatem facilis quos sed tenetur, beatae illo quam magnam similique labore iure porro laborum nulla fuga. Maiores modi deserunt amet necessitatibus quam autem nostrum laboriosam explicabo, aspernatur ut doloremque!</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}