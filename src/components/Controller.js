// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Collapse from '@mui/material/Collapse';
// import AppBar from '@mui/material/AppBar';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import OutlinedInput from '@mui/material/OutlinedInput'; 
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import { Link as Scroll } from 'react-scroll'; 
// import { useNavigate } from 'react-router-dom';

//             {/* <button onclick="moveup()">UP</button>
//             <button onclick="movedown()">DOWN</button>
//             <button onclick="moveleft()">LEFT</button>
//             <button onclick="moveright()">RIGHT</button> */}
  
// export default function Panel({setStatus}:{setStatus:any}) {
  
//     function component(width, height, color, x, y) {
//         this.width = width;
//         this.height = height;
//         this.speedX = 0;
//         this.speedY = 0;
//         this.x = x;
//         this.y = y;
//         this.update = function() {
//           ctx = myGameArea.context;
//           ctx.fillStyle = color;
//           ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//         this.newPos = function() {
//           this.x += this.speedX;
//           this.y += this.speedY;
//         }
//       }
      
//       function updateGameArea() {
//         myGameArea.clear();
//         myGamePiece.newPos();
//         myGamePiece.update();
//       }
      
//       function moveup() {
//         myGamePiece.speedY -= 1;
//       }
      
//       function movedown() {
//         myGamePiece.speedY += 1;
//       }
      
//       function moveleft() {
//         myGamePiece.speedX -= 1;
//       }
      
//       function moveright() {
//         myGamePiece.speedX += 1;
//       }


//     const [checked, setChecked] = useState(false);
//     useEffect(()=>{
//         setChecked(true);
//     },[])
  
//     let navigate = useNavigate();
  
//     const [values, setValues] = React.useState<State>({
//         email: '',
//         password: '',
//         showPassword: false,
//     });
  
//     const login = async () => {
//           try{
//               signInWithEmailAndPassword(
//                    auth,
//                    values.email, 
//                    values.password
//               ).then((result) => {
//                   setStatus(true);
//                   navigate("/Grid");
//               })
//           }
//           catch(error) {
//               if(error instanceof Error){
//                   console.log(error.message)
//               }
//           };
//       }
      
//       const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [prop]: event.target.value });
//       };
      
//       const handleClickShowPassword = () => {
//         setValues({
//           ...values,
//           showPassword: !values.showPassword,
//         });
//       };
    
//       const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//         event.preventDefault();
//       };
    
//     return (
     
//       <Box sx = {{minHeight: '100vh',
//                   backgroundImage: `url(${process.env.PUBLIC_URL + '/image/2.jpg'})`,
//                   backgroundRepeat: 'no-repeat',
//                   backgroundSize: 'cover',}}> 
//         <Box sx={{fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Nunito', textAlign: 'center'}}>
//           <AppBar sx={{background: 'none', color:'#fff'}} elevation={0}>
//               <Toolbar sx={{justifyContent: 'space-between', width: '80%', margin: '0 auto'}}>
//                 <h1>Team07</h1> 
//                   <IconButton sx={{fontSize: '2.5rem', color: '#fff'}}>
//                     <MenuIcon fontSize="inherit"/>
//                   </IconButton>
//               </Toolbar>
//             </AppBar>
  
//             <Collapse in = {checked} {...(checked ? { timeout: 2000 } : {})} collapsedSize={50}>
//               <Box sx={{fontSize: '2rem', color: '#fff'}}>
//                 <h1>Welcome to <br /> the Mars Rover Project</h1>
//                   <Scroll to = "Page" smooth={true}>
//                     <IconButton>
//                       <KeyboardArrowDownIcon sx={{fontSize: '4rem', color:'#fff'}}/>
//                     </IconButton>
//                   </Scroll>
//               </Box>
//             </Collapse>
//         </Box>
  
//         <Box sx={{height: '100vh'}} id = "Page">
//           <Grid container>
//             <Paper elevation={20} sx={{padding: 10, height:'50vh', width: '30vh', margin: '120px auto',alignItems:'center', justifyContent:'center'}}>
//               <Box
//                 component="img" alt="logo" src="logo2.svg"
//                 sx={{height: "6vh", width: "auto", marginBottom:"2rem"}}/>
      
//               <FormControl fullWidth variant="outlined" sx={{marginBottom:"2rem"}} id = "email"> 
//                 <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
//                   <OutlinedInput
//                       id="outlined-adornment-email"
//                       value={values.email}
//                       onChange={handleChange('email')}
//                       label="Email"/>  
//                 </FormControl>
      
//               <FormControl fullWidth variant="outlined" sx={{marginBottom:"2rem"}}>
//                 <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//                   <OutlinedInput
//                       id="outlined-adornment-password"
//                       type={values.showPassword ? 'text' : 'password'}
//                       value={values.password}
//                       onChange={handleChange('password')}
//                       endAdornment={
//                           <InputAdornment position="end">
//                               <IconButton 
//                                   aria-label="toggle password visibility"
//                                   onClick={handleClickShowPassword}
//                                   onMouseDown={handleMouseDownPassword}
//                                   edge="end">
//                                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                               </IconButton>
//                           </InputAdornment>
//                       }
//                       label="Password"/>
//               </FormControl>
  
//               <Button fullWidth variant="contained" sx={{fontFamily: 'Nunito', fontSize:'1rem', marginBottom:"2rem"}} onClick = {login}>
//                   Log in 
//               </Button>
//            </Paper>
//           </Grid> 
//         </Box>
//       </Box>
//     )
//   }

