import s from "./Footer.module.css";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.left}>
        <p>Contacts</p>
        <div className={s.left2}>
          8 800 000 00 00 <br />
          emailexample@email.com
        </div>
        <div className={s.left3}>2024 Sneaker-shop. All rights reserved</div>
      </div>
      <div className={s.right}>
        <div className={s.logos}>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <input type="text" placeholder="Enter your email" />
      </div>
    </footer>
  );
};
