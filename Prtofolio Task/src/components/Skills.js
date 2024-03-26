import Progress from "./ProgressSkills";
import { progressData } from "./data";
const Skills = () => {
  return (
    <>
      <div className="my-skills bg-secondary  p-4">
        <h1 className="text-center">Skills</h1>
        <p className="w-75 m-auto">
          Proficient in responsive design principles and experienced in
          implementing cross-browser compatibility. Aiming to take on new
          challenges and utilize my coding and debugging skills for developing
          new features and enhance the overall user experience.
        </p>
        <div className="my-skills-info container ">
            <div className="row justify-content-evenly mt-5">
               <div className="col-10 col-md-4 text-center" >
                <h3>My Focus</h3><hr className="w-100"/>
                <p>Html</p>
                <p>NodeJs</p>
                <p>Js</p>
                <p>React Js</p>
               </div>
               <div className="my-progress col-10 col-md-6 ">
                <Progress progressData={progressData}/>
               </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
