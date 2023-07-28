import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "assets/images/home/banner.svg";
import vector from "assets/images/home/vector.svg";
import text from "assets/images/home/text.svg";
import model1 from "assets/images/home/model 1.svg";
import model2 from "assets/images/home/model 2.svg";
import mid from "assets/images/home/midbanner.svg";
import { Button } from "components/Button";
import { BottomAds, BrandAds, HomeBlog, HomeFilters } from "components/Home";
import { ProductCarousel } from "components/ProductCarousel";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HomeStyled = styled.div`
  margin: 20px;
  .mid-banner {
    width: 100%;
    background: linear-gradient(
        90deg,
        #ddebf1 0%,
        #d3e5ee 42.71%,
        #c8deec 69.27%,
        rgba(255, 255, 255, 0) 100%
      ),
      url(${mid});
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
  }
  .info-mid {
    padding: 80px 270px;
    max-width: 640px;
    position: relative;
  }
  .title-mid {
    color: #000;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .des-mid {
    color: #000;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .vector {
    position: absolute;
    right: 25%;
    top: 20%;
  }
  .bestsell {
    height: 650px;
    width: 100%;
  }
  .bestsell-title {
    margin: 145px 0 100px 0;
    color: #000;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    .mid-banner {
      width: 100%;
      .info-mid {
        padding: 20px 10px;
      }
      .title-mid {
        margin-bottom: 0;
        font-size: 36px;
      }
      .des-mid {
        font-size: 16px;
      }
    }
    .vector {
      display: none;
    }
    .bestsell-title {
      margin: 50px 0;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .info-mid {
      padding: 50px 50px;
    }
    .title-mid {
      margin-bottom: 0;
    }
    .vector {
      display: none;
    }
    .bestsell-title {
      margin: 60px 0;
    }
  }
`;

const BgBanner = styled.div`
  background: url(${banner});
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  .title-banner {
    position: relative;
  }
  .text {
    width: 504px;
    height: 288px;
    margin-bottom: 50px;
    object-fit: cover;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 110px;
  }
  .right {
    display: flex;
  }
  .vector {
    position: absolute;
    width: 496.5px;
    height: 100.5px;
    right: 0;
    top: 0;
    transform: translate(10%, -30%);
  }
  .model {
    position: relative;
  }
  .model1 {
    width: 416px;
    height: 623px;
  }
  .model2 {
    width: 474px;
    height: 709px;
    position: absolute;
    left: 60%;
    bottom: 0%;
    transform: translate(10%, 6%);
  }
  @media screen and (max-width: 767px) {
    height: 400px;
    flex-direction: column-reverse;
    button {
      margin-left: 100px;
      width: 150px;
      height: 45px;
    }
    .vector {
      display: none;
    }
    .text {
      display: none;
    }
    .model {
      left: -45%;
    }
    .model1 {
      height: 253px;
    }
    .model2 {
      height: 319px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .right {
      display: none;
    }
  }
`;

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products when the component mounts
    dispatch.products.fetchProducts();
  }, [dispatch.products]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeStyled>
        <Carousel
          autoPlay={false}
          interval={3000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <BgBanner>
            <div className="left">
              <div className="title-banner">
                <img className="vector" src={vector} alt="vector line" />
                <img className="text" src={text} alt="sale text" />
              </div>
              <Button>shop now</Button>
            </div>
            <div className="right">
              <div className="model">
                <img className="model1" src={model1} alt="model 1" />
                <img className="model2" src={model2} alt="model 2" />
              </div>
            </div>
          </BgBanner>
          <BgBanner />
        </Carousel>
        <BrandAds />
        <HomeFilters />
        <div className="mid-banner">
          <div className="info-mid">
            <img className="vector" src={vector} alt="vector line" />
            <p className="title-mid">shoping without limits.</p>
            <p className="des-mid">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco. We will deliver your
              purchase anywhere!
            </p>
            <Button>show now</Button>
          </div>
        </div>
        <div className="bestsell">
          <p className="bestsell-title">best sellers</p>
          <ProductCarousel />
        </div>
        <BottomAds />
        <HomeBlog />
      </HomeStyled>
    </HelmetProvider>
  );
};

export default Homepage;
