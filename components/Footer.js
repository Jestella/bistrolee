import footerStyles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={footerStyles.footer_top}>
        <h4>Hours</h4>

        <p>Sun - Thu : 5 pm - 10 pm</p>
        <p>Fri - Sat : 5 pm - 11 pm</p>
      </div>
      <footer className={footerStyles.footer_bottom}>
        <ul>
          <h5>VISIT US</h5>
          <li>Bistro Lee</li>
          <li>100 St Clair W Ave.</li>
          <li>Toronto, ON, A1A 1A1</li>
        </ul>
        <ul>
          <h5>FOLLOW US</h5>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Pinterest</li>
        </ul>

        <ul>
          <h5>CONTACT US</h5>
          <li>416-222-2222</li>
          <li>416-333-3333</li>
          <li>contact@bistrolee.com</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
