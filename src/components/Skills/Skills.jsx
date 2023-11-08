//
import HTML from '@/assets/html.png'
import CSS from '@/assets/css.png'
import JavaScript from '@/assets/javascript.png'
import ReactImg from '@/assets/react.png'
import Node from '@/assets/node.png'
import Tailwind from '@/assets/tailwind.png'

//
const skillList = {
  HTML,
  CSS,
  JavaScript,
  React: ReactImg,
  Node,
  Tailwind
}

const SkillItem = ({ iconSRC, text }) => {
  return (
    <div className='shadow-md transition-transform hover:scale-105 duration-500 dark:shadow-gray-950'>
      <img className='w-20 mx-auto' src={iconSRC} alt="HTML" />
      <p className='my-4'>{text}</p>
    </div>
  )
}

//
const Skills = () => {
  return (
    <div name='Skills' className='w-full h-screen bg-[#fafbfc] font-bold dark:text-gray-300 dark:bg-[#0f0f0f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4'>Skills</p>
          <p className='py-4'>In recent times, I have been using the following tools for development.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          {Object.entries(skillList).map(([key, value]) => {
            return <SkillItem key={key} iconSRC={value} text={key}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
