import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Muhammad Imam Hasan</h1>
        <p>Full Stack Developer & AWS Certified Solutions Architect</p>
      </header>

      <main className="container">
        <section className="section">
          <h2>About Me</h2>
          <p>
            I'm a full-stack developer with expertise in building scalable web
            applications and serverless solutions. Proficient in Python,
            JavaScript, Ruby, Django, React, Ruby on Rails and Vue.js. AWS Certified Solutions
            Architect with hands-on experience in Lambda, DynamoDB, API Gateway,
            Cognito, AppSync, IoT Core, and DocumentDB.
          </p>
          <a href="/Muhammad Imam Hasan Full Stack Developer.pdf" className="resume-btn" target="_blank">Download Resume</a>
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">

            <div className="skill-item">
              <i className="fab fa-python skill-icon"></i>
              <span>Python</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-js skill-icon"></i>
              <span>JavaScript</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-react skill-icon"></i>
              <span>React</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-vuejs skill-icon"></i>
              <span>Vue.js</span>
            </div>
            <div className="skill-item">
              <i className="fab fa-django skill-icon"></i>
              <span>Django</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-ruby skill-icon"></i>
              <span>Ruby</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-dharmachakra skill-icon"></i>
              <span>Ruby on Rails</span>
            </div>



            <div className="skill-item">
              <i className="fab fa-aws skill-icon"></i>
              <span>AWS Architecture</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-bolt skill-icon"></i>
              <span>Lambda</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-database skill-icon"></i>
              <span>DynamoDB</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-project-diagram skill-icon"></i>
              <span>AppSync</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-shield-alt skill-icon"></i>
              <span>Cognito</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-plug skill-icon"></i>
              <span>IoT Core</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-file-alt skill-icon"></i>
              <span>DocumentDB</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Connect With Me</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/muhammad-imam-hasan/" target="_blank"
            ><i className="fab fa-linkedin"></i
            ></a>
            <a href="https://github.com/Md-Imam-Hasan" target="_blank"
            ><i className="fab fa-github"></i
            ></a>
            <a href="https://x.com/imamhasan114192" target="_blank"
            ><i className="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://hikmah.net/@imamhasan0007" target="_blank"
            >Hikmah</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
