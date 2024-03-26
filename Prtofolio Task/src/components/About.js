import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <>
      <div className="my-about container">
        <div className="row justify-content-evenly mt-5 mb-5">
          <h1 className="col-9 col-md-4">About Me..</h1>
          <div className="col-9 col-md-7 text-secondary">
            <p>
              An enthusiastic and detail-oriented Junior Frontend Developer with
              proficient knowledge in HTML , CSS and JavaScript as well as
              third-party libraries such as jQuery and React . finished more
              than 15 projects. Proficient in responsive design principles and
              experienced in implementing cross-browser compatibility. Aiming to
              take on new challenges and utilize my coding and debugging skills
              for developing new features and enhance the overall user
              experience.
            </p>
            <Button variant="secondary"><a href="./CV_EsraaFahmy_1851710146.pdf" download>Download Resume</a></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
