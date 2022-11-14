import React, { useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import { ReactTerminal } from "react-terminal";

function About() {
  const terminal = useRef();
  const commands = {
    whoami: "Mohammad Hossain",
    help: "contact\nprojects\nposts\ngithub",
    contact: () => {
      contact();
    },
  };

  const contact = () => {
    Navigate("/contact");
  };

  const intro =
    "Hello!! My name is Mohammad Hossain based in New York. I build applications for the web and mobile.\nType in 'help' to view available commands\n";

  useEffect(() => {
    terminal.current.focus();
  }, []);
  return (
    <div ref={terminal}>
      <ReactTerminal
        commands={commands}
        welcomeMessage={intro}
        enableInput={true}
        themes={{
          mycustomtheme: {
            themeBGColor: "#272B36",
            themeToolbarColor: "#DBDBDB",
            themeColor: "#FFFEFC",
            themePromptColor: "#a917a8",
          },
        }}
        theme="mycustomtheme"
      />
    </div>
  );
}

export default About;
