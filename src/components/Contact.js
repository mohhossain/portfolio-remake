import React, { useRef, useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "../css/Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to send this email?",
      buttons: [
        {
          label: "Yes",
          onClick: () => sendEmail(),
        },
        {
          label: "No",
          onClick: () => {
            return;
          },
        },
      ],
    });
  };

  const sendEmail = () => {
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsLoading(false);
          console.log(result.text);
          setStatus(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();

    setTimeout(() => {
      setStatus();
    }, 4000);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  console.log(status);

  return (
    <div className="contact-container">
      {/* <label>{`{`}</label> */}

      <ReCAPTCHA
        sitekey={process.env.REACT_APP_CAP_SITE_KEY}
        onChange={onChange}
      />

      {isLoading ? (
        <div>
          <Player
            className="globe"
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_ztxhxdwa.json"
            style={{ height: "300px", width: "300px", color: "blue" }}
          ></Player>
        </div>
      ) : status?.text === "OK" ? (
        <div>
          <Player
            className="globe"
            autoplay
            src="https://assets4.lottiefiles.com/packages/lf20_wc1axoqt.json"
            style={{ height: "300px", width: "300px", color: "blue" }}
          ></Player>
        </div>
      ) : (
        <form className="form" ref={form} onSubmit={submit}>
          <h2>{`{`}</h2>

          <label>"NAME" :</label>
          <input type="text" name="user_name" required={true}></input>
          <label>"EMAIL" :</label>
          <input type="email" name="user_email" required={true}></input>
          <label>"SUBJECT" :</label>
          <input type="text" name="subject" required={true}></input>
          <label>"WHY ARE YOU REACHING OUT FOR?" :</label>
          <textarea type="text" name="message" required={true}></textarea>

          <input className="send" type="submit" value="Send email" />

          <h2>{`}`}</h2>

          <div className="icons">
            <BsGithub className="contact-icon git"></BsGithub>
            <BsLinkedin className="contact-icon linkedin"></BsLinkedin>
            <AiFillMail className="contact-icon mail"></AiFillMail>
            <MdArticle className="contact-icon blog"></MdArticle>
          </div>
        </form>
      )}
    </div>
  );
}

export default Contact;
