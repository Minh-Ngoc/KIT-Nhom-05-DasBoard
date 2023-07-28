import { Button } from "components/Button";
import { styled } from "styled-components";
import pen from "assets/images/account/pen.svg";
import { useNavigate } from "react-router-dom";

const DashStyled = styled.div`
  .addbook {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .top {
    margin-bottom: 60px;
  }
  .top,
  .bottom {
    display: flex;
    gap: 130px;
    flex-wrap: wrap;
  }
  .cate {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }
  .title-dash {
    color: #3f3f3f;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  .text {
    color: #828282;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .button-contact {
    display: flex;
    gap: 10px;
  }
  button {
    font-family: "Oswald", sans-serif;
  }
  @media screen and (max-width: 767px) {
    .info, .contact, .news, .addbook {
      width: 100%;
      padding-left: 50px;
      box-sizing: border-box;
    }
  }
  @media (min-width: 768px) and (max-width: 991px) {
    .info, .contact, .news, .addbook {
      width: 100%;
      padding-left: 50px;
      box-sizing: border-box;
    }

  }
`;

export const DashAcc = () => {
  const navigate = useNavigate();
  return (
    <DashStyled>
      <div className="info">
        <p className="cate">Account Information</p>
        <div className="top">
          <div className="contact">
            <p className="title-dash">Contact Information</p>
            <p className="text">
              Alex Driver <br />
              ExampeAdress@gmail.com
            </p>
            <div className="button-contact">
              <Button
                borderColor={null}
                width={"auto"}
                height={"24px"}
                fontSize={14}
                bgColor={"#E6F1FA"}
                onClick={() => navigate("/account/information")}
              >
                Edit
              </Button>
              <Button
                borderColor={null}
                width={"auto"}
                height={"24px"}
                fontSize={14}
                bgColor={"#E6F1FA"}
                onClick={() => navigate("/account/information")}
              >
                Change Password
              </Button>
            </div>
          </div>
          <div className="news">
            <p className="title-dash">Newsletters</p>
            <p className="text">You don't subscribe to our newsletter.</p>
            <Button
              borderColor={null}
              width={"auto"}
              height={"24px"}
              fontSize={14}
              bgColor={"#E6F1FA"}
            >
              Edit
            </Button>
          </div>
        </div>
        <div className="addbook">
          <p className="cate">Address Book</p>
          <img src={pen} alt="pen" />
        </div>
        <div className="bottom">
          <div className="address">
            <div className="titles">
              <p className="title-dash">Default Billing Address</p>
            </div>
            <p className="text">You have not set a default billing address.</p>
            <div className="button-contact">
              <Button
                borderColor={null}
                width={"auto"}
                height={"24px"}
                fontSize={14}
                bgColor={"#E6F1FA"}
                onClick={() => navigate("/account/address")}
              >
                Edit Address
              </Button>
            </div>
          </div>
          <div className="shipping">
            <div className="titles">
              <p className="title-dash">Default Shipping Address</p>
            </div>
            <p className="text">You have not set a default shipping address.</p>
            <div className="button-contact">
              <Button
                borderColor={null}
                width={"auto"}
                height={"24px"}
                fontSize={14}
                bgColor={"#E6F1FA"}
                onClick={() => navigate("/account/address")}
              >
                Edit Address
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashStyled>
  );
};
