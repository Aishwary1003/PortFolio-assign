import React from "react";
import {motion} from "framer-motion"

import ExperCard from "./ExperCard";

const Experience = ({data}) => {
  const experience=data?.user?.timeline.filter((object)=>{return object.forEducation=== false;});
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         {experience.map((object)=>{return <ExperCard object={object}/>})}
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
