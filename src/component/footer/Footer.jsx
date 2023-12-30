import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerTopPan">
        <div className="container">
          <div className="socialPan">
            <div className="phone-envelope">
              <div className="ddd">
                <div>24/7</div>
                <div><span><i className="fa fa-phone"></i></span><span>+374 (10) 510 510</span></div>
              </div>

              <div><span><i className="fa fa-envelope"></i></span><span>inecobank@inecobank.am</span></div>
            </div>
            <div className="social-network">
              <div><i className="fa fa-linkedin"></i></div>
              <div><i className="fa fa-facebook"></i></div>
              <div><i className="fa fa-instagram"></i></div>
              <div><i className="fa fa-youtube-play"></i></div>
              <div><i className="fa fa-twitter"></i></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottomPan">
        <div className="container">
          <div className="wrapList">
            <div className="lists">
              <ul className="social-lists" >
                <li className="item"><a href="">ՄԵՐ ՄԱՍԻՆ</a></li>
                <li className="item"><a href="">ԿՈՐՊՈՐԱՏԻՎ ԿԱՌԱՎԱՐՈՒՄ</a></li>
                <li className="item"><a href="">ԲԱԺՆԵՏԵՐԵՐ ԵՎ ՆԵՐԴՐՈՂՆԵՐ</a></li>
              </ul>
            </div>
            <div className="lists">
              <ul className="social-lists">
                <li className="item"><a href="">ՀԱՇՎԵՏՎՈՒԹՅՈՒՆՆԵՐ</a></li>
                <li className="item"><a href="">ԱՇԽԱՏԱՆՔ ԻՆԵԿՈԲԱՆԿՈՒՄ</a></li>
                <li className="item"><a href="">ՆՈՐՈՒԹՅՈՒՆՆԵՐ</a></li>
                <li className="item"><a href="">ՀԵՏԱԴԱՐՁ ԿԱՊ</a></li>
              </ul>
            </div>
            <div className="lists">
              <ul className="social-lists">
                <li className="item"><a href="">ՍՊԱՌՈՂԻ ԻՐԱՎՈՒՆՔՆԵՐ</a></li>
                <li className="item"><a href="">ԳՆՈՒՄՆԵՐ</a></li>
                <li className="item"><a href="">ԳԱՂՏՆԻՈՒԹՅԱՆ ՔԱՂԱՔԱԿԱՆՈՒԹՅՈՒՆ</a></li>
                <li className="item"><a href="">ՖԻՆԱՆՍԱԿԱՆ ՀԱՄԱԿԱՐԳԻ ՀԱՇՏԱՐԱՐ</a></li>
                <li className="item"><a href="">ԻՐԱՎԱԿԱՆ ԱԿՏԵՐ</a></li>
                <li className="item"><a href="">ՕՏԱՐՎՈՂ ԳՈՒՅՔ</a></li>
                <li className="item"><a href="">ԹՂԹԱԿՑԱՅԻՆ ՀԱՐԱԲԵՐՈՒԹՅՈՒՆՆԵՐ</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;