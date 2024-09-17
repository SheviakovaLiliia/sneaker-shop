import snapchat from "../../assets/snapchat.svg";
import facebook from "../../assets/facebook2.svg";
import x from "../../assets/x.svg";
import s from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={s.contacts}>
      <h1>Contacts</h1>
      <ul className={s.ul}>
        <li>8 800 000 00 00</li>
        <li>emailexample@email.com</li>
      </ul>
      <div className={s.contactsBody}>
        <form className={s.form}>
          <div className={s.inputs}>
            <input placeholder="Your email" type="text" />
            <input placeholder="Your name" type="text" />
          </div>
          <input
            className={s.message}
            placeholder="Enter your message"
            name=""
            id=""
          />
          <button className={s.submitBtn} type="submit">
            Submit
          </button>
        </form>

        <div className={s.contactsRight}>
          <p>Find us:</p>
          <div className={s.icons}>
            <img src={snapchat} alt="Snapchat" />
            <img src={facebook} alt="Facebook" />
            <img src={x} alt="Twitter" />
          </div>
        </div>
      </div>
    </section>
  );
};
