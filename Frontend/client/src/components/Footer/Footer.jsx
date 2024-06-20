import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import linkedin_icon from "../Assets/linkedin_icon.jpg";
import github_icon from "../Assets/github_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <div
            className="footer-icons-container"
            style={{ backgroundColor: "orange", display: "flex" }}
          >
            <div
              className="footer-icon"
              style={{
                marginRight: "10px",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              <a href="https://www.linkedin.com/in/tanu-pal-53823827b">
                <img
                  src={linkedin_icon}
                  alt="LinkedIn"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div
              className="footer-icon"
              style={{
                marginRight: "10px",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              <a href="https://github.com/Tanupal05">
                <img
                  src={github_icon}
                  alt="GitHub"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div
              className="footer-icon"
              style={{
                marginRight: "10px",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              <a href="your_whatsapp_profile_url">
                <img
                  src={whatsapp_icon}
                  alt="WhatsApp"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
            <div
              className="footer-icon"
              style={{ border: "1px solid black", padding: "5px" }}
            >
              <a href="https://www.instagram.com/tanup_al529">
                <img
                  src={instagram_icon}
                  alt="Instagram"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
