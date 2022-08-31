import React, { useEffect } from "react";

const useAlert = (duration) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleOpen = (message) => {
    setOpen(true);
    setMessage(message);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, duration);
    }
  }, [open, duration]);

  return { open, handleOpen, handleClose, message };
};

export default useAlert;
