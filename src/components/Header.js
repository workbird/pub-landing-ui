import './Header.css';
import Particles from "react-tsparticles";
import P3 from '../components/P3';
import bgImage from '../img/background-bubble-header.PNG';


const Header = () => {
  const particlesInit = (main) => {
    console.log(main);

    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };



  return (
    // style={{backgroundImage:`url(${bgImage})`}}
    <section id='header' className='h-100 p-0' style={{ backgroundColor: "#000", height: "100vh" }} >
      {/* <P3 className='h-100' style={{minHeight:"200vh"}} /> */}

      <div id='left-header' className='h-100' style={{ height: "100vh" }}>
        {/* <img src={bgImage} /> */}
        <div className='main-area h-100'></div>
        <div className='bottom-area h-25'>
          <div className='text-white d-flex flex-sm-column flex-xl-row  justify-content-md-around justify-content-xl-end me-5 pe-5 py-2 h-100'>
            <div className='mp mx-5  d-flex flex-column text-justify'>
              <h3>Heading 1</h3>
              <p className='' >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className='mp mx-5 d-flex flex-column text-justify '>
              <h3>Heading 2</h3>
              <p className='' >Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's</p>            </div>
          </div>
        </div>
        <div></div>
        <div>

        </div>
      </div>

      <div id='right-header'>
        <div id='scroll-indicator' style={{ background: "red", marginTop: "200px" }} className='h-25 mx-5'></div>
      </div>

    </section>
  )
};

export default Header;