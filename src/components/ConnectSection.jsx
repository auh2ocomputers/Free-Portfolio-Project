import React from "react";
import GithubIcon from "../resources/github-icon.svg";
import LinkedinIcon from "../resources/linkedin-icon.svg";
import connectImage from "../resources/collaborate.jpg"

const ConnectSection = () => {
  const githubLink = process.env.REACT_APP_GITHUB_LINK
  const linkedInLink = process.env.REACT_APP_LINKEDIN_LINK
  const connectParagraph = process.env.REACT_APP_CONNECT_PARAGRAPH
  
  return (
    <section
      id="connect"
    >
      <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-7/8 -left-4 transform -translate-x-3/4 -translate-1/2"></div>
      
      <div className="md:grid md:grid-cols-2 gap-8 items-center my-16 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            {connectParagraph}
          </p>
          <div className="socials flex flex-row gap-2">
            <a href={githubLink} target="_blank" rel="noreferrer">
              <img src={GithubIcon} alt="Github Icon" />
            </a>
            <a href={linkedInLink} target="_blank" rel="noreferrer">
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
        </div>
          
        </div>
        <img src={connectImage} alt="Computer Desk" width={500} height={500} />
      </div>

      
    </section>
  );
};

export default ConnectSection;
