import { Layout } from 'components/Layout';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from "react-router-dom";
import Homepage from 'containers/Homepage';
import Shop from 'containers/Shop';
import Blog from 'containers/Blog';
import Login from 'containers/Login';
import Products from 'containers/Products';
import NewAccount from 'containers/NewAccount';
import Cart from 'containers/Cart';
import Payment from 'containers/Payment';
import Account from 'containers/AccountPage';

import { Address, DashAcc, Information, Orders } from 'components/Account';
import Contact from 'containers/Contact';
import ForgotPass from 'containers/ForgotPass';
import CheckoutSuccess from 'containers/CheckoutSuccess';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="accounts/new" element={<NewAccount />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="account" element={<Account />}>
          <Route index element={<DashAcc />} />
          <Route path="information" element={<Information />} />
          <Route path="address" element={<Address />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>

      <Route path="payment/success" element={<CheckoutSuccess />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/forgot" element={<ForgotPass />}></Route>
    </Routes>
  );
}

export default App;
