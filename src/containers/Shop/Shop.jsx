import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";
import { Button } from "components/Button";
import banner from "assets/images/shop/banner.svg";
import vector from "assets/images/home/vector.svg";
import vectorm from "assets/images/shop/vector.svg";
import { useDispatch } from "react-redux";
import { Product } from "components/Product";
import model from "assets/images/shop/model.svg";
import { useEffect } from "react";
import { useState } from "react";
import { API_FILTER, DATA_FILTER } from "api";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";
import { ProductCarousel } from "components/ProductCarousel";

const ShopStyled = styled.div`
  overflow: hidden;
  margin: 20px;
  .banner {
    width: 100%;
    background: linear-gradient(
      90deg,
      #f6f8fc 0%,
      #f6f8fc 44.79%,
      #f5f7fa 74.48%,
      rgba(243, 239, 238, 0) 100%
    );
    display: flex;
    justify-content: flex-end;
  }
  .info-banner {
    padding: 50px 200px;
    position: relative;
  }
  .title-banner {
    margin: 0;
    color: #000;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .des-banner {
    color: #000;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .vector {
    position: absolute;
    right: 20%;
  }
  .redirect {
    display: flex;
    width: 1878px;
    height: 36px;
    flex-direction: column;
    justify-content: center;
    color: #828282;
    font-size: 14px;
    font-weight: 400;
  }
  @media screen and (max-width: 767px) {
    .banner {
      display: flex;
      position: relative;
      img {
        width: 50%;
      }
      .info-banner {
        position: absolute;
        right: -10%;
        top: -50%;
        width: 50%;
      }
      .vector {
        display: none;
      }
      button {
        display: none;
      }
      .title-banner {
        font-size: 14px;
      }
      .des-banner {
        font-size: 10px;
        margin-top: 5px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .banner img {
      display: none;
    }
  }
`;

const QueryProducts = styled.div`
  display: flex;
  .left {
    width: 20%;
    border-right: 1px solid #c4c4c4;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
  .right {
    width: 80%;
    margin-left: 30px;
  }
  .filter-title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 40px;
    cursor: pointer;
  }
  .minus {
    background: #3f3f3f;
    width: 12px;
    height: 2px;
  }
  .allcheck {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    color: #3f3f3f;
  }
  .checkbox {
    accent-color: #000;
  }
  .allsize {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .size {
    width: 46px;
    height: 46px;
    border: 1px solid #c4c4c4;
    color: #828282;
    font-size: 12.5px;
    font-weight: 400;
    text-transform: uppercase;
    font-family: "Oswald";
  }
  .allcolor {
    margin-right: 40px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .color {
    display: flex;
    width: 27px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  .color.selected {
    border: 2px solid #fff;
    outline: 2px solid #000;
  }
  .button-range {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 25px;
    margin-right: 40px;
  }
  .sort {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  .select {
    height: 46px;
    border: 1px solid #c4c4c4;
    background: #fff;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    text-indent: 10px;
  }
  .type {
    width: 255px;
  }
  .num {
    width: 69px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
  }
  .mid-banner {
    width: 100%;
    height: 430px;
    background: linear-gradient(
      90deg,
      #000 0%,
      #000 69.37%,
      #000 89.11%,
      rgba(0, 0, 0, 0) 100%
    );
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-top: 45px;
    margin-bottom: 25px;
  }
  .info-mid {
    left: 10%;
    position: absolute;
  }
  .title-mid {
    color: #fff;
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .des-mid {
    color: #fff;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.25px;
    max-width: 640px;
  }
  .data {
    position: relative;
  }
  .vector {
    stroke: #fff;
    position: absolute;
    right: 0;
    top: -5%;
  }
  .checkbox {
    accent-color: #000;
  }
  .choose {
    border: 1px solid #000;
    color: #000;
  }
  .link {
    text-decoration: none;
  }
  .filter-mobile {
    display: none;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      margin-top: 50px;
    }
    .mid-banner {
      .info-mid {
        left: 30%;
        bottom: 10%;
      }
      .vector {
        display: none;
      }
      .des-mid {
        display: none;
      }
    }
    .filter-mobile {
      display: block;
      margin-top: 20px;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .left {
      width: 35%;
    }
    .info-mid {
      left: -30%;
    }
  }
`;

const RangeStyled = styled.div`
  margin-right: 40px;
  .price {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .customSlider {
    margin: auto;
  }
  .thumb {
    width: 6px;
    height: 20px;
    background: #000;
    top: -10px;
    cursor: pointer;
  }
  .customSlider-track {
    height: 2px;
    background: #000;
  }
  .customSlider-track.customSlider-track-0 {
    /* color of the track before the thumb */
    background: #bdbdbd;
  }
  .customSlider-track.customSlider-track-2 {
    /* color of the track before the thumb */
    background: #bdbdbd;
  }
`;

const MIN = 0;
const MAX = 300;

const Shop = () => {
  const dispatch = useDispatch();
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  // Set state for data
  const [values, setValues] = useState([MIN, MAX]);
  const [brands, setBrands] = useState();
  const [sizes, setSizes] = useState();
  const [colors, setColors] = useState();
  // Get all data filter and split to use
  useEffect(() => {
    axios
      .get(DATA_FILTER)
      .then((res) => {
        setBrands(res.data.stock[0].brand);
        setSizes(res.data.stock[0].sizeId);
        setColors(res.data.stock[0].colorId);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const splitBrand = brands ? brands.split(",") : [];
  const splitSize = sizes
    ? sizes.split(",").filter((el, index, arr) => arr.indexOf(el) === index)
    : [];
  const splitColor = colors
    ? colors.split(",").filter((el, index, arr) => arr.indexOf(el) === index)
    : [];

  // Select brand
  const [selectedBrand, setSelectedBrand] = useState("");
  const handleBrandSelect = (brandOption) => {
    setSelectedBrand(brandOption);
  };

  // Select color
  const [selectedColor, setSelectedColor] = useState("");
  const handleColorSelect = (colorOption) => {
    setSelectedColor(colorOption);
  };

  // Select brand
  const [selectedSize, setSelectedSize] = useState("");
  const handleSizeSelect = (sizeOption) => {
    setSelectedSize(sizeOption);
  };

  // Handle reset
  const resetFilter = () => {
    setSelectedBrand("");
    setSelectedColor("");
    setSelectedSize("");
    setValues([MIN, MAX]);
  };

  // Handle filter data
  const [filteredProducts, setFilteredProducts] = useState([]);
  const applyFilter = () => {
    axios
      .get(
        `${API_FILTER}?brand=${selectedBrand}&color=${selectedColor}&size=${selectedSize}&minPrice=${values[0]}&maxPrice=${values[1]}`
      )
      .then((res) => {
        setFilteredProducts(res.data.product);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  // Fetch data and apply filter
  useEffect(() => {
    // Fetch products when the component mounts and whenever the filters change
    dispatch.products.fetchProducts();
    applyFilter();
    // eslint-disable-next-line
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <ShopStyled>
        <div className="banner">
          <div className="info-banner">
            <img className="vector" src={vector} alt="vector" />
            <p className="title-banner">shoping without limits.</p>
            <p className="des-banner">
              You can choose the best option for you, and it does not matter
              whether you are in Prague or San Francisco. We will deliver your
              purchase anywhere!
            </p>
            <Button>shop now</Button>
          </div>
          <img src={banner} alt="model banner" />
        </div>
        <div className="redirect">Home / Women Dress / Best Chose</div>
        <QueryProducts>
          <Button
            width={"100px"}
            height={"40px"}
            bgColor={"#000"}
            textColor={"#fff"}
            className="filter-mobile"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            Filter
          </Button>
          {isFilterVisible && (
            <div className="left">
              <div>
                <div className="filter-title">
                  <p>Brand</p>
                  <div className="minus" />
                </div>
                <div className="allcheck">
                  <div className="allcheck">
                    {splitBrand.map((brand) => (
                      <label key={brand}>
                        <input
                          className="checkbox"
                          type="checkbox"
                          name="brandGroup"
                          value={brand}
                          onChange={() => handleBrandSelect(brand)} // Add onChange event to capture the selected brand
                          checked={selectedBrand === brand} // Set the checked attribute based on the selected brand
                        />{" "}
                        {brand}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="filter-title">
                  <p>Size</p>
                  <div className="minus" />
                </div>
                <div className="allsize">
                  {splitSize.map((size) => (
                    <Button
                      key={size}
                      className={`size ${
                        selectedSize === size ? "choose" : ""
                      }`}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <div className="filter-title">
                  <p>Color</p>
                  <div className="minus" />
                </div>
                <div className="allcolor">
                  {splitColor.map((color) => (
                    <div className="color" key={color}>
                      <Button
                        bgColor={color}
                        className={`color ${
                          selectedColor === color ? "selected" : ""
                        }`}
                        onClick={() => handleColorSelect(color)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="filter-title">
                  <p>Price Range</p>
                  <div className="minus" />
                </div>
                <RangeStyled>
                  <div className="price">
                    <p>{values[0]} EUR</p>
                    <p>{values[1]} EUR</p>
                  </div>
                  <ReactSlider
                    className="customSlider"
                    trackClassName="customSlider-track"
                    value={values}
                    onChange={setValues}
                    min={MIN}
                    max={MAX}
                  />
                </RangeStyled>
                <div className="button-range">
                  <Button
                    bgColor={"#C4C4C4"}
                    textColor={"#828282"}
                    fontSize={14}
                    borderColor={"#828282"}
                    width={"114px"}
                    height={"40px"}
                    onClick={() => applyFilter()}
                  >
                    apply
                  </Button>
                  <Button
                    bgColor={"#C4C4C4"}
                    textColor={"#828282"}
                    fontSize={14}
                    borderColor={"#828282"}
                    width={"114px"}
                    height={"40px"}
                    onClick={() => resetFilter()}
                  >
                    reset
                  </Button>
                </div>
              </div>
            </div>
          )}
          <div className="right">
            {/* <div className="sort">
              <select className="select type">
                <option value="0">price (high to low)</option>
                <option value="1">price (low to high)</option>
              </select>
              <select className="select num">
                <option value="0">48</option>
                <option value="1">24</option>
              </select>
            </div> */}
            <div className="products">
              {filteredProducts.map((card) => (
                <Link
                  key={card.productId}
                  to={`/products/${card.productId}`}
                  className="link"
                >
                  <Product
                    name={card.productName}
                    bgImage={card.urlImage}
                    brand={card.brand}
                    price={card.priceStock}
                    color={card.colorName}
                  />
                </Link>
              ))}
            </div>
            <div className="mid-banner">
              <div className="info-mid">
                <div className="data">
                  <img className="vector" src={vectorm} alt="vector line" />
                  <p className="title-mid">shoping without limits.</p>
                  <p className="des-mid">
                    You can choose the best option for you, and it does not
                    matter whether you are in Prague or San Francisco. We will
                    deliver your purchase anywhere!
                  </p>
                  <Button borderColor={"#fff"} textColor={"#fff"}>
                    show now
                  </Button>
                </div>
              </div>
              <img className="model" src={model} alt="model" />
            </div>
            <ProductCarousel />
          </div>
        </QueryProducts>
      </ShopStyled>
    </HelmetProvider>
  );
};

export default Shop;
