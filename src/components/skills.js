import React from "react";
import Card from "./card";

const Skills = () => {
  return (
    <div id="cards_landscape_wrap-2">
      <div className>
        <h1 className="text-center">My Skills</h1>
      </div>
      <br></br>
      {/* Web, App, MLDL,Quant Finance, Competitive Programming, Mathematics */}
      <div className="row">
        <div className="col-4">
          <Card
            title={"Web Development"}
            imgSrc={"assets/webdev.png"}
            cardBody={"React.js, Node.js"}
          />
        </div>
        <div className="col-4">
          <Card
            title={"App Development"}
            imgSrc={"assets/appdev.png"}
            cardBody={"Flutter"}
          />
        </div>
        <div className="col-4">
          <Card
            title={"Data Science"}
            imgSrc={"assets/ml.png"}
            cardBody={"Numpy, Pandas, Pytorch, Sklearn, Tensorflow*"}
          />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-4">
          <Card
            title={"Quantitative Finance"}
            imgSrc={"assets/stocks.png"}
            cardBody={"Alpha Generation, Stochastic Calculus"}
          />
        </div>
        <div className="col-4">
          <Card
            title={"Competitive Programming"}
            imgSrc={"assets/cp.png"}
            cardBody={"CodeForces, C++"}
          />
        </div>
        <div className="col-4">
          <Card
            title={"Mathematics"}
            imgSrc={"assets/math.png"}
            cardBody={"Linear Algebra, Probability and Statisitcs"}
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
