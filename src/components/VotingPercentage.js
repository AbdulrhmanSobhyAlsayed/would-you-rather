import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const VotingPercentage = ({
  text,
  totalNumber,
  votingNumber,
  isUserSelection,
}) => {
  return (
    <div
      className="card d-flex justify-content-center px-4"
      style={{
        backgroundColor: isUserSelection ? "rgba(54, 251, 84, 0.3)" : "white",
      }}
    >
      <h4 className="text-center my-4">{text}</h4>
      <ProgressBar
        completed={parseFloat((votingNumber / totalNumber) * 100).toFixed(2)}
        bgColor="rgb(54, 251, 84)"
      />
      <h5 className="text-center my-4">
        {votingNumber} out of {totalNumber} votes
      </h5>
    </div>
  );
};

export default VotingPercentage;
