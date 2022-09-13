import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <>
  <div className='section-1 bg-pink-200'>
    <image className='absolute' src="/vector 1 (1).png" width={898.04} height={683.2}/>
    <div className='relative'>
      <div className="justify-center mx-auto">
        <div className="">
          <div className="flex flex-wrap justify-between items-center">
            <div className='xl:pl-20 lg:pl-20 md:pl-20 sm:pl-5 pl-4 pt-4'>
              <Image className="cursor-pointer" src="/group 13 (1).png" width={158} height={47.17}/>
            </div>
            <button
                className=" block lg:hidden xl:hidden text-gray my-5 px-6"
                onClick={() => setShowMenu(!showMenu)}
              >
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
            </button>

          <div className="items-right justify-center flex absolute right-8 p-8 mr-4 -top-0 text-white z-40 cursor-pointer">
            <div className='xl:flex lg:flex hidden'>
              <h1 className='text-blue-800 mt-2 mr-11 text-base font-semibold'>Login</h1>
              <button className="mx-auto text-center font-semibold text-base bg-blue-900 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-2 rounded-3xl flex">
                Book Now 
              </button>
            </div>
          </div>

            <nav
        className={showMenu
            ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
            : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
               <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
          <div className='xl:hidden flex bg-gray-100 w-full flex-col w-full px-8 rounded-xl my-5'>
            <div className='flex p-10 flex-col items-center justify-center'>
              <h1 className='text-blue-900 pb-10 ml-8 mr-11 pt-2 text-base font-semibold'>Login</h1>
              <button className="mx-auto text-center font-semibold text-base bg-blue-800 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-1 rounded-3xl flex">
                Book Now 
              </button>
            </div>
          </div>
          </nav>
        </div>
      </div>
    </div>
  </div>


        <div className='section-2 bg-pink-200'>
          <div className="lg:flex pt-32 lg:pb-28 md:pb-18 pb-8 items-center container justify-center mx-auto px-10" id="home-section">
            <div className="lg:pb-0 pb-8">

              <p className="lg:text-8xl md:text-7xl md:text-5xl text-4xl font-bold z-20 text-white text-center ">
                Data Science
              </p>
              <p className="lg:text-8xl md:text-7xl md:text-5xl text-4xl font-bold z-20 text-white text-center ">
                Meets SEO
              </p>

              <p className="lg:text-2xl md:text-2xl mt-6 md:text-2xl text-xl font-normal z-20 text-white text-center align-center justify-center item-center ">
                Find all the SEO secrets of your competitors and track them
              </p>
              <p className="lg:text-2xl md:text-2xl md:text-2xl text-xl font-normal z-20 text-white text-center align-center justify-center item-center ">
                daily without hours of boring keyword research & grouping
              </p>

              <div className='bg-white mx-auto flex rounded-full mt-10 xl:w-[544px] lg:w-[544px] md:w-[544px] sm:w-[544px] h-[78px]'>
                  <input
                    placeholder="Your email address"
                    className="text-lg text-blue-900 py-7 px-4 bg-white z-30 w-full focus:outline-none rounded-full focus:bg-transparent"
                  />
                  <button className="ml-3 text-center font-semibold text-base bg-blue-900 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-2 m-4 rounded-full">
                    <h1 className='w-20'>
                      Book Now
                    </h1>  
                  </button>
              </div>
              
              <div className='mx-auto my-10'>
                <ul class="mx-auto list-disc flex gap-x-6 text-center justify-center mx-auto ">
                <li class="text-white text-lg">
                No credit cards
                </li>
                <li class="text-white text-lg ml-6">
                Ready to use in five minutes
                </li>
              </ul>
              </div>

              <button className='absolute mx-auto'>
                <image src="/circle.png" width={108} height={103}/>
              </button>

            </div>
          </div>
        </div>
      </div>



      <div className='container-2xl'>
        <div>
        <Image className="mx-auto bg-pink-200" src="/Vector 4 n.png" width={2560.5} height={446}/>
        </div>
      
          <div className='relative'>
              <h1 className='3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-4xl text-blue-800 text-6xl font-bold text-center -mt-40 '>
                Features
              </h1>
              <p className='3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-md sm:text-md text-md font-normal text-center leading-8'>
                You found us! Why spend your valuable hours to understand
              </p>
              <p className='3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-md sm:text-md text-md font-normal text-center'>
                yet another rank tracker?
              </p>
              <div className='bg-white'>
                <div className='bg-blue-100 mx-auto flex rounded-full mt-10 xl:w-[321px] lg:w-[321px] md:w-[321px] sm:w-[321px] h-[72px] '>
                    <button className="ml-3 text-center font-semibold text-base bg-blue-900 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-2 m-4 rounded-full">
                      <h1 className='w-20'>
                        Book Now
                      </h1>  
                    </button>
                    <input
                      placeholder="Your email address"
                      className="text-lg text-blue-900 py-7 px-4 bg-blue-100 z-30 w-full focus:outline-none rounded-full focus:bg-transparent"
                    />
                </div>
            </div>
          </div>
      </div>


      <div className='container:2xl py-4 px-10 mt-24 grid grid-cols lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:flex-row xl:flex-row 2xl:flex-row'>
        <div className='mx-8 my-8'>
          <Image className="" src="/Group 5.png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[280px] h-[64px] text-left text-blue-800 mt-6'>
            AI-Based  Keyword Grouping
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
            We have trained our models by using the power of deep learning to find the most relevant keywords.
          </p>
        </div>

        <div className='mx-8 my-8'>
          <Image className="" src="/Group 6.png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[270px] h-[64px] text-left text-blue-800 mt-6'>
            Fully Automated Keyword 
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          You don’t need to group keywords. Our smart algorithms classify keywords.
          </p>
        </div>

        <div className='mx-8 my-8'>
          <Image className="" src="/Group 5 (1).png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[280px] h-[64px] text-left text-blue-800 mt-6'>
            Faster than Fastest Competitor
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          Performance is our core value. We have tired of years of experience on slow rank track.
          </p>
        </div>

        <div className='ml-8 my-8'>
          <Image className="" src="/Group 5 (2).png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[220px] h-[64px] text-left text-blue-800 mt-6'>
            Free migration from 40+ tools.
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[220px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          Losing data is not acceptable. Eventhough It has API access or not, we will migrate your data.
          </p>
        </div>
        
      </div>


      <div className='my-24 mx-20 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col'> 

        <div className=''>
          <p className='text-blue-800 text-left mx-auto xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl sm:text-3xl xl:w-[624px] lg:w-[624px] md:w-[524px] sm:w-[424px] font-semibold'>
            Trusted by the World’s Best Companies
          </p> 
        </div>

        <div className='mx-auto flex flex-col mt-6'>

        <div className=' grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12 mb-6'>
            <Image className='' src="/YVESROCHER.png" width={156} height={34}/>
            <Image className='' src="/WEBER.png" width={156} height={34}/>
            <Image className='' src="/beko svg.png" width={156} height={34}/>
          </div>
          <div className=' grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12'>
            <Image className='' src="/YVESROCHER.png" width={156} height={34}/>
            <Image className='' src="/WEBER.png" width={156} height={34}/>
            <Image className='' src="/beko svg.png" width={156} height={34}/>
          </div>
        </div>

      </div>



              <div class="container mx-auto mt-32 mb-32 ">
                <div class="bg-indigo-800">
                  <div class="relative">
                    <Image className='absolute' src="/Minimal pattern - 7 A.png" width={1280} height={550}/>
                    <div class="absolute 3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-4xl text-white font-bold 3xl:top-32 2xl:top-32 xl:top-32 lg:top-32 md:top-32 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      Bigger data = Better Trained Models
                    </div>
                    <div class="absolute text-md text-white text-center 3xl:top-56 2xl:top-56 xl:top-56 lg:top-56 md:top-48 sm:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      We have great competitors that can provide you with data. 
                      Our main focus is not only providing data but also insights 
                      extracted from them. To create better machine learning models, 
                      we’re collecting more data.
                    </div>
                  </div>
              </div>

              <div class="flex justify-center items-center gap-16 3xl:-mt-40 2xl:-mt-40 xl:-mt-40 lg:-mt-10 md:mt-20 sm:mt-40 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
                <div class="bg-white drop-shadow-2xl 3xl:h-[265px] 2xl:h-[265px] xl:h-[265px] lg:h-[265px] md:h-[265px] sm:h-[365px] 3xl:w-[515px] 2xl:w-[515px] xl:w-[515px] lg:w-[515px] md:w-[515px] sm:w-[215px] h-[265px]">
                  <h1 class="text-center mt-12 text-semibold text-xl">
                    Keywords
                  </h1>
                <div class="flex items-center justify-center mt-4">
                  <h1 class="text-5xl 3xl:text-5xl 2xl:text-4xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-blue-900">
                    2.
                  </h1>
                  <h1 class="3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-4xl font-bold text-blue-900">
                    282.150.458
                  </h1>
                </div>

            <div className='flex '>

                <div class="flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center justify-center gap-8 mt-12 mb-12 3xl:ml-16 2xl:ml-16 xl:ml-16 lg:ml-16 md:ml-16 sm:ml-2">
                  <div class="">
                    <div class="flex ">
                      <div class="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div class="">
                        <h1 class="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div class="flex ">
                      <div class="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div class="">
                        <h1 class="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="bg-white drop-shadow-2xl 3xl:h-[265px] 2xl:h-[265px] xl:h-[265px] lg:h-[265px] md:h-[265px] sm:h-[365px] 3xl:w-[515px] 2xl:w-[515px] xl:w-[515px] lg:w-[515px] md:w-[515px] sm:w-[215px] h-[265px]">
                  <h1 class="text-center mt-12 text-semibold text-xl">
                    Keywords
                  </h1>
                <div class="flex items-center justify-center mt-4">
                  <h1 class="text-5xl 3xl:text-5xl 2xl:text-4xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-blue-900">
                    2.
                  </h1>
                  <h1 class="3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-4xl font-bold text-blue-900">
                    282.150.458
                  </h1>
                </div>

            <div className='flex '>

                <div class="flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center justify-center gap-8 mt-12 mb-12 3xl:ml-16 2xl:ml-16 xl:ml-16 lg:ml-16 md:ml-16 sm:ml-2">
                  <div class="">
                    <div class="flex ">
                      <div class="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div class="">
                        <h1 class="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div class="">
                    <div class="flex ">
                      <div class="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div class="">
                        <h1 class="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div class="container mx-auto mt-32">
          <h1 class="text-center text-6xl font-bold text-blue-800" >
            New Metrics:
          </h1>
          <h1 class=" mt-8 text-center text-6xl font-bold text-blue-800" >
            Time To Change Paradigms
          </h1>
          <h1 class="text-center text-gray-700 text-xl mt-6">
            The industry is backed by hard-coded metrics, not estimations.
          </h1>
          <h1 class="text-center text-xl text-gray-700 text-blue-800">
            We believe data science to fix this.
          </h1>
          <h1 class=" mt-8 text-center text-4xl font-bold text-blue-800" >
          Our Revolutionary Approach
          </h1>




          <div class="justify-center items-center flex mt-32 relative">


          <div className="flex flex-col ">
                <div className='flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-16 mb-16'>

                  <div className='flex gap-8'>
                    <div class="top-16 left-0 flex gap-12">
                      <div class=" bg-white p-2 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 class="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 class="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

                  <div className='flex gap-8'>
                    <div class="top-16 left-24 flex gap-12">
                      <div class=" bg-white p-6 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 class="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 class="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

               </div>


               <div className='flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-16 mb-16'>

                  <div className='flex gap-8'>
                    <div class="top-16 left-0 flex gap-12">
                      <div class=" bg-white p-2 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 class="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 class="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

                  <div className='flex gap-8'>
                    <div class="top-16 left-24 flex gap-12">
                      <div class=" bg-white p-6 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 class="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 class="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

               </div>

               </div>

          </div>
      </div>



      <div class="my-32 bg-indigo-800 mx-20">
        <div class="relative bg-[url('/section-6.png')] bg-contain bg-cover mx-20 justify-center text-center flex flex-col bg-no-repeat pt-16 pb-14 mx-auto">
          <p class="text-white font-[Source+Sans+Pro] font-semibold text-[54px] text-center max-w-[660px] mx-auto pb-6">
            Get Your Custom Analysis in 60 Seconds For Free
          </p>
          <p class="text-2xl font-[Source+Sans+Pro] text-white max-w-[700px] mx-auto pb-10 ">
            Don’t spend hours to find eligible keywords to track. 
            Don’t waste yourself in Excel to group those keywords. 
            AI is ready to help you.
          </p>
          <div class="mx-auto relative pb-10">
          <div className='bg-white mx-auto flex rounded-full mt-10 xl:w-[544px] lg:w-[544px] md:w-[544px] sm:w-[544px] h-[78px]'>
                  <input
                    placeholder="Your email address"
                    className="text-lg text-blue-900 py-7 px-4 bg-white z-30 w-full focus:outline-none rounded-full focus:bg-transparent"
                  />
                  <button className="ml-3 text-center font-semibold text-base bg-blue-900 hover:bg-blue-600 focus:bg-blue-600 text-white px-4 py-2 m-4 rounded-full">
                    <h1 className='w-20'>
                      Book Now
                    </h1>  
                  </button>
              </div>
              </div>
              <ul class="mx-auto list-disc flex gap-x-6 text-center justify-center mx-auto ">
                <li class="text-white text-lg">
                  14 Days Free Trial
                </li>
                <li class="text-white text-lg ml-6">
                  Free Historical Data Migration For All Accounts
                </li>
              </ul>
            </div>
          </div>



            <div class="lg:flex container justify-between mx-auto bg-indigo-800">
              <div class="relative bg-[url('/shapes.png')] max-w-[965px] h-[975px] bg-contain justify-center flex bg-no-repeat pt-[475px] pb-32 mb-40 pl-[305px] pr-20">
                <div class="">  
                  <ul class="pb-14 ">
                    <li class="cursor-pointer">
                      <a class="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                        Company
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300 ">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300 ">
                        Career
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300  active">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul class="pb-14">
                    <li class="cursor-pointer">
                      <a class="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                        Help
                      </a>
                    </li>
                    <li>
                      <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300">
                        Knowledge Base
                      </a>
                    </li>
                  </ul>
                </div>
                <ul class="pb-56 pl-14 pr-72">
                  <li class="cursor-pointer">
                    <a class="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                      Product
                    </a>
                  </li>
                  <li>
                    <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                      CLI
                    </a>
                  </li>
                  <li>  
                    <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a class="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 pr-30 text-white transition duration-300 ">
                      Features
                    </a>
                  </li>
                </ul>

                  </div>
                  </div>




      </>
    );
  };
  
  export default Index;