import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <>

  <div className='section-1 '>
  <div className="relative bg-[url('/hero.png')] bg-contain max-w-full w-full h-auto bg-no-repeat">
      <div className="justify-center mx-auto ">
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
      <div className="lg:flex 3xl:pt-32 2xl:pt-32 xl:pt-32 lg:pt-32 md:pt-20 sm:pt-0 lg:pb-28 md:pb-18 pb-8 items-center container justify-center mx-auto px-10" id="home-section">
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
                <ul className="mx-auto list-disc flex gap-x-6 text-center justify-center mx-auto flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col">
                <li className="3xl:text-white 2xl:text-white xl:text-white lg:text-indigo-800 md:text-indigo-800 sm:text-indigo-800 text-indigo-800 text-lg">
                No credit cards
                </li>
                <li className="3xl:text-white 2xl:text-white xl:text-white lg:text-indigo-800 md:text-indigo-800 sm:text-indigo-800 text-indigo-800 text-lg ml-6">
                Ready to use in five minutes
                </li>
              </ul>
              </div>
              <div className='mt-96'></div>

              
                  
            </div>
          </div>
        </div>
      </div>
    </div>
  


        <div className='section-2'>
        <h1 className='relative 3xl:text-6xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-4xl text-blue-800 text-6xl font-bold text-center 3xl:-mt-48 2xl:-mt-48 xl:-mt-48 lg:-mt-48 md:-mt-96 sm:-mt-96'>
                Features
              </h1>
              <p className='relative text-black 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-md sm:text-md text-md font-normal text-center leading-8'>
                You found us! Why spend your valuable hours to understand
              </p>
              <p className='relative text-black 3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-md sm:text-md text-md font-normal text-center'>
                yet another rank tracker?
              </p>

              <div className='relative'>
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

          <div className=' grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mb-6 gap-x-12 gap-y-12 justify-items-start items-center my-auto'>
              <Image className='' src="/PepsiCo svg.png" width={187} height={34}/>
              <Image className='' src="/GrandVision.png" width={187} height={34}/>
              <Image className='' src="/red bull svg.png" width={156} height={34}/>
            </div>
            <div className=' grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12'>
              <Image className='' src="/YVESROCHER.png" width={187} height={24}/>
              <Image className='' src="/beko svg (1).png" width={60} height={34}/>
              <Image className='' src="/WEBER.png" width={187} height={24}/>
            </div>
          </div>

      </div>


<div className='mx-auto 3xl:pr-0 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-20 sm:pr-20'>
            <div class="container relative bg-[url('/section-4.png')] mt-56 bg-cover bg-no-repeat text-center font-[Source+Sans+Pro] justify-center max-w-full w-full h-auto flex flex-col 3xl:pl-0 2xl:pl-0 xl:pl-0 lg:pl-16 md:pl-16 sm:pl-24 ">
                <p class="absolute my-8 3xl:pl-0 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-20 sm:pl-24 3xl:text-5xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-2xl text-4xl text-white font-bold 3xl:top-32 2xl:top-32 xl:top-32 lg:top-32 md:top-8 sm:top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[Source+Sans+Pro] ">
                    Bigger data = Better Trained Models
                </p>
                <p class="absolute 3xl:pl-0 2xl:pl-0 xl:pl-0 lg:pl-0 md:pl-20 sm:pl-24 font-[Source+Sans+Pro] text-md my-8 pt-24 text-white text-center 3xl:top-56 2xl:top-56 xl:top-56 lg:top-56 md:top-48 sm:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    We have great competitors that can provide you with data. 
                    Our main focus is not only providing data but also insights 
                    extracted from them. To create better machine learning models, 
                    we’re collecting more data.
                </p>


                <div className="flex justify-center items-center gap-16 pt-96 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
                  <div className="bg-white drop-shadow-2xl 3xl:h-[265px] 2xl:h-[265px] xl:h-[265px] lg:h-[265px] md:h-[265px] sm:h-[365px] 3xl:w-[515px] 2xl:w-[515px] xl:w-[515px] lg:w-[515px] md:w-[515px] sm:w-[215px] h-[265px]">
                    <h1 className="text-center mt-12 text-semibold text-xl">
                      Keywords
                    </h1>
                  <div className="flex items-center justify-center mt-4">
                    <h1 className="text-5xl 3xl:text-5xl 2xl:text-4xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-blue-900">
                      2.
                    </h1>
                    <h1 className="3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-4xl font-bold text-blue-900">
                      282.150.458
                    </h1>
                  </div>

            <div className='flex '>

                <div className="flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center justify-center gap-8 mt-12 mb-12 3xl:ml-16 2xl:ml-16 xl:ml-16 lg:ml-16 md:ml-16 sm:ml-2">
                  <div className="">
                    <div className="flex ">
                      <div className="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div className="">
                        <h1 className="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex ">
                      <div className="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div className="">
                        <h1 className="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-white drop-shadow-2xl 3xl:h-[265px] 2xl:h-[265px] xl:h-[265px] lg:h-[265px] md:h-[265px] sm:h-[365px] 3xl:w-[515px] 2xl:w-[515px] xl:w-[515px] lg:w-[515px] md:w-[515px] sm:w-[215px] h-[265px]">
                  <h1 className="text-center mt-12 text-semibold text-xl">
                    Keywords
                  </h1>
                <div className="flex items-center justify-center mt-4">
                  <h1 className="text-5xl 3xl:text-5xl 2xl:text-4xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-blue-900">
                    21.
                  </h1>
                  <h1 className="3xl:text-4xl 2xl:text-4xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl text-4xl font-bold text-blue-900">
                    282.150.458
                  </h1>
                </div>

            <div className='flex '>

                <div className="flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col  items-center justify-center gap-8 mt-12 mb-12 3xl:ml-16 2xl:ml-16 xl:ml-16 lg:ml-16 md:ml-16 sm:ml-2">
                  <div className="">
                    <div className="flex ">
                      <div className="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div className="">
                        <h1 className="text-gray-700 text-xl w-[126px]">
                          87 Countries
                        </h1>
                      </div>
                    </div>
                  </div>
                

                    <div className="flex ">
                      <div className="">
                        <Image className='' src="/Group 7.png" width={40} height={40}/>
                      </div>
                      <div className="">
                        <h1 className="text-gray-700 text-xl w-[126px]">
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





        <div className="container mx-auto mt-32">
          <h1 className="text-center text-6xl font-bold text-blue-800" >
            New Metrics:
          </h1>
          <h1 className=" mt-8 text-center text-6xl font-bold text-blue-800" >
            Time To Change Paradigms
          </h1>
          <h1 className="text-center text-gray-700 text-xl mt-6">
            The industry is backed by hard-coded metrics, not estimations.
          </h1>
          <h1 className="text-center text-xl text-gray-700 text-blue-800">
            We believe data science to fix this.
          </h1>
          <h1 className=" mt-8 text-center text-4xl font-bold text-blue-800" >
          Our Revolutionary Approach
          </h1>




          <div className="justify-center items-center flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-32 relative">

          
          <div className="flex flex-col ">
                <div className='flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-16 mb-16'>

                  <div className='flex gap-8'>
                    <div className="top-16 left-0 flex gap-12">
                      <div className=" bg-white p-2 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 className="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

                  <div className='flex gap-8'>
                    <div className="top-16 left-24 flex gap-12">
                      <div className=" bg-white p-6 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 className="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
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
                    <div className="top-16 left-0 flex gap-12">
                      <div className=" bg-white p-2 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 className="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
                          Most of the rank trackers use fixed CTRs for traffic &amp;
                          visibility. It could be misleading in 2021 but in 2022 
                          it is the trend!
                        </h1>
                      </div>
                    </div> 
                  </div>

                  <div className='flex gap-8'>
                    <div className="top-16 left-24 flex gap-12">
                      <div className=" bg-white p-6 border">
                        <Image className='' src="/Group 9.png" width={40} height={40}/>
                        <h1 className="text-4xl mt-5 text-blue-900 font-bold w-[223px]">
                          Keyword Specific CTR Calculations
                        </h1>
                        <h1 className="text-2xl text-gray-800 font-semibold mt-12 w-[544px]">
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
        



      <div className="mx-auto 3xl:pr-0 2xl:pr-0 xl:pr-0 lg:pr-0 md:pr-20 sm:pr-0 ">
        <div className=" mb-24 relative bg-[url('/section-4.png')] w-{1280px} bg-contain bg-cover justify-center text-center flex flex-col bg-no-repeat mt-16 pt-14 pb-14 mx-auto">
          <div className='container mx-auto'>
          <p className="text-white font-[Source+Sans+Pro] font-semibold text-5xl 3xl:text-5xl 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-center max-w-[660px] 3xl:w-[660px] 2xl:w-[660px] xl:w-[660px] lg:w-[660px] md:w-[560px] sm:w-[360px] mx-auto pb-6">
            Get Your Custom Analysis in 60 Seconds For Free
          </p>
          <p className="p-5 text-2xl font-[Source+Sans+Pro] text-white max-w-[700px] 3xl:w-[700px] 2xl:w-[700px] xl:w-[700px] lg:w-[700px] md:w-[500px] sm:w-[400px] mx-auto pb-10 ">
            Don’t spend hours to find eligible keywords to track. 
            Don’t waste yourself in Excel to group those keywords. 
            AI is ready to help you.
          </p>
          <div className="mx-auto relative pb-10">
          <div className='bg-white mx-auto flex rounded-full mt-10 xl:w-[544px] lg:w-[544px] md:w-[444px] sm:w-[344px] h-[78px]'>
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
              <ul className="mx-auto list-disc flex gap-x-6 text-center justify-center pb-24">
                <li className="text-white text-lg">
                  14 Days Free Trial
                </li>
                <li className="text-white text-lg ml-6">
                  Free Historical Data Migration For All Accounts
                </li>
              </ul>
              </div>
            </div>
          </div>



            <div className="container justify-between 3xl:mx-auto 2xl:mx-auto xl:mx-auto lg:mx-auto md:mx-24 sm:mx-36 flex 3xl:flex-row 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col ">
          <div className=''>
            <div>
              <div className="relative bg-[url('/shapes.png')] max-w-[965px] h-[975px] bg-contain justify-center flex bg-no-repeat 3xl:pt-[400px] 2xl:pt-[400px] xl:pt-[400px] lg:pt-[400px] md:pt-[375px] sm:pt-[305px] pb-32 mb-40 pl-[305px] pr-20">
                <div className="">  
                  <ul className="pb-14 ">
                    <li className="cursor-pointer">
                      <a className="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                        Company
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300 ">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300 ">
                        Career
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300  active">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <ul className="pb-14">
                    <li className="cursor-pointer">
                      <a className="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                        Help
                      </a>
                    </li>
                    <li>
                      <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] text-white transition duration-300">
                        Knowledge Base
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="pb-56 pl-14 pr-72">
                  <li className="cursor-pointer">
                    <a className="text-white font-semi-bold font-[Source+Sans+Pro] cursor-pointer text-2xl">
                      Product
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                      CLI
                    </a>
                  </li>
                  <li>  
                    <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 text-white transition duration-300 ">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="cursor-pointer text-white font-normal font-[Source+Sans+Pro] py-5 pr-30 text-white transition duration-300 ">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            </div>


                <div>
                  <div class="w-[405px] 3xl:pt-48 2xl:pt-48 xl:pt-48 lg:pt-48 md:pt-4 sm:pt-4 flex flex-col justify-left ">
                    <div>
                      <Image className='' src="/logo.png" width={70} height={80}/>
                    </div>
                      <p class="pt-16 underline text-sky-400 text-2xl font-[Source+Sans+Pro] pb-11 cursor-pointer">
                        hi@seo.do
                      </p>
                      <p class="text-sky-400 underline text-2xl pb-12 cursor-pointer">
                        0 (021) 463-7333
                      </p>
                      <p class="text-gray-600 text-2xl font-[Source+Sans+Pro]">
                        SEO DO OU
                      </p>
                      <p class="text-gray-600 text-2xl py-[18px] font-[Source+Sans+Pro]">
                        Sepapaja tn 6
                      </p>
                      <p class="text-gray-600 text-2xl font-[Source+Sans+Pro]">
                        1551, Tallinn Estonia
                      </p>
                      <div class="gap-x-8 grid grid-cols-3 py-12 w-2/3">
                        <Image className='' src="/linkedin.png" width={77} height={77}/>
                        <Image className='' src="/twitter.png" width={77} height={77}/>
                        <Image className='' src="/facebook.png" width={77} height={77}/>
                      </div>
                      <p class="font-[Source+Sans+Pro] text-lg text-gray-600 pb-14">
                        Copyright (c) 2021 Seo.do
                      </p>
                      <div class="flex">
                        <div class="relative pl-5 w-5/12">
                          <select type="text" name="language" required="" id="language" class="bg-white dark:bg-gray-800 appearance-none pl-8 py-3 w-full text-lg border border-transparent focus:outline-none text-blue-900 rounded">
                            <option value="Switzerland">English</option>
                            <option value="America">Arabic</option>
                            <option value="Australia">Urdu</option>
                          </select>
                          <div class="z-30 cursor-pointer absolute left-0 top-3 pointer-events-none ">
                            <Image className='' src="/Group 10.png" width={28} height={28}/>
                          </div>
                        </div>
                      </div>
                      <div class="ml-auto">
                        <Image className='' src="/group 12.png" width={77} height={77}/>
                      </div>
                    </div>
                  </div>

                  </div>

                  




      </>
    );
  };
  
  export default Index;