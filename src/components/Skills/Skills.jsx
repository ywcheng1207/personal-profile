//
import HTML from '@/assets/html.png'
import CSS from '@/assets/css.png'
import JavaScript from '@/assets/javascript.png'
import ReactImg from '@/assets/react.png'
import Node from '@/assets/node.png'
import Tailwind from '@/assets/tailwind.png'

//
import { useEffect } from 'react'

//
import AOS from 'aos'
import 'aos/dist/aos.css'

//
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div name='Skills' className='w-full h-screen bg-[#fafbfc] font-bold dark:text-gray-300 dark:bg-[#0f0f0f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-200 text-gray-400'>Skills</p>
          <p className='py-4 font-bold text-gray-400'>In recent times, I have been using the following tools for development.</p>
        </div>
        <div className='w-full flex  gap-4 text-center py-8'>
          <div data-aos="flip-down"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={HTML} alt="HTML" />
          </div>
          <div data-aos="flip-up"
            data-aos-delay="200"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={CSS} alt="CSS" />
          </div>
          <div data-aos="flip-down"
            data-aos-delay="400"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={JavaScript} alt="JavaScript" />
          </div>
          <div data-aos="flip-up"
            data-aos-delay="600"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={ReactImg} alt="ReactImg" />
          </div>
          <div data-aos="flip-down"
            data-aos-delay="800"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={Node} alt="Node" />
          </div>
          <div data-aos="flip-up"
            data-aos-delay="1000"
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={Tailwind} alt="Tailwind" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
