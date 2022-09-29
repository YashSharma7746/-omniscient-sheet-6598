import {Box} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Section(){
    return <Box w={"100%"} style={{borderBottom:"0.1rem solid #DCDEDD"}}>
        <Box pl={"200px"} pr={"200px"} style={{justifyContent:"space-between"}}>
            <ul style={{display:"flex",justifyContent:"center",paddingTop:"15px",paddingBottom:"15px",listStyle:"none",gap:"50px"}}>
                <li><Link>Arts</Link></li>
                <li><Link>Comics & Illustration</Link></li>
                <li><Link>Design & Tech</Link></li>
                <li><Link>Film</Link></li>
                <li><Link>Food & Craft</Link></li>
                <li><Link>Games</Link></li>
                <li><Link>Music</Link></li>
                <li><Link>Publishing</Link></li>
            </ul>
        </Box>
    </Box>
}

export default Section;