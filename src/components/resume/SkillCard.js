import React from 'react'
import {motion} from 'framer-motion';
const SkillCard = ({object}) => {
  return (
    <div className="w-1/2 group flex pb-2">
    <div className="w-10 h-[6px] bgOpacity mt-16 relative">
      <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
        <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
      </span>
    </div>
    <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
        <div className='flex gap-2'>
          <img src={object?.image?.url} height={50} width={50}/>
           <p className="text-sm font-semibold mt-2 text-gray-400 group-hover:text-white duration-300">
          {object?.percentage}%
          </p>
        </div>
        <div>
          <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
          {object?.name}
          </p>
        </div>
      </div>
      <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>


      <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: "-100", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className=" h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                style={{ width: `${object?.percentage}%` }}
              >
                <span className="absolute -top-7 right-0">{object?.percentage}%</span>
              </motion.span>
            </span>
    </div>
  </div>
  )
}

export default SkillCard