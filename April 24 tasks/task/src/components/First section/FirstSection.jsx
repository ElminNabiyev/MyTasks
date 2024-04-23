import React from "react";
import "./FirstSection.css";
function FirstSection() {
  return (
    <div>
      <section className="first_section">
        <div className="all_content">
          <div className="contents">
            <div className="wites">
              <h1>We Help Grow Your Business</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="btns">
              <button className="btn1">Contact Us</button>
              <button className="btn2">Watch the video</button>
            </div>
          </div>
          <div className="img">
            <img
              className="img_itm"
              src="https://preview.colorlib.com/theme/financier/images/img_6.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid">
          <div className="on_time_service">
            <h3>On Time Service</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="on_time_service">
            <h3>On Time Service</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="on_time_service">
            <h3>On Time Service</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FirstSection;
