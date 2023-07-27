import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { styled } from "styled-components";

const ContactStyled = styled.div`
  max-width: 90%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  h1 {
    text-align: center;
  }
  h1,
  h2 {
    color: #333;
    margin-bottom: 10px;
  }
`;

const Contact = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <ContactStyled>
        <h1>Contact Us - Lisa's Fashion Haven</h1>
        <p>
          Welcome to Lisa's Fashion Haven! We are delighted to have you here. If
          you have any questions, feedback, or just want to say hello, we'd love
          to hear from you. Our team is dedicated to providing exceptional
          customer service and ensuring your shopping experience with us is
          nothing short of fabulous.
        </p>

        <h2>Contact Information:</h2>
        <ul>
          <li>
            <strong>Customer Support Email:</strong>{" "}
            <a href="mailto:support@lisasfashionhaven.com">
              support@lisasfashionhaven.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (555) 123-4567
          </li>
        </ul>

        <h2>Business Hours:</h2>
        <p>
          Monday to Friday: 9:00 AM - 6:00 PM (EST)
          <br />
          Saturday: 10:00 AM - 4:00 PM (EST)
          <br />
          Sunday: Closed{" "}
        </p>

        <h2>Address:</h2>
        <p>
          Lisa's Fashion Haven
          <br />
          1234 Fashion Street
          <br />
          Cityville, State 56789
          <br />
          United States
        </p>

        <h2>Need Assistance?</h2>
        <p>
          Our customer support team is always ready to assist you. Whether you
          have a question about sizing, shipping, returns, or any other
          inquiries, don't hesitate to reach out. We promise to get back to you
          within 24 hours during business days.
        </p>

        <h2>Wholesale Inquiries:</h2>
        <p>
          For wholesale inquiries or collaborations, please email us at{" "}
          <a href="mailto:wholesale@lisasfashionhaven.com">
            wholesale@lisasfashionhaven.com
          </a>
          . We love working with like-minded businesses and individuals to
          spread the love for fashion.
        </p>

        <h2>Feedback and Suggestions:</h2>
        <p>
          We value your opinions, and your feedback helps us improve. If you
          have any suggestions or ideas on how we can enhance your shopping
          experience, please let us know at{" "}
          <a href="mailto:feedback@lisasfashionhaven.com">
            feedback@lisasfashionhaven.com
          </a>
          .
        </p>

        <h2>Press & Media:</h2>
        <p>
          For press-related inquiries or media features, please contact us at{" "}
          <a href="mailto:press@lisasfashionhaven.com">
            press@lisasfashionhaven.com
          </a>
          . We'd be thrilled to share our story and collaborate with the media.
        </p>
      </ContactStyled>
    </HelmetProvider>
  );
};

export default Contact;
