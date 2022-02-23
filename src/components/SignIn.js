import {Backdrop, Box, Button, Checkbox, CssBaseline,Fade, FormControlLabel, FormGroup, Grid, InputLabel,makeStyles, Modal, Paper,TextField, ThemeProvider, Typography } from '@material-ui/core'
import React, { useState } from 'react'

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
  const [country, setCountry] = useState("")

  // Modal Triggers
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
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
                                name="First Name"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />                   
                            </Grid>
                        
                            <Grid container item xs={6} direction="column">
                                <InputLabel>Last Name</InputLabel>
                                <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                    fullWidth
                                    name="Last Name"
                                    id="Last Name"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />   
                            </Grid>
                        </Grid>

                        <Grid container style={{marginBottom:'15px'}} >
                            <InputLabel>Email Address</InputLabel>
                            <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                    fullWidth
                                    id="email"
                                    name="Email Address"
                                    type="email"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />           
                        </Grid>
                            
                        <Grid container style={{marginBottom:'15px'}}>
                        <InputLabel>City / Country</InputLabel>
                            <TextField
                                fullWidth
                                id="filled-select-country"
                                select
                                value={country}
                                onChange={handleChange}
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
                        </Grid>

                        <Grid container style={{marginBottom:'15px'}} >
                            <InputLabel>Password </InputLabel>
                            <TextField className={classes.textfield} id="filled-basic" variant="filled"
                                    fullWidth
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />           
                        </Grid>

                        <Grid style={{marginBottom:'15px'}} >
                            <div className={classes.checkbox}>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Agree to KJK Africa's Terms and conditions?"
                            />
                            </div>
                            
                            <div className={classes.checkbox}>
                                <Button onClick={handleOpen} style={{background:"#233E8B", color:"white", textTransform:"capitalize"}}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                    timeout: 500,
                                    }}
                                >
                                    <Fade in={open}>
                                    <Box sx={style}>
                                        <img className={classes.modal} src='/sentmail.svg'/>
                                        <Typography id="transition-modal-title" variant="h6" component="h6">
                                        Verification Link Sent!
                                        </Typography>
                                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                        An email has just been sent to your inbox, kindly check and click the link to proceed with your registration 
                                        </Typography>

                                        <div className={classes.checkbox}>
                                            <Button onClick={handleClose} style={{background:"#233E8B", color:"white", textTransform:"capitalize"}}
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                            >
                                                Click to verify email
                                            </Button>
                                        </div>
                                    </Box>
                                    </Fade>
                                </Modal>
                            </div> 

                            <div className={classes.login}>
                                <Typography>
                                    Already have an account? <span style={{color:"#233E8B"}}><a>LOG IN</a></span>
                                </Typography>
                            </div>
                        </Grid>
                    </Box>


                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}
export default SignIn;