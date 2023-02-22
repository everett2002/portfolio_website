
import './App.css';
import Navbar from './components/navbar';
import Maincard from './components/maincard';
import Profile from './images/profile.png';
import ProjectEntry from './components/projectentry';
<script src="https://kit.fontawesome.com/063330461c.js" crossorigin="anonymous"></script>

function App() {

  function showCollapsible() {
    const element = document.getElementsByClassName("collapsible-navbar")[0];

    element.classList.remove("hide-navbar");
    element.classList.add("show-navbar");
  }

  function hideCollapsible() {
    const element = document.getElementsByClassName("collapsible-navbar")[0];

    element.classList.add("hide-navbar");
    element.classList.remove("show-navbar");
  }

  return (

    <div className="App">


      <body className='website-container'>
        <div className='collapsible-navbar'>
          <div onClick={hideCollapsible} className='collapsible-element close-button'>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div className='collapsible-element' onClick={hideCollapsible}><a href="#about">About</a></div>
          <div className='collapsible-element' onClick={hideCollapsible}><a href="#projects">Projects</a></div>
        </div>


        <div id='front-page' >

          <container className='navbar-background'>
            <h3 className='test-text'>./everett_ho</h3>
            <container className="navbar-container">
              <Navbar showCollapsible={showCollapsible} />

            </container>
          </container>
          <Maincard />

        </div>

        <div id="about">
          <container className="about-container">
            <img className='profile-picture' src={Profile} alt="Profile Picture" />
            <container className="about-text">
              <h2 className='about-header'>About Me</h2>
              <p>Hello there! I'm Everett and welcome to my website:) Here I post fun projects I'm currently working on and more about me as well!</p>
              <p>For My my experience please check out my Linkedin!</p>
            </container>
          </container>
        </div>



        <div id='projects'>
          <h2 className='projects-header'>Projects</h2>

          <container class="project-entries">
            <ProjectEntry />
            <div class="project-ender">
              <p>More Projects Coming Soon...</p>
            </div>
          </container>
        </div>

        <div className="large-divider"></div>
        <div className="large-divider"></div>

        <div className="credits">Everett &copy; 2023</div>


      </body>

    </div>
  );
}

export default App;
