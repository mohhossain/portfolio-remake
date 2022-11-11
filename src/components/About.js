import React, { useEffect, useRef } from "react";
import { ReactTerminal } from "react-terminal";

function About() {
  const terminal = useRef();
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };

  useEffect(() => {
    terminal.current.focus();
  }, []);
  return (
    <div ref={terminal}>
      <ReactTerminal
        commands={commands}
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
