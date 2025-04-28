import React, { useState } from "react";

function PopUp({ projectName, repoLink, video, onClick }) {
  return (
    <>
      <h1>{projectName}</h1>
      <p>{repoLink}</p>
      <video width="750" height="500" controls>
        <source src={video} type="video/mp4" />
      </video>
      <button type="button" onClick={onClick}>
        Close
      </button>
    </>
  );
}

export default PopUp;
