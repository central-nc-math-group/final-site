import React from 'react';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';
 import HomeLogo from '../../cncm-logo.png';
import Button from '@material-ui/core/Button';
import { Link as RouterLink  } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import previousStyles from './index.css.js';

const styles = previousStyles();

class NavBar extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.nav}> 
            <AppBar position="static" className={classes.bar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                            <img src={HomeLogo} height={25} width={25} />
                            </IconButton>
                            

                            <Typography variant="h5" style={{"flexGrow": "1"}}>
                                Cyclic National Competitive Math Group
                            </Typography>

                            <div className={classes.navBtn}>

                                <Button color="inherit" component={RouterLink}>Home</Button>

                                <Button color="inherit" component={RouterLink}>Join Us!</Button>

                                <Button color="inherit" component={RouterLink}>Our Team</Button>

                                <Button color="inherit" component={RouterLink}>Problem of the Day</Button>
                               
                                <Button color="inherit" component={RouterLink}>Lectures</Button>
                            </div>   
                        </Toolbar>
                    </AppBar>	
            </div>
        )
    }
}


// const Nav = () => (
// 	<div>
// 		<NavBar />
// 	</div>
// );

// const NavBar = () => {
// 	const [anchorEl, setAnchorEl] = React.useState(null);

// 	const handleClick = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};

// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};

// 	const [pfpAnchorEl, setpfpAnchorEl] = React.useState(null);

// 	const handlePfpClick = (event) => {
// 		setpfpAnchorEl(event.currentTarget);
// 	}

// 	const handlePfpClose = () => {
// 		setpfpAnchorEl(null);
// 	}

// 	return (
// 		<div id="nav"> 
// 		 <AppBar position="static" style={{background: '#000000'}}>
//                     <Toolbar>
//                         <IconButton edge="start" color="inherit" aria-label="menu">
//                          <img src={HomeLogo} height={30} width={30} />
//                         </IconButton>
                        

//                         <Typography variant="h6">
//                             Cyclic National Competitive Math Group
//                         </Typography>

//                         <div>

//                             <Button color="inherit" component={RouterLink}>Home</Button>

//                             <Button color="inherit" component={RouterLink}>Join Us!</Button>

//                             <Button color="inherit" component={RouterLink}>Our Team</Button>

//                             <Button color="inherit" component={RouterLink}>Problem of the Day</Button>

//                             <Button 
//                                 color="inherit" 
//                                 aria-controls="simple-menu" 
//                                 aria-haspopup="true" 
//                                 onClick={handleClick}
//                             >
//                                 Our Competitions
//                             </Button>

//                             <Menu
//                                 id="competition-menu"
//                                 anchorEl={anchorEl}
//                                 keepMounted
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose} component={RouterLink}> MathBowl</MenuItem>
//                                 <MenuItem onClick={handleClose} component={RouterLink}> CRMT</MenuItem>
//                                 <MenuItem onClick={handleClose} component={RouterLink}> Past Problems</MenuItem>
//                             </Menu>

//                             <Button color="inherit" component={RouterLink}>Lectures</Button>


//                             <IconButton edge="start" color="inherit" aria-label="profile" 
//                             aria-controls="simple-menu" 
//                             aria-haspopup="true" 
//                             onClick={handlePfpClick}>
//                                 <AccountCircleIcon />
//                             </IconButton>

//                             <Menu
//                                 id="signin-menu"
//                                 anchorEl={pfpAnchorEl}
//                                 keepMounted
//                                 open={Boolean(pfpAnchorEl)}
//                                 onClose={handlePfpClose}
//                             >
//                                 <Button component={RouterLink}>Sign In</Button> <br />
//                             </Menu>


//                         </div>
                       
//                     </Toolbar>
//                 </AppBar>	
// 		</div>
// 	)
// }

export default withStyles(styles)(NavBar);
