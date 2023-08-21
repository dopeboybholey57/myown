import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <div className='w-full flex flex-col py-20'>
        <h4 className='text-3xl font-bold text-black dark:text-white mb-10 text-center'>Technical Skills</h4>
        
        <div className='w-full flex flex-wrap gap-10 items-center justify-center '>
            {
                skills.map((skill, index)=>(
                    <div key={index} className='flex gap-4 shadow-lg py-2 px-6 bg-[#04133e} rounded-full items-center hover:animate-bounce ease-in-out duration-300'>
                        <div className='w-10 h-10'>
                            <img src={skill.icon} className='w-full h-full rounded-full'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <p className='text-md font-semibold text-white'>{skill.name}</p>
                                <p className='text-md font-semibold text-white'>{skill.value + "%" }</p>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills