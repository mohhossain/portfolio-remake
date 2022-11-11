import React, { useRef, useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "../css/Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { MdArticle } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ReCAPTCHA from "react-google-recaptcha";

const recap = React.createRef();
function Contact() {
  const form = useRef();
  // const recap = useRef();

  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();

  // const submit = (e) => {
  //   e.preventDefault();
  //   recap.current.execute();
  //   confirmAlert({
  //     title: "Confirm to submit",
  //     message: "Are you sure to send this email?",
  //     buttons: [
  //       {
  //         label: "Yes",
  //         onClick: () => sendEmail(),
  //       },
  //       {
  //         label: "No",
  //         onClick: () => {
  //           return;
  //         },
  //       },
  //     ],
  //   });
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    recap.current.execute();
    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_SERVICE_KEY,
    //     process.env.REACT_APP_TEMPLATE_KEY,
    //     form.current,
    //     process.env.REACT_APP_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       setIsLoading(false);
    //       console.log(result.text);
    //       setStatus(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    form.current.reset();

    setTimeout(() => {
      setStatus();
    }, 4000);
  };

  // useEffect(() => {
  //   fetch(
  //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_CAP_SECRET_KEY}&response=${captchaToken}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }, [captchaToken]);

  function onChange(value) {
    setCaptchaToken(value);
    console.log(form.current);
    console.log("Captcha value:", value);
    fetch(`http://127.0.0.1:3000/verify?token=${value}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        emailjs
          .sendForm(
            process.env.REACT_APP_SERVICE_KEY,
            process.env.REACT_APP_TEMPLATE_KEY,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(setIsLoading(true))
          .then(
            (result) => {
              setIsLoading(false);
              console.log(result.text);
              setStatus(result);

              setTimeout(() => {
                setStatus();
              }, 4000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      });
  }

  return (
    <div className="contact-container">
      <ReCAPTCHA
        ref={recap}
        size="invisible"
        theme="dark"
        sitekey={process.env.REACT_APP_CAP_SITE_KEY}
        onChange={onChange}
      />
      {/* <label>{`{`}</label> */}
      {isLoading ? (
        <div>
          <Player
            className="globe"
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_n5icqxkw.json"
            style={{ height: "300px", width: "300px", color: "blue" }}
          ></Player>
          <h3 className="verify">Verifying if you are a human...</h3>
        </div>
      ) : status?.text === "OK" ? (
        <div>
          <Player
            className="globe"
            autoplay
            src="https://assets4.lottiefiles.com/packages/lf20_wc1axoqt.json"
            style={{ height: "300px", width: "300px", color: "blue" }}
          ></Player>
          <h3 className="verify">Thank you for reaching out to me.</h3>
          <h3 className="verify">
            I will get back to you as soon as possible.
          </h3>
        </div>
      ) : (
        <form className="form" ref={form} onSubmit={sendEmail}>
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
