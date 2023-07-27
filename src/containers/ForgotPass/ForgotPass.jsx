import { FORGOT_PASSWORD } from "api";
import axios from "axios";
import { Button } from "components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { styled } from "styled-components";

const ForgotStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .box {
    width: 600px;
    height: 300px;
    background: #c4c4c4;
    text-align: center;
    opacity: 0.8;
    border-radius: 15px;
  }
  .title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
  }
  .data-fields {
    display: flex;
    margin-bottom: 15px;
  }
  .label {
    color: #3f3f3f;
    font-size: 16px;
    font-weight: 400;
    width: 108px;
  }
  .red {
    color: #eb5757;
  }
  .input {
    width: 392px;
    height: 44px;
    border: 1px solid #c4c4c4;
    background: #fff;
    color: #828282;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-indent: 10px;
  }
  .center {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .back {
    text-decoration: none;
    color: #000;
    transition: 0.3s;
  }
  .back:hover {
    opacity: 0.5;
  }
`;

const ForgotPass = () => {
  const [email, setEmail] = useState("");
  const handleSave = () => {
    try {
      axios.post(FORGOT_PASSWORD, null, { params: { email } }).then((res) =>
        toast.success("Password reset successful!", {
          position: toast.POSITION.TOP_CENTER,
        })
      );
    } catch (err) {
      toast.error("Password reset failed!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <ForgotStyled>
      <div className="box">
        <p className="title">Enter your email to reset password</p>
        <div className="data-fields">
          <div className="label">
            Email:<span className="red">*</span>
          </div>
          <input
            className="input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="center">
          <Button
            className="save"
            bgColor={"#000"}
            width={"140px"}
            height={"50px"}
            textColor={"#fff"}
            fontSize={14}
            onClick={handleSave}
          >
            submit
          </Button>
        </div>
        <Link to="/login" className="back">
          Back to login
        </Link>
      </div>
    </ForgotStyled>
  );
};

export default ForgotPass;
