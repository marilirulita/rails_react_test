import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const Notification = ({type, mess}) => {
  const notification = useSelector((state) => state.alert.alert);
  return (
    <div>
      { notification && <Alert severity={type}>{mess}</Alert> }
    </div>
  );
}

export default Notification;