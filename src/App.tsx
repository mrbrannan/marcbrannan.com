import * as React from "react";
import { Box, Image } from "grommet";

import logo from "./logo.png";

class App extends React.Component {
  render() {
    return (
      <Box>
        <Image fit="contain" src={logo} />
      </Box>
    );
  }
}

export default App;
