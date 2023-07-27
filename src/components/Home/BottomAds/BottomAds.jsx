import { styled } from "styled-components";
import insta from "assets/images/botads/insta.svg";
import explore from "assets/images/botads/explore.svg";
import vector from "assets/images/home/vector.svg";
import fl from "assets/images/botads/follow5.svg";
import { Button } from "components/Button";

const data = [
  {
    image: fl,
  },
  {
    image: fl,
  },
  {
    image: fl,
  },
  {
    image: fl,
  },
  {
    image: fl,
  },
  {
    image: fl,
  },
];

const FollowStyled = styled.div`
  height: 653px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-weight: 500;
    font-size: 56px;
    text-align: center;
    text-transform: uppercase;
    color: #000;
  }
  .tag {
    font-weight: 500;
    font-size: 28px;
    color: #ff6f61;
    text-align: center;
  }
  .allcard {
    display: flex;
    gap: 25px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) and (max-width: 1519px) {
    .title {
      font-size: 35px;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0;
    .title {
      font-size: 30px;
    }
  }
  @media (max-width: 767px) {
    padding: 0;
    height: 396px;
    .title {
      font-size: 25px;
    }
    .tag {
      font-size: 20px;
    }
  }
`;

const CardFl = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
  .insta {
    height: 50px;
    width: 50px;
    filter: invert(91%) sepia(0%) saturate(7463%) hue-rotate(89deg)
      brightness(116%) contrast(108%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover {
    .main {
      filter: brightness(50%);
    }
    .insta {
      opacity: 1;
    }
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    .main {
      width: 100%;
      height: 100%;
    }
    .insta {
      height: 30px;
      width: 30px;
    }
  }
`;

const Explore = styled.div`
  display: flex;
  .explore-info {
    margin-left: 100px;
    position: relative;
    p {
      color: #000;
      font-size: 56px;
      font-weight: 500;
      text-transform: uppercase;
      margin-bottom: 100px;
    }
    .vector {
      position: absolute;
      right: -3%;
      top: 10%;
    }
  }
`;

export const BottomAds = () => {
  return (
    <>
      <FollowStyled>
        <p className="title">Follow us on Instagram</p>
        <div className="allcard">
          {data.map((item, index) => (
            <CardFl key={index}>
              <img className="main" src={item.image} alt="insta" />
              <img className="insta" src={insta} alt="insta icon" />
            </CardFl>
          ))}
        </div>
        <p className="tag">@Lisa.Official</p>
      </FollowStyled>
      <Explore>
        <img src={explore} alt="explore background" />
        <div className="explore-info">
          <img className="vector" src={vector} alt="vector" />
          <p>EXPLORE THE BEST OF YOU.</p>
          <Button>show now</Button>
        </div>
      </Explore>
    </>
  );
};
