import React from "react";
import { Link } from "react-router-dom";

function SamplePostSection() {
  return (
    <>
      <section className="sample_post">
        <div className="sample_post_div">
          <h1 className="samplepost">
            Man must explore, and this is exploration at its greatest
          </h1>
          <p className="under__samplepost">
            Problems look mighty small from 150 miles up
          </p>
          <p className="posted__">
            Posted by{" "}
            <Link className="bootstrap__">
              Start Bootstrap
            </Link>{" "}
            on August 24, 2023
          </p>
        </div>
      </section>
    </>
  );
}

export default SamplePostSection;
