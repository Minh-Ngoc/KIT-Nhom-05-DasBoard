import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { HeaderLogged } from "components/HeaderLogged";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const LayoutStyled = styled.div`
  width: 100%;
`;

const Layout = () => {
  const token = Cookies.get("token");
  return (
    <LayoutStyled>
      {!token ? <Header /> : <HeaderLogged />}
      <Outlet />
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
