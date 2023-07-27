import { styled } from "styled-components";
import insta from "assets/images/footer/instagram.svg";
import twitter from "assets/images/footer/twitter.svg";
import fb from "assets/images/footer/facebook.svg";

const FooterStyled = styled.div`
  background-color: #000;
  width: 100%;
  height: 527px;
  padding: 70px 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .items {
    height: 100%;
  }
  .logo {
    width: 101.28px;
    height: 38.18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    border: 3px solid #fff;
  }
  .title {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  .list {
    display: flex;
    flex-direction: column;
  }
  .list a {
    font-size: 13px;
    color: #828282;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
  }
  .contact {
    font-size: 12px;
    text-transform: uppercase;
  }
  .title-contact {
    font-weight: 500;
    color: #fff;
    margin-bottom: 0;
  }
  .info-contact {
    color: #828282;
    font-weight: 400;
    margin-top: 0;
  }
  .social {
    padding-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .social img {
    width: 21px;
    height: 21px;
    padding-right: 18px;
  }
  .social span {
    color: #828282;
    font-weight: 400;
    font-size: 13px;
    text-transform: uppercase;
  }
  .join-form {
    display: flex;
    flex-direction: column;
  }
  .sub-title {
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    color: #828282;
    margin: 0 0 10px;
  }
  .email {
    width: 280px;
    height: 40px;
    border: 1px solid #fff;
    font-size: 12px;
    color: #fff;
    background: #000;
    text-indent: 15px;
    margin-bottom: 10px;
    padding: 0;
  }
  .submit {
    width: 280px;
    height: 40px;
    justify-content: center;
    align-items: center;
    color: #3f3f3f;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
  }
  .line {
    background: #4f4f4f;
    width: 100%;
    border: 1px solid #4f4f4f;
    margin-bottom: 15px;
  }
  .by {
    font-weight: 700;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="top">
        <div className="logo">lisa</div>
        <div className="items">
          <p className="title">features</p>
          <div className="list">
            <a href="/">men</a>
            <a href="/">women</a>
            <a href="/">boys</a>
            <a href="/">girls</a>
            <a href="/">new arrivals</a>
            <a href="/">shoes</a>
            <a href="/">clothes</a>
            <a href="/">accessories</a>
          </div>
        </div>
        <div className="items">
          <p className="title">menu</p>
          <div className="list">
            <a href="/">About us</a>
            <a href="/">contact us</a>
            <a href="/">my account</a>
            <a href="/">orders history</a>
            <a href="/">MY WISHLIST</a>
            <a href="/">BLOG</a>
            <a href="/">LOGIN</a>
          </div>
        </div>
        <div className="items">
          <p className="title">contact us</p>
          <div className="contact">
            <div className="contact-item">
              <p className="title-contact">Address:</p>
              <p className="info-contact">123 STREET NAME, CITY, ENGLAND</p>
            </div>
            <div className="contact-item">
              <p className="title-contact">Phone:</p>
              <p className="info-contact">(123) 456-7890</p>
            </div>
            <div className="contact-item">
              <p className="title-contact">email:</p>
              <p className="info-contact">MAIL@EXAMPLE.COM</p>
            </div>
            <div className="contact-item">
              <p className="title-contact">working days/hours</p>
              <p className="info-contact">MON - SUN / 9:00AM - 8:00PM</p>
            </div>
          </div>
        </div>
        <div className="items">
          <p className="title">follow us</p>
          <div className="social">
            <img src={fb} alt="facebook icon" />
            <span>facebook</span>
          </div>
          <div className="social">
            <img src={twitter} alt="twitter icon" />
            <span>twitter</span>
          </div>
          <div className="social">
            <img src={insta} alt="instagram icon" />
            <span>instagram</span>
          </div>
        </div>
        <div className="items">
          <p className="title">join us</p>
          <form className="join-form">
            <p className="sub-title">Subscribe to our newsletters</p>
            <input className="email" type="email" placeholder="Email Address" />
            <input className="submit" type="submit" value="Subscribe!"></input>
          </form>
        </div>
      </div>
      <div className="bottom">
        <div className="line" />
        <span className="by">© 2023 by leon</span>
      </div>
    </FooterStyled>
  );
};
