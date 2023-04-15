import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Dialog } from "@mui/material";
import Button from "@mui/material/Button";

const accountIntitialValues = {
  createaccount: {
    view: "createaccount",
  },
  signup: {
    view: "signup",
  },
};

const CreateAccount = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(
    accountIntitialValues.createaccount
  );

  const handleClose = () => {
    setOpen(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountIntitialValues.signup);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Box>
          {account.view === "createaccount" ? (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h1>Create Account</h1>
              <TextField
                id="outlined-basic"
                label="Firts Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Conform Password"
                variant="outlined"
              />
              <Button variant="contained" onClick={handleClose}>
                Create Account
              </Button>
              <Button variant="contained" onClick={() => toggleSignup()}>
                Already have an account
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <h1>Sign In</h1>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />

              <Button variant="contained" onClick={handleClose}>
                Sign In
              </Button>
            </Box>
          )}
        </Box>
      </Dialog>
    </div>
  );
};

export default CreateAccount;
