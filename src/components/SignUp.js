import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    loginscreen:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        maxHeight:"30vh",
        textAlign:"center",
        margin:"160px",

    },
    text:{
        width:"400px",
        height:"5rem",
        lineHeight: "1.6em",
        

    },
    forgotpassword:{
        textAlign:"right",
        fontSize:"10px",
    },
    btnLogin:{
        lineHeight: "2.55rem",
        letterSpacing:"1em",
        textAlign:"center",
        fontWeight:"bold",
        textDecoration:"none",
        // transition: border .2s ease 0s,color .2s ease 0s,#291e38 , .2s ease 0s, box-shadow .2s ease 0s;
        color:"#fff",
        backgroundColor: "#291e38",
        fontWeight:"bold",
        marginTop:"15px"
    },
    btnText:{
        color:"#fff",
    },
    btnGoogle:{
        lineHeight: "2.55rem",
        letterSpacing:"1em",
        textAlign:"center",
        fontWeight:"bold",
        textDecoration:"none",
        border:"2px solid #c4c4c4",
        marginTop:"15px"
    },
    btnGoogleText:{
        color:"#291e38",
    },
    loginOr:{
        fontSize:"0.89rem",
        lineHeight: "1.6em",
        display: "block",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        margin: "20px 0px",
    }
}))


function SignUp() {
    const classes = useStyles();

    return (
        <Box className={classes.loginscreen}
            component="form"
            noValidate
            autoComplete="off">
            <form>
                <h5 style={{paddingBottom:"30px"}}>Login With Your Steady Account</h5>
                <div>
                    <TextField fullWidth className={classes.text}
                   type="email"
                    id="outlined-required"
                    label="Email"
                    
                    />
                </div>
                <div>
                    <TextField className={classes.text}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <span className={classes.forgotpassword}>Forgot Password?</span>
                
                <div className={classes.btnLogin}>
                    <Button className={classes.btnText} onClick="">LOG IN</Button>
                </div>
    
                <div className="alternativeLogin">
                    <div className={classes.loginOr}>
                        <span>or</span>
                    </div>
                    <div className={classes.btnGoogle}>
                        <Button className={classes.btnGoogleText} onClick="">LOG IN WITH GOOGLE</Button>
                    </div>
                </div>
                
            </form>
        </Box>
      )
}
export default SignUp;