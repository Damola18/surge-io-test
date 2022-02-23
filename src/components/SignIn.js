import { Box, Button, Checkbox, CssBaseline,FormControlLabel, FormGroup, Grid, makeStyles,Paper,TextField, ThemeProvider, Typography } from '@material-ui/core'
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
                        <Grid container spacing={2} >
                            <Grid container item xs={6} direction="column" >
                                <TextField className={classes.textfield} id="filled-basic" label="Filled" variant="filled"
                                margin="normal"
                                fullWidth
                                id="first name"
                                label="First Name"
                                name="First Name"
                                autoFocus
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />                   
                            </Grid>
                        
                            <Grid container item xs={6} direction="column" >
                                <TextField className={classes.textfield} id="filled-basic" label="Filled" variant="filled"
                                    margin="normal"
                                    fullWidth
                                    name="Last Name"
                                    label="Last Name"
                                    id="Last Name"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />   
                            </Grid>
                        </Grid>

                        <Grid container>
                            <TextField className={classes.textfield} id="filled-basic" label="Filled" variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="first name"
                                    label="Email Address"
                                    name="Email Address"
                                    type="email"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />           
                        </Grid>
                            
                        <Grid container>
                            <TextField className={classes.textfield} id="filled-basic" label="Filled" variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="first name"
                                    label="City / Country"
                                    name="city"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />           
                        </Grid>

                        <Grid container>
                            <TextField className={classes.textfield} id="filled-basic" label="Filled" variant="filled"
                                    margin="normal"
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />           
                        </Grid>

                        <Grid>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="filled-select-country"
                            select
                            label="City / Country"
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

                            
                            <div className={classes.checkbox}>
                                <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Agree to KJK Africa's Terms and conditions?"
                            />
                            </div>
                            
                            <div className={classes.checkbox}>
                                <Button style={{background:"#233E8B", color:"white", textTransform:"capitalize"}}
                                    type="submit"
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
                    </Box>


                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}
export default SignIn;