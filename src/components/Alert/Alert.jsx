import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import PropTypes from "prop-types";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
  severity,
  message,
  open,
  handleClose,
  //   autoHideDuration,
}) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        // autoHideDuration={autoHideDuration}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

// CustomizedSnackbars.defaultProps = {
//   open: false,
//   autoHideDuration: 600,
// };

// CustomizedSnackbars.propTypes = {
//   open: PropTypes.bool.isRequired,
//   severity: PropTypes.oneOf(["success", "info", "warning", "error"]).isRequired,
//   handleClose: PropTypes.func.isRequired().isRequired,
//   message: PropTypes.string.isRequired,
//   //   autoHideDuration: PropTypes.number.isRequired,
// };
