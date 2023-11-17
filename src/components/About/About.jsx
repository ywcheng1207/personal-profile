//
import { useEffect } from 'react'

//
import AOS from 'aos'
import 'aos/dist/aos.css'

//
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div name='About' className="w-full h-screen bg-[#fafbfc] text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-300">
      <div id='about' className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-200 text-gray-400">About</p>
          </div>
          <div>
          </div>
          <div className="text-4xl font-bold text-gray-600 dark:text-gray-200">
            <p data-aos="fade-right"
            >
              Feel free to explore my work, and if you have any questions or suggestions,
               please don't hesitate to contact me.
            </p>
          </div>
          <div className="text-gray-500 dark:text-gray-300">
            <p data-aos="zoom-in" >
                Driven by my passion for web development,
              I'm fully engaged in creating comprehensive applications,
              working on both the front end and back end.
              My current objective is to refine my skills and deepen my knowledge in this field,
              in pursuit of new and challenging opportunities.
                I'm committed to continuing my professional development and making substantial contributions to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
