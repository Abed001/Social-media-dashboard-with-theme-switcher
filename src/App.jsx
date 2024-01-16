import React from 'react'
import useLocalStorage from 'use-local-storage'

import './index.css'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="relative app py-5 text-left " data-theme={theme}>
      <div className='topbg absolute top-0 left-0 z-0 lg:h-[200px]'> </div>
      <div className=' flex flex-col justify-center items-center'>
        <div className='  flex justify-center items-center flex-col'>

          <div className='lg:px-[120px] w-[100vw] flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
            <div className='  w-[100vw] flex flex-col text-left border-bottom px-[50px] lg:px-[30px] '>
              <h1 className=' font-bold text-[30px] z-20'>Social Media Dashboard</h1>
              <p className=' font-bold text-[15px] z-20'>Total Followers: 23,004</p>
            </div>
            <div className='bordercolor z-20 mt-5 w-[90vw] lg:hidden md:hidden '></div>
            <div className=' flex flex-col px-[50px] py-3 w-[100vw]'>
              <div className=' font-bold text-[16px] w-full flex flex-row justify-between items-center z-20 lg:justify-end lg:ml-8 '>
                 <p>Dark Mode</p>
                <i onClick={switchTheme} className=' fas fa-toggle-on text-3xl z-20 ml-5 lg:mr-5'></i></div>
            </div>
          </div>


          <div className='flex flex-col justify-center items-center z-20 w-[100%] lg:mt-5'>
            <Section1 />

          </div>

          <div className='flex flex-col my-7 '>

            <div className='px-[50px] mb-7 '><h1 className='text-[20px] font-bold text-left' >Overview - Today</h1></div>

            <Section2/>

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;