import React, { useState , useEffect} from 'react'
import {Backdrop, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, InputLabel,makeStyles, Paper,TextField, ThemeProvider, Typography } from '@material-ui/core'
import { Modal } from '@material-ui/core';
import Modals from './Modals';

const countries = [
 {
    value:"NG",
    label:"Nigeria"
 },
 {
    value:"US",
    label:"United States"
 },
 {
    value:"CN",
    label:"Canada"
 }
];

const useStyles = makeStyles((theme) => ({
    checkbox:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:"20px"
    },
    contentContainer:{
        background:"#233E8B",
    },
    error:{
        color:"red",
        marginTop:"3px"
    },
    formContainer:{
        background:"white",
        height:"100vh,"
    },
    header:{
        color:"white",
    },
    login:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:"40px",
    },
    modal:{
        justifyContent:"center",
        alignItems:"center",
        width:"70%",
        height:"70%",
    }, 
    submit:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative",
        top:"20px",
        
    },
    textfield:{
        background: "#F2F3F4",
        borderRadius:" 5px",
    }
}))

function SignIn() {
  const initialProps = {
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    select: "",
    check:"false"
}

const [modal, setModal] = useState(false);
const [formValues, setFormValues] = useState(initialProps);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setModal(!modal);
    setIsSubmit(true);
}

const validate = (values) => {
    const errors = {};
    const regrex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.firstname) {
        errors.firstname = "First name required"
    }

    if(!values.lastname) {
        errors.lastname ="Last name required"
    }

    if(!values.check) {
        errors.check = "Agree to the terms and conditions"
    }
    
    if(!values.email) {
        errors.email = "Email required"
    } else if (!regrex.test(values.email)) {
        errors.email = "Invalid email"
    }

    if(!values.select) {
        errors.select = "Please choose city"
    }

    if(!values.password) {
        errors.password = "Password required";
    } else if(values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
    } else if(values.password.length > 8) {
        errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
}

if(modal) {
    document.body.classList.remove("active-modal")
}



  const [country, setCountry] = useState("")

  //New Modal 
  const [show, setShow] = useState(false);
  

  const handleChanges = (e) => {
    setCountry(e.target.value)
  }
  const classes = useStyles();

  return (
    <ThemeProvider>
        <Grid container component="main" sx={{ height: '200vh' }}>
            <CssBaseline/>
            <Grid 
                item
                xs={false}
                sm={4}
                md={6}
                className={classes.contentContainer}
            >
                <Box 
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    }}
                >
                
                    <Typography style={{color:"white", fontSize:"24px", marginBottom:"2em"}} >
                        Surge
                    </Typography>

                    <Typography style={{color:"white", fontSize:"36px", marginBottom:"1.3em", }} variant="h5">
                        Let us build Africa’s next biggest products together
                    </Typography>

                    <Typography  style={{color:"white", fontSize:"16px", fontWeight:"450", marginBottom:"1.6em"}}>
                        <p>
                            Our talents at KJK build solutions for the world's most respectable technology-driven
                            companies. By joining our network, you are up for a challenging work that will occupy
                            your mind and a community of top-fields techies 
                            that will offer you opportunities for continuous growth
                        </p>
                    </Typography>

                    <Typography style={{color:"white", fontSize:"12px", fontWeight:"200", lineHeight:"20px", marginBottom:"5em"}}>
                        
                        <div>
                            Upon your form submission,
                            <ul>
                                <li> - A short English proficiency test (10 mins) </li>
                                <li> - A coding challenge (1 hour) </li>
                                <li> - A live technical interview with our experts (1 hour) </li>
                            </ul>
                        </div>   
                    </Typography>

                    <Typography style={{color:"white"}}>
                        <a><u>Sign up and be a step closer to joining our tech base.</u></a>
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} 
            
                sm={8} 
                md={6} 
                component={Paper} 
                elevation={6} 
                square
                className={classes.formContainer}>

                <Box
                    sx={{
                    my: 8,
                    mx: 7,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    }}
                >
                    <Typography style={{color:"black", marginBottom:"3em"}} >
                        <p style={{fontSize:"32px", fontWeight:"500"}}>KJK.Africa Tech Talents</p>
                        <p component variant="h4">Apply to join our Ecosystem</p>
                    </Typography>

                    <Box component="form" >
                        <Grid container spacing={2} style={{marginBottom:'15px'}} >
                            <Grid container item xs={6} direction="column" >
                            <InputLabel>First Name</InputLabel>
                                <TextField className={classes.textfield} id="filled-basic"  variant="filled"
                                fullWidth
                                id="first name"
                                name="firstname"
                                onChange={handleChange}
                                value={formValues.firstname}
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                            <p className={classes.error}>{formErrors.firstname}</p>                 
                            </Grid>
                        
                            <Grid container item xs={6} direction="column">
                                <InputLabel>Last Name</InputLabel>
                                <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                    fullWidth
                                    name="lastname"
                                    value={formValues.lastname}
                                    id="Last Name"
                                    onChange={handleChange}
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <p className={classes.error}>{formErrors.lastname}</p> 
                            </Grid>
                        </Grid>

                        <Grid container style={{marginBottom:'15px'}} >
                            <InputLabel>Email Address</InputLabel>
                            <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                fullWidth
                                id="email"
                                name="email"
                                onChange={handleChange}
                                value={formValues.email}
                                type="email"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <p className={classes.error}>{formErrors.email}</p>           
                        </Grid>
                            
                        <Grid container style={{marginBottom:'15px'}}>
                        <InputLabel>City / Country</InputLabel>
                            <TextField
                                fullWidth
                                id="filled-select-country"
                                select
                                onChange={handleChange}
                                name="select"
                                value={formValues.select}
                                SelectProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                                >
                                {countries.map((option) => (
                                    <option key={option.value} value={option.value}>
                                    {option.label}
                                    </option>
                                ))}
                            </TextField>
                            <p className={classes.error}>{formErrors.select}</p>
                        </Grid>

                        <Grid container style={{marginBottom:'15px'}} >
                            <InputLabel>Password </InputLabel>
                            <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                fullWidth
                                id="password"
                                name="password"
                                onChange={handleChange}
                                values={formValues.password}
                                type="password"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <p className={classes.error}>{formErrors.password}</p>           
                        </Grid>

                        <Grid style={{marginBottom:'15px'}} >
                            <div className={classes.checkbox}>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Agree to KJK Africa's Terms and conditions?"
                                onChange={handleChange}
                                name="check"
                                value="check"
                            />
                            </div>
                            
                            <div className={classes.checkbox}>
                                <Button style={{background:"#233E8B", color:"white", textTransform:"capitalize"}}
                                    type="submit"
                                    onClick={handleSubmit}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                            </div> 

                            <div className={classes.login}>
                                <Typography>
                                    Already have an account? <span style={{color:"#233E8B"}}><a>LOG IN</a></span>
                                </Typography>
                            </div>
                        </Grid>

                        {
                            Object.keys(formErrors).length === 0 && isSubmit && (
                                modal &&(<Modal handleSubmit={handleSubmit}/>) 
                            ) 
                        }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}
export default SignIn;