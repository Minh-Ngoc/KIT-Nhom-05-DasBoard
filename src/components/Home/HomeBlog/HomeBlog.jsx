import { styled } from "styled-components";

const BlogStyled = styled.div`
  width: 100%;
  background: #f8f9fb;
  margin-top: 80px;
  padding: 45px 20px;
  box-sizing: border-box;
  .title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 0;
  }
  .blogs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  .blog {
    width: 430px;
    height: 420px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    box-sizing: border-box;
  }
  .cate {
    color: #bdbdbd;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .title {
    color: #000;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  .des {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
  }
  .bot {
    border-top: 3px solid #000;
  }
  .day {
    color: #4f4f4f;
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 0;
    height: 36px;
    display: flex;
    align-items: center;
  }
`;

export const HomeBlog = () => {
  return (
    <BlogStyled>
      <p className="title">Blog</p>
      <div className="blogs">
        <div className="blog">
          <div className="top">
            <p className="cate">Article</p>
            <p className="title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </p>
            <p className="des">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
          </div>
          <div className="bot">
            <p className="day">21 January 2018 by guido</p>
          </div>
        </div>
        <div className="blog">
          <div className="top">
            <p className="cate">Tips</p>
            <p className="title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </p>
            <p className="des">
              When selling 70% fewer shirts, however, there are fewer shirts on
              the market, making it more exclusive, and therefore worth the
              money, for those to whom it matters.
            </p>
          </div>
          <div className="bot">
            <p className="day">21 January 2018 by guido</p>
          </div>
        </div>
        <div className="blog">
          <div className="top">
            <p className="cate">Tips</p>
            <p className="title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </p>
            <p className="des">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
          </div>
          <div className="bot">
            <p className="day">21 January 2018 by guido</p>
          </div>
        </div>
        <div className="blog">
          <div className="top">
            <p className="cate">Article</p>
            <p className="title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </p>
            <p className="des">
              When selling 70% fewer shirts, however, there are fewer shirts on
              the market, making it more exclusive, and therefore worth the
              money, for those to whom it matters.
            </p>
          </div>
          <div className="bot">
            <p className="day">21 January 2018 by guido</p>
          </div>
        </div>
      </div>
    </BlogStyled>
  );
};
