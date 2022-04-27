import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//import GoogleLogin from "react-google-login";
import { Link as Linkrouter } from "react-router-dom";
import axios from "axios";
import Faceb from "./SignUpBoton/Faceb";
//import Google from "./SignUpBoton/Google";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        MyThenery@gmail.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  color: {
    background:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% )",
  },

  image: {
    backgroundImage: "url(https://camiper.com/assets/viajes/img/india/comp-famili.gif)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    //marginTop: theme.spacing(8), (para quitar el margen arriba del signUp)
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% )",

    paddingRight: "10px",
    paddingLeft: "10px",
  },

  avatar: {
    margin: theme.spacing(4),
    background: "#004e92",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  async function NewUser(event) {
    event.preventDefault();
    const NuevoUsuario = {
      firstname: event.target[0].value,
      lastname: event.target[2].value,
      email: event.target[4].value,
      password: event.target[6].value,
      from: "signup",
    };

    await axios.post("https://mytinerary-jeanney.herokuapp.com/api/signup", { NuevoUsuario }).then(
      (
        response //alert(response.data.response))
      ) =>
        // if(response.success==="falseVAL"){

        //  console.log(response.data)
        // }

        displayMessages(response.data)
    );
    function displayMessages(data) {
      // if (data.success === "falseVAL") {
      //   console.log(data);
      //   console.log(data.response.error.details);
      //   alert(data.response.error.details.map((error) => error.message));
      // } 
       if (data.success === true) {
        alert (data.response)
        console.log(data);
      } else  {
        alert(data.response)
        console.log(data);
      }
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={NewUser}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            
            
            <Faceb />
 
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Linkrouter to="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Linkrouter>
              </Grid>
            </Grid>
          </form>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
