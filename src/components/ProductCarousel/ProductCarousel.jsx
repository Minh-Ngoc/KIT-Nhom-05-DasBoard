import { Product } from "components/Product";
import Carousel from "react-multi-carousel";
import { styled } from "styled-components";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1800, min: 1600 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselStyled = styled.div`
  .react-multiple-carousel__arrow {
    background: none;
  }
  .react-multiple-carousel__arrow::before {
    font-size: 32px;
    font-weight: 900;
    color: rgba(30, 40, 50, 0.25);
  }
  .react-multiple-carousel__arrow--left {
    top: 40%;
    left: calc(0% + 1px);
  }
  .react-multiple-carousel__arrow--right {
    top: 40%;
    right: calc(2% + 1px);
  }
`;

export const ProductCarousel = ({ productList }) => {
  // const dispatch = useDispatch();
  return (
    <CarouselStyled>
      <Carousel
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {productList?.map((card, index) => (
          <Product
            key={card.productId}
            name={card.productName}
            bgImage={card.urlImage}
            brand={card.brand}
            price={card.priceStock}
          />
        ))}
      </Carousel>
    </CarouselStyled>
  );
};
