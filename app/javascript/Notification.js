import React, { useState } from "react";
import { Alert, Collapse, IconButton, CloseIcon } from "@mui/material";
import { useSelector } from "react-redux";

const Notification = ({type, mess}) => {
  const [open, setOpen] = useState(true);
  const notification = useSelector((state) => state.alert.alert);
  return (
    <div>
      { notification && 
      <Collapse in={open}>
        <Alert onClose={() => {setOpen(false)}} severity={type}>{mess}</Alert>
        </Collapse> }
    </div>
  );
}

export default Notification;