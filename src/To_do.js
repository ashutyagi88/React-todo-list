import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import "./To_do.css";
import React from "react";

function To_do(props) {
  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText
          primary={props.text}
          secondary="Dummy Deadline"
        ></ListItemText>
      </ListItem>
    </List>
  );
}

export default To_do;
