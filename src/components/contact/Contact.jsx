import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Get in touch with me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 9483310104
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              raghukatti0@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Kalaburagi/Bangalore
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
