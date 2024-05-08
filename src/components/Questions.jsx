import React from 'react'
import AccordionItem from './AccordionItem'
import { accordionData } from '../utils/content/questions'

const Questions = () => {
  return (
    <div className='bg-[#E8EEE7] rounded-[40px] text-[#1C1C1C] flex items-start justify-center pt-[68px] font-manrope'>

        <div className='flex flex-col items-center justify-start w-[50%]'>
            <div className='mr-[23%]'>
              <p className='text-[#9E9D9D] text-[32px] font-grace'>What's on your mind</p>
              <h4 className='manrope text-[60px] font-semibold'>Ask Questions</h4>
            </div>
            <img className='mr-auto max-w-[75%]' src="/assets/arrow-white.png" alt="arrow"/>
        </div>

        <div className='flex items-start justify-end w-[50%] pt-[60px] mr-20'>
            <div className="accordion w-full max-w-[600px]">
                {accordionData.map(({ title, content }) => (
                <AccordionItem title={title} content={content} />
                ))}
            </div>
        </div>

    </div>
  )
}

export default Questions