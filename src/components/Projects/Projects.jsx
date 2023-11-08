import mountain from '@/assets/mountain-sceenshot.jpg'
import gptClone from '@/assets/gpt-screenshot.JPG'

//
const Projects = () => {
  return (
    <div name='Projects' className="w-full min-h-screen flex justify-center items-center bg-[#FAFBFC] dark:bg-[#0f0f0f] ">
      <div className="max-w-screen-lg mx-auto mt-10 flex flex-col gap-20">
        {/* p1 */}
        <div className='md:flex gap-5 dark:text-white'>
          <div className='flex items-center justify-center'>
            <img src={mountain} alt="mountain" className='max-w-md'/>
          </div>
          <div className=' p-5 w-full flex flex-col gap-3'>
            <p className='text-2xl text-gray-500 border-b-2 pb-1 font-bold dark:text-gray-300'>登山小站 (Team)</p>
            <p className='text-gray-400 px-3'>React</p>
            <p className='text-gray-400 px-3'>CSS Modules</p>
            <p className='text-gray-400 px-3'>Axios</p>
            <p className='text-gray-400 px-3'>sweetalert2</p>
            <div className='text-gray-700 mt-5 flex gap-3'>
              <a href="https://magic9701.github.io/into-mountain/" target="_blank" className='bn32' rel="noreferrer">DEMO</a>
              <a href="https://github.com/magic9701/into-mountain" target="_blank" className='bn32' rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
        {/* p2 */}
        <div className='md:flex gap-5 sm:flex-row-reverse dark:text-white'>
          <div className='flex items-center justify-center' >
            <img src={gptClone} alt="gptClone" className='max-w-md'/>
          </div>
          <div className='p-5 w-full flex flex-col gap-3'>
            <p className='text-2xl text-gray-500 border-b-2 pb-1 font-bold dark:text-gray-300'>Simplified ChatGPT (Personal)</p>
            <p className='text-gray-400 px-3'>React</p>
            <p className='text-gray-400 px-3'>styled-components</p>
            <p className='text-gray-400 px-3'>Redux Toolkit</p>
            <p className='text-gray-400 px-3'>RTK Query</p>
            <p className='text-gray-400 px-3'>Material UI</p>
            <p className='text-gray-400 px-3'>GSAP</p>
            <div className='text-gray-700 mt-5 flex gap-3'>
              <a href="https://illustrious-dasik-a7c21d.netlify.app/" target="_blank" className='bn32' rel="noreferrer">DEMO</a>
              <a href="https://github.com/ywcheng1207/gpt-frontend-project" target="_blank" className='bn32' rel="noreferrer">CODE</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
