import React, { useState } from "react";
import { Button, Paper, Typography, Container, Grid } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import http from "../../services/httpService";
import useStyles from "./styles";
import Input from "./Input";
import { useHistory } from "react-router-dom";
const server_domain = "";

// "https://limitless-savannah-12904.herokuapp.com"

function Activate({ match }) {
  const history = useHistory();
  const [verificationCode, setverificationCode] = useState(" ");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(match);
      await http.post(
        server_domain + `/students/activation/${match.params.token}`,
        { verificationCode: verificationCode }
      );
      localStorage.setItem("isActivated", "true");
      history.push('/students/login')
      // window.location = "/students/login";
    } catch (ex) {
      if (ex.response) {
        toast.error(ex.response.data.message);
      }
    }
  };
  const handleChange = (e) => {
    setverificationCode(e.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <ToastContainer />
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Typography component="h1" variant="h5">
            Verify Account
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Input
                name="verificationCode"
                label="Verification Code"
                handleChange={handleChange}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Verify
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Activate;
