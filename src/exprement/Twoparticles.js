import P1 from "./P1";
import P2 from "./P2";
import P3 from "../components/P3";
import bgImage from './background-bubble-header.PNG';

function Twoparticles()
{
     return(
          
          <div style={{backgroundImage:'./background-bubble-header.PNG', height:"100vh", width:"100%"}}>
          <P3  />
          <img src={bgImage}/>
          {/* <P2 /> */}
          {/* <P1 /> */}

               </div>
          
     )
}

// export default Twoparticles;