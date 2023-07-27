import { GET_USER, UPDATE_USER } from "api";
import axios from "axios";
import { Button } from "components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { styled } from "styled-components";

const AddressStyled = styled.div`
  .title {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    text-align: start;
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
    font-family: 'Oswald', sans-serif;
  }
  .center {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
`;

export const Address = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const token = Cookies.get("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const userData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    address: address,
  };

  useEffect(() => {
    axios
      .get(GET_USER, { headers })
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setPhoneNumber(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((error) => console.error("Error fetching data:", error));
    // eslint-disable-next-line
  }, []);

  const handleSaveAddress = () => {
    axios
      .put(UPDATE_USER, userData, { headers })
      .then((response) => {
        toast.success("User data updated successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error("Error updating user data!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <AddressStyled>
      <p className="title">Contact Information</p>
      <div className="data-fields">
        <div className="label">
          First Name<span className="red">*</span>
        </div>
        <input
          className="input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="data-fields">
        <span className="label">Last Name</span>
        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="data-fields">
        <span className="label">
          Phone Number<span className="red">*</span>
        </span>
        <input
          className="input"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="data-fields">
        <span className="label">
          Address<span className="red">*</span>
        </span>
        <input
          className="input"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
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
          onClick={handleSaveAddress}
        >
          save address
        </Button>
      </div>
    </AddressStyled>
  );
};
