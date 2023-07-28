import { styled } from "styled-components";
import { ReactComponent as Armani } from "assets/images/brandads/armani.svg";
import { ReactComponent as Burberry } from "assets/images/brandads/burberry.svg";
import { ReactComponent as Chanel } from "assets/images/brandads/chanel.svg";
import { ReactComponent as Dior } from "assets/images/brandads/dior.svg";
import { ReactComponent as Fendi } from "assets/images/brandads/fendi.svg";
import { ReactComponent as Gucci } from "assets/images/brandads/gucci.svg";
import { ReactComponent as Versace } from "assets/images/brandads/versace.svg";
import model1 from "assets/images/brandads/model1.svg";
import model2 from "assets/images/brandads/model2.svg";
import model3 from "assets/images/brandads/model3.svg";
import { Button } from "components/Button";

const AdsStyled = styled.div`
  max-width: 100%;
  .title-chose {
    color: #000;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .ads {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 50px;
  }
  .banner-left {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .look {
    background: linear-gradient(
      270deg,
      rgba(241, 239, 240, 0) 0%,
      #f1f0f0 10.94%,
      #f3f0ef 100%
    );
    width: 100%;
    height: 434px;
    display: flex;
  }
  .new {
    height: 434px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(
      90deg,
      #f7e0d5 0%,
      #f3dcd2 83.85%,
      rgba(243, 220, 210, 0.14) 100%
    );
    position: relative;
  }
  .des2 {
    position: absolute;
    left: 10%;
    top: 15%;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    color: #000;
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .des {
    color: #000;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0.22px;
    margin-top: 7px;
  }
  .banner-right {
    width: 50%;
    height: 898px;
    display: flex;
    justify-content: flex-end;
    background: linear-gradient(
      90deg,
      #e0ded3 0%,
      #e0ddd5 86.82%,
      #e0ddd5 100%
    );
    position: relative;
  }
  .info3 {
    position: absolute;
    left: 10%;
    top: 45%;
  }
  .title3 {
    color: #131313;
    font-size: 96px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
    line-height: 1;
  }
  .des3 {
    color: #000;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 767px) {
    .banner-left {
      width: 100%;
    }
    .banner-right {
      width: 100%;
      height: 500px;
      img {
        width: 100%;
      }
      .title3 {
        font-size: 48px;
        margin-bottom: 25px;
      }
      .des3 {
        display: none;
      }
      button {
        width: 150px;
      }
    }
    .look {
      justify-content: center;
    }
    .look img {
      display: none;
    }
    .new img {
      display: none;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .banner-right {
      width: 100%;
      img {
        width: 100%;
      }
      .info3 {
        left: 5%;
      }
    }
  }
`;

const ChoseBrand = styled.div`
  border: 2px solid #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px 0 12px;
  box-sizing: border-box;
  flex-wrap: wrap;
  svg:hover {
    rect {
      fill: #f0f2f2;
      transition: 3ms;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const BrandAds = () => {
  return (
    <AdsStyled>
      <p className="title-chose">chose your brand</p>
      <ChoseBrand>
        <Chanel />
        <Burberry />
        <Dior />
        <Fendi />
        <Versace />
        <Gucci />
        <Armani />
      </ChoseBrand>
      <div className="ads">
        <div className="banner-left">
          <div className="look">
            <img src={model1} alt="model 1" />
            <div className="info">
              <p className="title">
                choosе <br /> your look
              </p>
              <p className="des">See our clothing collections</p>
              <Button>see offers</Button>
            </div>
          </div>
          <div className="new">
            <div className="info des2">
              <p className="title">
                brand <br /> new style
              </p>
              <p className="des">Popular clothing brands</p>
              <Button>see offers</Button>
            </div>
            <img src={model2} alt="model 2" />
          </div>
        </div>
        <div className="banner-right">
          <div className="info3">
            <p className="title3">
              Up to
              <br />
              40% off
            </p>
            <p className="des3">Special offers and great deals</p>
            <Button>shop now</Button>
          </div>
          <img src={model3} alt="model 3" />
        </div>
      </div>
    </AdsStyled>
  );
};
