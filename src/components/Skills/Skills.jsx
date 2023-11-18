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
import { IoLogoSass } from 'react-icons/io'
import { SiMongodb, SiExpress, SiRedux, SiAxios } from 'react-icons/si'
import { RiBootstrapLine } from 'react-icons/ri'

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
        <div className='w-full flex flex-wrap gap-4 text-center py-8'>
          <div data-aos="flip-down"
            title='HTML'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={HTML} alt="HTML" title='HTML'/>
          </div>
          <div data-aos="flip-up"
            data-aos-delay="200"
            title='CSS'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={CSS} alt="CSS" title='CSS'/>
          </div>
          <div data-aos="flip-down"
            data-aos-delay="400"
            title='Sass'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <IoLogoSass className='w-10 h-10 mx-auto group-hover:scale-110' color='#CC6699' title='Sass'/>
          </div>
          <div data-aos="flip-down"
            data-aos-delay="600"
            title='JavaScript'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={JavaScript} alt="JavaScript" title='JavaScript'/>
          </div>
          <div data-aos="flip-up"
            data-aos-delay="800"
            title='React'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={ReactImg} alt="ReactImg" title='React' />
          </div>
          <div data-aos="flip-up"
            data-aos-delay="1000"
            title='Redux'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <SiRedux className='w-10 h-10 mx-auto group-hover:scale-110' color='#472C70' title='Redux'/>
          </div>
          <div data-aos="flip-up"
            data-aos-delay="1200"
            title='Bootstrap'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <RiBootstrapLine className='w-10 h-10 mx-auto group-hover:scale-110' color='#7718F6' title='Bootstrap' />
          </div>
          <div data-aos="flip-up"
            data-aos-delay="1400"
            title='Tailwind'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={Tailwind} alt="Tailwind" title='Tailwind' />
          </div>
          <div data-aos="flip-down"
            data-aos-delay="1600"
            title='Node'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <img className='w-10 h-10 mx-auto group-hover:scale-110' src={Node} alt="Node" title='Node'/>
          </div>
          <div data-aos="flip-down"
            data-aos-delay="1800"
            title='Express'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <SiExpress className='w-10 h-10 mx-auto group-hover:scale-110' title='Express'/>
          </div>
          <div data-aos="flip-up"
            data-aos-delay="2000"
            title='MongoDB'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <SiMongodb className='w-10 h-10 mx-auto group-hover:scale-110' color='#3EA346' title='MongoDB'/>
          </div>
          <div data-aos="flip-down"
            data-aos-delay="2200"
            title='Axios'
            className='border-2 border-gray-200 rounded-full h-20 w-20 flex justify-center items-center group'>
            <SiAxios className='w-10 h-10 mx-auto group-hover:scale-110' color='#894798' title='Axios'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
