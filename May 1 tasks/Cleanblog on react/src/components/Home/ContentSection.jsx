import React from "react";
import { Link } from "react-router-dom";

function ContentSection() {
  return (
    <>
      <section className="content__section">
        <div className="general__content__div">
          <div className="general__content__item">
            <h2>
              <Link className="man">
                Man must explore, and this is exploration at its greatest
                <p className="underman">
                  Problems look mighty small from 150 miles up
                </p>
              </Link>
            </h2>
            <p className="posted">
              Posted by <Link className="bootstrap">Start Bootstrap</Link> on
              September 24, 2023
            </p>
            <hr></hr>
          </div>
          <div className="general__content__item">
            <h2>
              <Link className="man">
                I believe every human has a finite number of heartbeats. I don't
                intend to waste any of mine.
              </Link>
            </h2>
            <p className="posted">
              Posted by <Link className="bootstrap">Start Bootstrap</Link> on
              September 18, 2023
            </p>
            <hr></hr>
          </div>
          <div className="general__content__item">
            <h2>
              <Link className="man">
                Science has not yet mastered prophecy
                <p className="underman">
                  We predict too much for the next year and yet far too little
                  for the next ten.
                </p>
              </Link>
            </h2>
            <p className="posted">
              Posted by <Link className="bootstrap">Start Bootstrap</Link> on
              August 24, 2023
            </p>
            <hr></hr>
          </div>
          <div className="general__content__item">
            <h2>
              <Link className="man">
                Failure is not an option{" "}
                <p className="underman">
                  Many say exploration is part of our destiny, but it’s actually
                  our duty to future generations.
                </p>
              </Link>
            </h2>
            <p className="posted">
              Posted by <Link className="bootstrap">Start Bootstrap</Link> on
              July 8, 2023
            </p>
            <hr></hr>
          </div>
          <div className="general__content__button">
            <Link className="older__posts">OLDER POSTS →</Link>
          </div>
        </div>
        <hr></hr>
      </section>
    </>
  );
}

export default ContentSection;
