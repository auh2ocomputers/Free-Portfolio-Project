import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import aboutImage from "../resources/about-image.png";

const mySkills = process.env.REACT_APP_MY_SKILLS.split(",")
const myEducation = process.env.REACT_APP_MY_EDUCATION.split(",")
const myCertifications = process.env.REACT_APP_MY_CERTIFICATIONS.split(",")
const aboutMeParagraph = process.env.REACT_APP_ABOUT_ME_PARAGRAPH

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {mySkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        {myEducation.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        {myCertifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="pt-16"  id="about">
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center my-16 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={aboutImage} alt="Computer Desk" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {aboutMeParagraph}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutSection;
