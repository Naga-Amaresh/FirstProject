import React from 'react'
import { useNavigate } from 'react-router-dom';


const ContactUs = () => {
  document.title = "NAPTV | Contact Us";
  const navigate = useNavigate();
  return (  
    <div className='sm:min-h-screen sm:w-full text-zinc-900 overflow-y-auto'>
      <nav className='py-6 flex items-center justify-evenly sm:px-60 gap-4 sm:py-4 text-zinc-200 '>
      <i onClick={()=>navigate(-1)} className='ri-arrow-left-line sm:text-white sm:text-2xl sm:text-zinc-300 hover:sm:text-red-600 cursor-pointer'></i>
        <div className='flex gap-4 items-center'>
          <h1 className='sm:text-4xl sm:text-red-600 border-r-[1px] border-zinc-500 sm:px-6 font-semibold px-4 text-2xl'>NAPTV</h1>
          <h1 className='sm:text-xl'>Help Center</h1>
        </div>
        <div>
          <button className='border-white border outline-none sm:px-4 sm:py-2  rounded sm:mr-4 sm:inline hidden'>Join Naptv </button>
          <button className='border-white border outline-none sm:px-4 sm:py-2 rounded bg-red-600 sm:inline hidden sm:text-white border-none sm:text-md font-semibold'>Sign In</button>
        </div>
      </nav>
      <div className='sm:min-w-full bg-zinc-200 py-20  flex flex-col sm:flex-row sm:text-black gap-4 items-start pb-20 sm:px-[10vw] justify-center gap-20 sm:py-40'>
        <div className='sm:px-0 px-4 sm:text-xl font-bold sm:text-zinc-600 flex flex-col h-[50vh] w-full  sm:w-1/3 sm:gap-0 gap-4 py-10 sm:py-0'>
          <h1 className=' sm:text-5xl border-b-[sm:1px] sm:py-2 border-zinc-400 sm:py-4 sm:text-zinc-900 text-4xl my-2  sm:my-0 '>Contact us</h1>
          <h4 className='text-zinc-700 border-b-[sm:1px]  border-zinc-400 sm:py-4'><i className='ri-mail-fill'></i> Email - nagaamareshkanne@gmail.com</h4>
          <h4 className=' text-zinc-700 border-b-[sm:1px] pb-2 border-zinc-400 sm:py-4'><i className='ri-github-fill'></i> LinkdIn - <a target='_blank' href="https://github.com/Naga-amaresh">Naga Amaresh</a></h4>
          <h4 className='text-zinc-700 border-b-[sm:1px]  border-zinc-400 sm:py-4'><i className='ri-linkedin-fill'></i> LinkdIn - <a target='_blank' href="https://www.linkedin.com/in/kanne-naga-amaresh-a16783279/">Naga Amaresh Kanne</a></h4>
        </div>

      <div className='px-4 sm:px-0'>
      <h1 className='sm:text-5xl border-b-[sm:1px] sm:py-4 border-zinc-400  sm:text-zinc-900 font-bold text-3xl '>FeedBack :)</h1>
      <form className='sm:mt-5 my-4' onSubmit={(e)=>e.preventDefault()} id="formTwo" >
        <h4 className='sm:my-5 my-8 sm:text-zinc-500'>Tell us more and we'll find the best solution for you</h4>
      <label id='label' className='inline-block font-semibold'> Your Issue : </label>
        <input id='issue' type="text" className='border-[1px] border-zinc-500 px-4 py-2 ml-2 sm:px-4 sm:py-2 outline-none border-[sm:1px] border-zinc-400 rounded' placeholder='Describe Your Issue' />
        <input className='px-4  py-2 mt-4 relative sm:left-0 sm:top-0 left-[60%] top-2 text-zinc-300 cursor-pointer hover:scale-110 transition ease-in-out  border-white border outline-none sm:px-4 sm:py-2 rounded bg-red-600 sm:text-white border-none sm:text-md font-semibold inline-block ml-4' type="submit" />
      </form>
      </div>
      </div>
    </div>
  )
}

export default ContactUs