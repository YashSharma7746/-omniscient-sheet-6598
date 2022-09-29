import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Search2Icon} from "@chakra-ui/icons";
import {Box} from "@chakra-ui/react";
const Navbar = () => {
    return <Box style={{width:"100%", display:"flex", flexWrap:"nowrap",justifyContent:"space-between", borderBottom:"0.1rem solid #DCDEDD",}}>
        <Box style={{paddingLeft:"2.4rem", paddingTop:"1.2rem", paddingBottom:"1.2rem",display:"flex",gap:"20px"}}>
            <Link to="/discover">Discover</Link>
            <Link to="/starting">Start a Project</Link>
        </Box>
        <Box style={{paddingTop:"1rem", paddingBottom:"1rem",fontSize:"1.5rem"}}>
            <NavLink to="/" style={{fontWeight:"bolder",color:"green"}}>KICKSTARTER</NavLink>
        </Box>
        <Box style={{paddingRight:"2.4rem", paddingTop:"1.2rem", paddingBottom:"1.2rem",display:'flex',gap:"20px"}}>
            <Link>Search <Search2Icon w={3}/></Link>
            <Link to="/login">Login</Link>
        </Box>
    </Box>
}

export default Navbar;