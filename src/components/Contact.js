import React from "react";
// import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";
// import "prismjs/components/prism-clike";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism.css";
// import CodeEditor from "@uiw/react-textarea-code-editor";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Contact() {
  //   const [code, setCode] = React.useState(
  //     `{
  //     email: "moh.hossain@gmail.com",
  //     github: "mohhossain",
  //     website: "mohammadhossain.dev",
  //     linkedin: "linkedin.com/in/mohammadh1"
  // }`
  //   );
  return (
    <div>
      <Player
        className="globe"
        autoplay
        loop
        src="https://assets8.lottiefiles.com/packages/lf20_scpojamh.json"
        // style={{ height: "300px", width: "300px", color: "blue" }}
      ></Player>
    </div>
  );
}

export default Contact;
