import React from "react";
import Paper from "@material-ui/core/Paper";

import devicesData from "./../Data";
import DevicesList from "./DevicesList";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      devices: devicesData
    };
  }

  render() {
    return (
      <Paper style={style.Paper}>
        <DevicesList devices={this.state.devices} openStat={this.openStat} />
      </Paper>
    );
  }
}

export default Main;