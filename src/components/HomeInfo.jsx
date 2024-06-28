import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img className="w-4 h-4 object-contain" src={arrow} />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm: text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Jan</span>👋
      <br />A Web developer from Czechia
    </h1>
  ),
  2: (
    <InfoBox
      link="/about"
      btnText="Learn more"
      text="I am a junior full-stack web developer, that knows his way around HTML, CSS, JavaScript, React, PHP, and Laravel. Capable of providing new ideas and new ways to approach problems. Committed to finishing assignments under pressure."
    />
  ),
  3: (
    <InfoBox
      link="/projects"
      btnText="Visit my portfolio"
      text="I am eager to learn new things. I've gained quite a lot of experience by working in multiple projects in my current job and by myself."
    />
  ),
  4: (
    <InfoBox
      link="/contact"
      btnText="Contact me"
      text="Need a project done or looking for a dev? I'm just few keystrokes away."
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
