import React from "react";

const About = () => {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h2 className="display-1">
            <span className="introspan">
              Hi, I am Kunal. I'm a final year student at IIT Guwahati
            </span>
          </h2>
          <br></br>
          <h2 style={{ fontWeight: "normal" }}>
            {/* //TODO: change the font */}I am passionate about learning new
            skills. I love exploring new technologies. I have an interest in
            finance as well. I am also an avid lawn tennis player, and have
            played in a couple of state-level tournaments.
          </h2>
        </div>
        <div className="col-4">
          <img src="assets/kkpic.png" alt="KK" className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
