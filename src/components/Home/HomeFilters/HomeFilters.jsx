import { Product } from "components/Product";
import { styled } from "styled-components";
import { Button } from "components/Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HFStyled = styled.div`
  margin-top: 48px;
  margin-bottom: 50px;
  display: flex;
  .left {
    width: 20%;
    border-right: 1px solid #c4c4c4;
  }
  .filter {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 0;
  }
  .allcheck {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
  }
  .checkbox {
    accent-color: #000;
  }
  .right {
    width: 80%;
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    margin-bottom: 60px;
  }
  .link {
    text-decoration: none;
  }
`;

export const HomeFilters = () => {
  // const dispatch = useDispatch();
  const productsStore = useSelector((state) => state.products);
  return (
    <HFStyled>
      <div className="left">
        <p className="filter">Check your style here!</p>
        {/* <div className="allcheck">
          <label>
            <input className="checkbox" type="checkbox" /> best sellers
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> NEW Arivals
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> TOP women
          </label>
          <label>
            <input className="checkbox" type="checkbox" /> TREnding
          </label>
        </div> */}
      </div>
      <div className="right">
        <div className="products">
          {productsStore.listProduct.map((card) => (
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
              />
            </Link>
          ))}
        </div>
        <Button
          width={"140px"}
          height={"50.33px"}
          fontSize={14}
          borderColor={"#828282"}
          textColor={"#828282"}
        >
          load more
        </Button>
      </div>
    </HFStyled>
  );
};
