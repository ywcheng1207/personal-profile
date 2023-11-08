import ScrollToTop from '@/components/ScrollToTop'

const Contact = () => {
  return (
    <div name='Contact'
      className="relative w-full h-screen bg-[#FAFBFC] flex justify-center items-center p-4
      dark:bg-[#0f0f0f]">
      <form method="POST" action={import.meta.env.VITE_GETFORM}
        className="flex flex-col max-w-[600px] w-full">
        {/* description */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-200 text-gray-400">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email
          </p>
        </div>
        {/* form */}
        <input type="text" placeholder="Name" name="name"
          className="p-2 bg-[#e8ebf5] focus:outline-none"
        />
        <input type="email" placeholder="Email" name="email"
          className="my-4 p-2 bg-[#e8ebf5] focus:outline-none"
        />
        <textarea name="message" rows="10" placeholder="Message"
          className='bg-[#e8ebf5] p-2 focus:outline-none resize-none' >
        </textarea>
        <button className="border-1 bn32 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
      <ScrollToTop />
    </div>
  )
}

export default Contact
