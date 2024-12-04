import React from "react";

function About() {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <img src="assets/images/about-us.jpg" alt="" style={{height:"328px",width:"100%"}} />
          </div>
          <div className="col-lg-6">
            <h3 className="mb-3">About ME</h3>
            <h6>My primary expertise includes:</h6>
            <p className="mb-1 mt-2" style={{textAlign:"justify"}}>
            Hi there! I'm Jhon, a passionate software developer with [X] years of experience in building scalable and efficient applications. I specialize in full-stack web development, and I'm always excited about learning new technologies and solving complex problems.
            I am passionate about clean code, code reviews, and the importance of testing. Outside of coding, I love exploring the latest trends in technology, contributing to open-source projects, and collaborating with other developers to learn and grow together.
            I thrive on challenges and am always looking for opportunities to push my skills to the next level while building products that make a real-world impact.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <ul className="social-icons mt-2">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h1 className="mb-3 mt-5">Team Members</h1>
        <hr className="mb-5" />

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4 pb-3">
              <img src="assets/images/team-1.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">Alice Johnson</h2>
                <h5 className="mb-2">Full Stack Developer</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <img src="assets/images/team-2.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">Robert Smith</h2>
                <h5 className="mb-2">Frontend Engineer</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <img src="assets/images/team-3.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">Sophia Lee</h2>
                <h5 className="mb-2">Backend Developer</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <img src="assets/images/team-4.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">Michael Brown</h2>
                <h5 className="mb-2">DevOps Engineer</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <img src="assets/images/team-5.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">Emily Davis</h2>
                <h5 className="mb-2">Software Architect</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-4">
              <img src="assets/images/team-6.jpg" alt="" style={{height:"440px"}} />
              <div className="card-body p-3">
                <h2 className="mb-1">James Wilson</h2>
                <h5 className="mb-2">QA Engineer</h5>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
