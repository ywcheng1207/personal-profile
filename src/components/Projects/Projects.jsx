import mountain from '@/assets/mountain-sceenshot.jpg'
import gptClone from '@/assets/gpt-screenshot.JPG'

//
const Projects = () => {
  return (
    <div name='Projects' className="w-full min-h-screen py-32  bg-[#FAFBFC] dark:bg-[#0f0f0f] ">
      <div className=" max-w-[1000px] mx-auto px-4 flex flex-col">
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-200 text-gray-400'>Projects</p>
          <p className='py-4 font-bold text-gray-400'>Here are the side projects I've been working on recently.</p>
        </div>
        {/* p1 */}
        <div className='flex flex-col-reverse mt-5 sm:flex-row sm:gap-5 dark:text-white'>
          <div className='flex items-center justify-center mt-3'>
            <img src={mountain} alt="mountain" className='sm:max-w-md'/>
          </div>
          <div className='w-full flex flex-col gap-3'>
            <p className='text-lg text-gray-400 border-b-2 pb-1 font-bold dark:text-gray-300 md:text-2xl'>登山小站 (Team)</p>
            <p className='text-gray-400 px-3'>React</p>
            <p className='text-gray-400 px-3'>CSS Modules</p>
            <p className='text-gray-400 px-3'>Axios</p>
            <p className='text-gray-400 px-3'>sweetalert2</p>
            <div className='text-gray-700 mt-5 flex gap-3'>
              <a href="https://magic9701.github.io/into-mountain/" target="_blank" className='btn' rel="noreferrer">DEMO</a>
              <a href="https://github.com/magic9701/into-mountain" target="_blank" className='btn' rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
        {/* p2 */}
        <div className='flex flex-col-reverse mt-10 sm:flex-row-reverse sm:gap-5 dark:text-white'>
          <div className='flex items-center justify-center mt-3'>
            <img src={gptClone} alt="gptClone" className='sm:max-w-md'/>
          </div>
          <div className='w-full flex flex-col gap-3'>
            <p className='text-lg text-gray-400 border-b-2 pb-1 font-bold dark:text-gray-300 md:text-2xl'>Simplified ChatGPT (Personal)</p>
            <p className='text-gray-400 px-3'>React</p>
            <p className='text-gray-400 px-3'>styled-components</p>
            <p className='text-gray-400 px-3'>Redux Toolkit</p>
            <p className='text-gray-400 px-3'>RTK Query</p>
            <p className='text-gray-400 px-3'>Material UI</p>
            <p className='text-gray-400 px-3'>GSAP</p>
            <div className='text-gray-700 mt-5 flex gap-3'>
              <a href="https://illustrious-dasik-a7c21d.netlify.app/" target="_blank" className='btn' rel="noreferrer">DEMO</a>
              <a href="https://github.com/ywcheng1207/gpt-frontend-project" target="_blank" className='btn' rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
