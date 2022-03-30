import { Slideshow } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonBases from "./ButtonBases";
import FloatingButton from "./FloatingButton";
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
          <Product
            id="00004"
            title="Puma"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13502052/2021/8/13/950984c6-02ea-4efa-bf78-fc53e3581d0d1628850006589-Puma-Men-Track-Pants-2671628850005636-1.jpg"
            price={1600}
            info="Puma Trackpants"
          />
          <Product
            id="00005"
            title="Allen Solly"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16129116/2022/2/24/f6f461ce-8b90-4aaf-89b8-da0319821b4e1645693011726-Allen-Solly-Tribe-Men-Grey-Solid-Joggers-6261645693010961-1.jpg"
            price={3000}
            info="Allen solly Joggers"
          />
        </div>
        <div className="home_row">
          <Product
            id="00006"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12906532/2020/12/5/c10f7de5-b42d-4dac-8973-912cc97382401607156433081ShortsADIDASMenShortsADIDASMenShortsAlcisMenShortsAlcisMenTi1.jpg"
            price={3000}
            info="Tennis Tee"
          />
          <Product
            id="00007"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16569042/2021/12/21/79fbc3c1-9ca2-4781-ab42-ed2581e610761640075045494ADIDASMenGreenTypographyPrintedAppliqueT-shirt1.jpg"
            price={1600}
            info=" Printed T-Shirt"
          />
          <Product
            id="00008"
            title="Nike"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16996500/2022/2/16/aa4d2015-1468-4832-90b1-8f0c699c21961645002501820-Nike-Air-Mens-Brushed-Back-Fleece-Crew-7391645002501083-1.jpg"
            price={4500}
            info="Nike Sweatshirt"
          />
          <Product
            id="00009"
            title="Nike akers"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15914104/2021/11/11/436392d4-34ca-4f72-99e2-2826ea7aadef1636632876363JacketsDucatiMenJacketsDucatiMenJacketsDucatiMenJacketsDucat1.jpg"
            price={4200}
            info="basketball T-shirt"
          />
        </div>

        <div className="slider">
          <Slideshows
            imgs={[
              "https://assets.ajio.com/cms/AJIO/WEB/26032022-D-Unisex-topbannercarousel-p4-footwear-brands-3070.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/26032022-D-Unisex-topbannercarousel-p5-brands-5080-extraupto35.jpg",
              "https://assets.ajio.com/cms/AJIO/WEB/26032022-D-Unisex-topbannercarousel-p2-brands-3060.jpg",
            ]}
          />
        </div>
        <div className="home_row">
          <Product
            id="00010"
            title="Puma"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/22/ef9c71f4-3cef-4d28-bf50-9d177a4080501619092516324-1.jpg"
            price={2500}
            info="Puma Hoodies"
          />
          <Product
            id="00011"
            title="Wrogn"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12422882/2020/11/24/ed3e6a50-4b2e-478f-9f21-8deed67169311606199218735SweatshirtsWROGNMenSweatshirtsWROGNMen1.jpg"
            price={1800}
            info="Wrogn Hoodies"
          />
          <Product
            id="00012"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124218/2022/2/10/8ef47f19-77c0-46fe-bf5e-6e9718c9432c1644513034501RelaxedFitPrintedhoodie1.jpg"
            price={1500}
            info="H&M Hoodies"
          />
          <Product
            id="00013"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124324/2022/2/10/e00d3a88-c6f3-4c24-b164-8838994aa1581644507935627OversizedFitCottonzip-throughhoodie1.jpg"
            price={3000}
            info="H&M Hoodies"
          />
          <Product
            id="00014"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14746186/2021/12/6/304b4043-b135-45ae-b551-01bfde6606bb1638786590308-ADIDAS-Men-Sweatshirts-5121638786589794-1.jpg"
            price={3000}
            info="Adidas Hoodies"
          />
        </div>
        <div className="home_row">
          <Product
            id="00015"
            title="Puma"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/22/ef9c71f4-3cef-4d28-bf50-9d177a4080501619092516324-1.jpg"
            price={2500}
            info="Puma Hoodies"
          />
          <Product
            id="00016"
            title="Wrogn"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12422882/2020/11/24/ed3e6a50-4b2e-478f-9f21-8deed67169311606199218735SweatshirtsWROGNMenSweatshirtsWROGNMen1.jpg"
            price={1800}
            info="Wrogn Hoodies"
          />
          <Product
            id="00017"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124218/2022/2/10/8ef47f19-77c0-46fe-bf5e-6e9718c9432c1644513034501RelaxedFitPrintedhoodie1.jpg"
            price={1500}
            info="H&M Hoodies"
          />
          <Product
            id="00018"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124324/2022/2/10/e00d3a88-c6f3-4c24-b164-8838994aa1581644507935627OversizedFitCottonzip-throughhoodie1.jpg"
            price={3000}
            info="H&M Hoodies"
          />
          <Product
            id="00019"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14746186/2021/12/6/304b4043-b135-45ae-b551-01bfde6606bb1638786590308-ADIDAS-Men-Sweatshirts-5121638786589794-1.jpg"
            price={3000}
            info="Adidas Hoodies"
          />
        </div>
        <div className="hovering">
          <ButtonBases />
        </div>
        <div className="home_row">
          <Product
            id="00020"
            title="Puma"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/22/ef9c71f4-3cef-4d28-bf50-9d177a4080501619092516324-1.jpg"
            price={2500}
            info="Puma Hoodies"
          />
          <Product
            id="00021"
            title="Wrogn"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12422882/2020/11/24/ed3e6a50-4b2e-478f-9f21-8deed67169311606199218735SweatshirtsWROGNMenSweatshirtsWROGNMen1.jpg"
            price={1800}
            info="Wrogn Hoodies"
          />
          <Product
            id="00022"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124218/2022/2/10/8ef47f19-77c0-46fe-bf5e-6e9718c9432c1644513034501RelaxedFitPrintedhoodie1.jpg"
            price={1500}
            info="H&M Hoodies"
          />
          <Product
            id="00023"
            title="H&M"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17124324/2022/2/10/e00d3a88-c6f3-4c24-b164-8838994aa1581644507935627OversizedFitCottonzip-throughhoodie1.jpg"
            price={3000}
            info="H&M Hoodies"
          />
          <Product
            id="00024"
            title="Adidas"
            image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14746186/2021/12/6/304b4043-b135-45ae-b551-01bfde6606bb1638786590308-ADIDAS-Men-Sweatshirts-5121638786589794-1.jpg"
            price={3000}
            info="Adidas Hoodies"
          />
        </div>

        <div className="footer">
          <span className="info_c1">
            <b>ONLINE SHOPPING</b>
            <p> </p>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
          </span>
          <span className="info_c2">
            <b>USEFUL LINKS</b>
            <p> </p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Shipping</p>
            <p>Returns</p>
          </span>
          <span className="info_c3">
            <b>KEEP IN TOUCH</b>
            <span className="logos">
              <p> </p>
              <FacebookIcon />
              <YouTubeIcon />
              <InstagramIcon />
              <TwitterIcon />
              <GitHubIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
