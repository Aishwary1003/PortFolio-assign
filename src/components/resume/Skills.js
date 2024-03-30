import React from 'react'
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const Skills = ({data}) => {
  const skills=data?.user?.skills;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
     

      <div className="w-full ">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
        </div>
       


        <div className='flex flex-wrap '>
        {skills.map((object)=>{return <SkillCard object={object}/>})}
        </div>
               


      </div>
    </motion.div>
  );
}

export default Skills