import {Box, Heading} from "@chakra-ui/react";
//<img src="https://cdn.optimizely.com/img/14069890047/efeeb04eb14c4a70a1b3ac360ea795d2.png" alt="background"/> height:"334px",width:"136px"
function FirstDiv(){
    return <>
    <Box position={"relative"}>
    <Box pos="absolute" left={"0"} width="136px" zIndex={"-1"} height="334px" backgroundImage={"url('https://cdn.optimizely.com/img/14069890047/72ae3620b85d48c1878cbe4d0866665d.png')"}></Box>
      <Box paddingLeft={"60px"} paddingRight="60px">
        <div style={{textAlign:"center"}}>
        <Heading marginTop={"3rem"} marginBottom="3rem" fontWeight={"light"}>Bring a creative project to life.</Heading>
        <Heading marginBottom={"1.2rem"} fontWeight="lighter" as='h6' size='xs'>ON KICKSTARTER:</Heading>
        </div>
        <div style={{zIndex:"1",paddingRight:"3.8rem",paddingLeft:"3.8rem"}} >
          <ul style={{zIndex:"1",backgroundColor:"white",boxShadow:"0 2px 6px 0 rgb(0 0 0 / 17%)",display:"flex",listStyle:"none",textAlign:"center",justifyContent:"space-between",whiteSpace:"nowrap"}}>
            <li style={{paddingTop:"1rem",paddingBottom:"1rem",paddingRight:"2.4rem",paddingLeft:"2.4rem",flex:"1",border:"0.1rem solid #DCDEDD"}}>
              <h3 style={{color:"#037362",fontSize:"2.4rem",lineHeight:"4.2rem"}}>227,224</h3>
              <h4 style={{color:"#65696",fontSize:"1rem"}}>projects funded</h4>
            </li>
            <li style={{paddingTop:"1rem",paddingBottom:"1rem",paddingRight:"2.4rem",paddingLeft:"2.4rem",flex:"1",borderBottom:"0.1rem solid #DCDEDD",borderTop:"0.1rem solid #DCDEDD"}}>
              <h3 style={{color:"#037362",fontSize:"2.4rem",lineHeight:"4.2rem"}}>$6,261,528,416</h3>
              <h4 style={{color:"#65696",fontSize:"1rem"}}>towards creative work</h4>
            </li>
            <li style={{paddingTop:"1rem",paddingBottom:"1rem",paddingRight:"2.4rem",paddingLeft:"2.4rem",flex:"1",border:"0.1rem solid #DCDEDD"}}>
              <h3 style={{color:"#037362",fontSize:"2.4rem",lineHeight:"4.2rem"}}>69,910,097</h3>
              <h4 style={{color:"#65696",fontSize:"1rem"}}>pledges</h4>
            </li>
          </ul>
        </div>
      </Box>
      <Box pos="absolute" right={"0"} width="173px" marginTop={"-19rem"} height="353px" zIndex={"-1"} backgroundImage={"url('https://cdn.optimizely.com/img/14069890047/efeeb04eb14c4a70a1b3ac360ea795d2.png')"}></Box>
    </Box>
    </>
}

export default FirstDiv;