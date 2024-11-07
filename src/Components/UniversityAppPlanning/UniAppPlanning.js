import React from 'react';
// import Snowfall from 'react-snowfall';
import './UniAppPlanning.css';
import { useNavigate } from 'react-router-dom';
import HomeBackground from "../../Assets/HomeBackground.mp4";


const UniAppPlanning = () => {
  const navigate = useNavigate();

  const handleFormPage = () => {
    navigate('/universityApp/form');
  };
  return (
      <div className="app-container">

          <div className="video-container">
              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="background-video"
              >
                  <source
                      src={HomeBackground}
                      type="video/mp4"
                  />
                  Your browser does not support the video tag.
              </video>

              <div className="video-overlay"/>
          </div>

          {/*/!* Snowfall effect *!/*/}
          {/*<Snowfall snowflakeCount={200} style={{position: 'fixed', width: '100%', height: '100%'}}/>*/}

          {/* Main content */}
          <div className="content">
              <h1 className="animated-text">It's not too late yet to achieve your dreams</h1>
              <div className='snow-button'
                   whileHover={{scale: 1.1}}
                   whileTap={{scale: 0.9}}
                   onClick={handleFormPage}
                   initial={{opacity: 0, y: 50}}
                   animate={{opacity: 1, y: 0}}
                   transition={{duration: 1, delay: 5}}
                   style={{marginBottom: '20px'}}
              >
                  How does our game Work
              </div>


          </div>
      </div>
  );
};

export default UniAppPlanning;
