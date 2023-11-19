//
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

//
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/themeSlice'

//
import ErrorMessage from '../ErrorMessage'
import ScrollToTop from '../ScrollToTop'

//
import Tick from '@/assets/tick.svg?react'

//
const Contact = () => {
  const [isSending, setIsSending] = useState(false)
  const themeState = useSelector(selectTheme)

  const validate = yup.object({
    Name: yup.string().required('Please fill in your name!'),
    Email: yup.string().email('Please enter a valid email address!').required('Please fill in the email address!'),
    Message: yup.string().max(500).required('Please fill in the message!')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validate)
  })

  const handleSendMessage = async (formData) => {
    setIsSending('sending')
    try {
      await fetch(import.meta.env.VITE_GETFORM, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      setIsSending('success')
      setTimeout(() => {
        setIsSending(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div name='Contact'
      className="relative w-full h-screen bg-[#FAFBFC] flex justify-center items-center p-4
      dark:bg-[#0f0f0f]">
      <form
        onSubmit={handleSubmit((data) => handleSendMessage(data))}
        className="flex flex-col max-w-[600px] w-full "
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200 text-gray-400">
            Contact
          </p>
          <p className="font-bold text-gray-400 py-2">
            Feel free to reach out to me for any inquiries or collaboration.
            I'm open to connecting with everyone. Let's create something amazing together!
          </p>
        </div>
        <input type="text" placeholder="Name" name="name"
          className={`p-2 focus:outline-none ${isSending === 'sending' && 'opacity-50'} 
                ${themeState.theme === 'dark' ? 'inpt-dark' : 'inpt'}`}
          {...register('Name')}
          disabled={isSending === 'sending'}
        />
        {errors.Name ? <ErrorMessage text={errors.Name.message}/> : <p className='h-4'></p>}
        <input type="text" placeholder="Email" name="name"
          className={`p-2 focus:outline-none mt-3  ${isSending === 'sending' && 'opacity-50'} 
                ${themeState.theme === 'dark' ? 'inpt-dark' : 'inpt'}`}
          {...register('Email')}
          disabled={isSending === 'sending'}
        />
        {errors.Email ? <ErrorMessage text={errors.Email.message}/> : <p className='h-4'></p>}
        <textarea name="message" rows="10" placeholder="Message"
          className={`p-2 focus:outline-none resize-none mt-3  
                ${isSending === 'sending' && 'opacity-50'} ${themeState.theme === 'dark' ? 'inpt-dark' : 'inpt'}`}
          {...register('Message')}
          disabled={isSending === 'sending'}
        />
        {errors.Message ? <ErrorMessage text={errors.Message.message}/> : <p className='h-4'></p>}
        {!isSending &&
          <button className="border-1 btn my-8 mx-auto flex items-center ease-in-out duration-300 ">
            Send
          </button>
        }
        {isSending === 'sending' &&
          <button className="border-1 btn-loading my-8 mx-auto flex items-center ease-in-out duration-300 loading opacity-30" disabled>
            Sending
          </button>
        }
        {isSending === 'success' &&
          <button className="border-1 btn-success my-8 mx-auto flex items-center ease-in-out duration-300 opacity-80" disabled>
            Successfully
            <Tick style={{ width: '20px', height: '20px' }}/>
          </button>
        }
      </form>
      <ScrollToTop className='absolute bottom-0 right-0' />
    </div>
  )
}

export default Contact
