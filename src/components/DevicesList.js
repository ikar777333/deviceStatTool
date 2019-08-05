import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const DevicesList = ({ devices, openStat }) => {
    let devicesList = devices.length ? (
        devices.map(device => {
        return (
            <ListItem button key={device.id} onClick={() => openStat(device.id)}>
                <ListItemText primary={device.text} />
            </ListItem>
        );
      })
    ) : (
      <div>
          <ListItem button>
                <ListItemText primary={"Test"} />
          </ListItem>
      </div>
    );
  
    return <List>{devicesList}</List>;
  };
  
  export default DevicesList;