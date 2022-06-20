import './App.css';
import Hobbies from './Hobbies';
import AboutMe from './AboutMe';
import FrontEndSkills from './FrontEndSkills';
import BackEndSkills from './BackEndSkills';
import Projects from './Projects';
import Certificates from './Certificates';
import Education from './Education';

function App() {
  return (
    <div className="App">
        <div className='left'>
          <AboutMe/>
          <Hobbies/>
        </div>

        <div className='right'>
          <div className='skill-set'>
            <FrontEndSkills/>
            <BackEndSkills/>
          </div>
          <div className='background'>
            <Education/>
            <Certificates/>
          </div>
          <Projects/>
        </div>
    </div>
  );
}

export default App;
