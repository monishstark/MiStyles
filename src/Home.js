import { Slideshow } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Slideshows = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <ArrowBackIosIcon onClick={prev} />
        <ArrowForwardIosIcon onClick={next} />
      </div>
    </div>
  );
};
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/1/9a0e7b6b-c2b2-4d5a-b53b-b91abc618c191643724903538-USPA_Desk_Banner.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="00001"
            title="Adidas Originals "
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14790082/2021/12/6/47184c9b-4184-4eba-9a33-bed4b58c69ab1638792339154-ADIDAS-Originals-Men-Tshirts-4161638792338651-1.jpg"
            price={2000}
            info="Adidas Originals T-shirt"
          />
          <Product
            id="00002"
            title="Nike"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16274210/2022/1/25/1e84f636-e0a9-4b62-9878-5333d47287291643093064810-Nike-Air-Max-90-Next-Nature-Mens-Shoes-7871643093064368-1.jpg"
            price={10000}
            info="Nike Men's Air Max 270 React Se Running Shoe"
          />
          <Product
            id="00003"
            title="Levis"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14322626/2021/6/15/e8b5f479-765c-4c9c-ac8c-8123927aef5a1623736080042JeansLevisMenTrousersLevisMenTrousersLevisMenTrousersLevisMe1.jpg"
            price={600}
            info="Men's Regular T-Shirt"
          />

          {/*product*/}
        </div>
        <div className="home_row">
          <Product
            id="00004"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12906532/2020/12/5/c10f7de5-b42d-4dac-8973-912cc97382401607156433081ShortsADIDASMenShortsADIDASMenShortsAlcisMenShortsAlcisMenTi1.jpg"
            price={3000}
            info="Tennis Tee"
          />
          <Product
            id="00005"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16569042/2021/12/21/79fbc3c1-9ca2-4781-ab42-ed2581e610761640075045494ADIDASMenGreenTypographyPrintedAppliqueT-shirt1.jpg"
            price={1600}
            info=" Printed T-Shirt"
          />
          <Product
            id="00006"
            title="Nike"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16996500/2022/2/16/aa4d2015-1468-4832-90b1-8f0c699c21961645002501820-Nike-Air-Mens-Brushed-Back-Fleece-Crew-7391645002501083-1.jpg"
            price={4500}
            info="Nike Sweatshirt"
          />
          <Product
            id="00007"
            title="Nike akers"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15914104/2021/11/11/436392d4-34ca-4f72-99e2-2826ea7aadef1636632876363JacketsDucatiMenJacketsDucatiMenJacketsDucatiMenJacketsDucat1.jpg"
            price={4200}
            info="basketball T-shirt"
          />
        </div>
        <div className="home_row">{/*product*/}</div>
        <div className="slider">
          <Slideshows
            imgs={[
              "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/f52556ea-783c-4eab-8bb9-a3b909b634451647665260055-DK-b1g27pm.jpg",
              "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/c3d08922-f93f-4f7f-9996-e3d2b82bdc621647456798682-Workwear-Collection_Dk.jpg",
              "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/52df3f93-8d0f-412d-b416-fc665706199d1647456798690-Casual-Shoes_Dk.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
