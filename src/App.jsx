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
    <div className=" app py-5 text-left " data-theme={theme}>
      <div className='flex flex-col justify-center items-center'>
        <div className='px-5  w-[100vw] flex flex-col text-left border-bottom'>
          <h1 className='font-bold text-[30px]'>Social Media Dashboard</h1>
          <p className='font-bold text-[15px]'>Total Followers: 23,004</p>
        </div>
        <div className='  mt-5 w-[90vw] bordercolor'></div>
        <div className='flex flex-col px-[50px] py-3 w-[100vw]'>
          <div className='font-bold text-[16px] w-full flex flex-row justify-between items-center'> <p>Dark Mode</p>
            <i onClick={switchTheme} className='fas fa-toggle-on text-3xl'></i></div>
          <div className='flex flex-col'>
            <Section1 />

          </div>

          <div className='flex flex-col mt-5'>

            <div><h1 className='text-[16px] font-bold text-left' >Overview - Today</h1></div>



            <Section2 />

          </div>
        </div>
      </div>



    </div>
  );
}

export default App;