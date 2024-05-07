import React from 'react'
import Slider from 'react-slick'
import Link from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../SCSS/index.css'
import image10001 from '../image/10001.webp';
import image10002 from '../image/10002.webp';

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

function Banner() {

    const data =[
        {
    id:1, 
    title:"fresh bread",
    image:image10001,
    discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
},{
    id:2,
    image: image10002,
    title:'cheese',
    discription:'our cheeses are made with the finest ingredients.',
    // button:'Shop Now!'
}

]

let settings = {
    dots:true,
    infinite: true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    nextArrow: <CustomNextArrow/>,
    prevArrow: <SamplePrevArrow/>
    
    
};


  return (
    <div >
       <Slider  {...settings}>
{
    data.map(item=>{
        return(
            <div className='imagecont bannerslider' key={item.id}>
                <img src={item.image} alt='noimg'/>
                   <div className='content'>
                   <h3>{item.title}</h3>
                   <span>{item.discription}</span>
                   <button>shop more</button>
                   </div>
            </div>
        )
    })
}

</Slider>
  
        </div>
    
  )
}

export default Banner