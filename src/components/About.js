import React from "react";
import { ReactTerminal } from "react-terminal";

function About() {
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };
  return (
    <div>
      <ReactTerminal
        commands={commands}
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
