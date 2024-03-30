import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

import Experience from "./Experience"

const Resume = ({data}) => {
 
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
  
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className=" flex">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) 
              
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) 
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          
        </ul>
      </div>
      {educationData && <Education data={data}/>}
      {skillData && <Skills data={data}/>}
     
      {experienceData && <Experience data={data}/>}
 
    </section>
  );
}

export default Resume