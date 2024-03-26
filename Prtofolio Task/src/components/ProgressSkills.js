import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = (props) => {
  const { progressData } = props;
  return (
    <>
      {progressData.map((progress) => {
        return (
          <div key={progress.id}>
            <p>{progress.skill}</p>
            <ProgressBar  variant="black" now={progress.progress} />
          </div>
        );
      })}
    </>
  );
};

export default Progress;
