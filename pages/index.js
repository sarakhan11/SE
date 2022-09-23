import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
    return (
      <>


  <div className='w-full mx-auto align-center flex justify-center'>
  <div className="container relative xl:bg-[url('/hero.png')] justify-center items-center lg:bg-[url('/hero.png')] md:bg-[url('/hero.png')] sm:bg-[url('/hero.png')] 2xl:bg-[url('/hero.png')] bg-[url('/hero.png')] layout-fill md:pb-0 pb-80 bg-contain bg-no-repeat ">
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



      <div className="align-center flex justify-center items-center container lg:flex 3xl:pt-32 2xl:pt-32 xl:pt-20 lg:pt-4 md:pt-4 sm:pt-0 pt-36 lg:pb-28 md:pb-18 pb-8 items-center container justify-center mx-auto px-10" id="home-section">
            <div className="lg:pb-0 pb-8">

            <div class="container justify-center mx-auto text-center pb-32">
                <p class="xl:text-white lg:text-white md:text-white sm:text-white text-indigo-800 font-bold lg:text-8xl md:text-5xl sm:text-3xl text-2xl font-[Source+Sans+Pro] lg:pb-6 md:pb-4 pb-2 lg:max-w-[844px] md:max-w-[300px] max-w-[200px] mx-auto lg:leading-[96px] leading-normal">
                  Data Science Meets SEO
                </p>
                <div class="flex flex-col justify-center mx-auto lg:pb-10 md:pb-5 pb-2">
                  <p class=" font-[Source+Sans+Pro] lg:text-2xl md:text-xl sm:text-lg text-sm lg:px-0 px-10 xl:text-white lg:text-white md:text-white sm:text-white text-indigo-800 mx-auto lg:max-w-[631px] md:max-w-[500px] sm:max-w-[450px] lg:pb-10 pb-5">
                    Find all the SEO secrets of your competitors and track them daily without hours of boring keyword research &amp; grouping
                  </p>
                  <div class="mx-auto justify-center relative">
                    <input placeholder="Enter your domain" class="lg:py-8 md:py-6 sm:py-4 py-2 pl-8 rounded-[64px] text-gray-600 lg:w-[644px] cursor-pointer focus:outline-none"/>
                      <button class="transition lg:flex hidden duration-600 bg-blue-900 text-white font-[Source+Sans+Pro] p-5 absolute right-3 focus:outline-none rounded-[56px] top-3 focus:bg-blue-800 hover:bg-blue-800">
                        Start instant demo
                      </button>
                      <button class="transition duration-600 lg:hidden flex bg-blue-900 text-white font-[Source+Sans+Pro] md:p-3 p-2 mt-4 focus:outline-none rounded-[56px] focus:bg-blue-800 hover:bg-blue-800 mx-auto">
                        Start instant demo
                      </button>
                    </div>
                  </div>
                  <ul class="mx-auto lg:list-disc lg:flex gap-x-6 text-center justify-center mx-auto ">
                    <li class="text-white lg:text-lg text-md">No credit cards</li>
                    <li class="text-white lg:text-lg text-md ml-6">Ready to use in five minutes</li>
                  </ul>
                </div>
                <div className='mt-72'></div>
                <div class="absolute left-1/2 mt-36 transform -translate-x-1/2 bottom-[20px] text-center" >
                  <p class="text-blue-900 lg:text-[54px] text-3xl font-bold pb-6 font-[Source+Sans+Pro] ">Features</p>
                  <p class="text-gray-600 font-[Source+Sans+Pro] text-2xl xl:max-w-[660px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[300px] max-w-[200px] mx-auto">You found us! Why spend your valuable hours to understand yet another rank tracker?</p>
                  <div class="mx-auto justify-center relative">
                    <input placeholder="Enter your domain" class="lg:py-8 md:py-6 sm:py-4 py-2 pl-8 rounded-[64px] text-gray-600 lg:w-[644px] cursor-pointer focus:outline-none"/>
                      <button class="transition lg:flex hidden duration-600 bg-blue-900 text-white font-[Source+Sans+Pro] p-5 absolute right-3 focus:outline-none rounded-[56px] top-3 focus:bg-blue-800 hover:bg-blue-800">
                        Start instant demo
                      </button>
                      <button class="transition duration-600 lg:hidden flex bg-blue-900 text-white font-[Source+Sans+Pro] md:p-3 p-2 mt-4 focus:outline-none rounded-[56px] focus:bg-blue-800 hover:bg-blue-800 mx-auto">
                        Start instant demo
                      </button>
                    </div>
                </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  


        

      <div className='container:2xl py-4 px-10 mt-24 grid grid-cols lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:flex-row xl:flex-row 2xl:flex-row'>
        <div className='xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 my-8'>
          <Image className="" src="/Group 5.png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[280px] h-[64px] text-left text-blue-800 mt-6'>
            AI-Based  Keyword Grouping
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
            We have trained our models by using the power of deep learning to find the most relevant keywords.
          </p>
        </div>

        <div className='xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 my-8'>
          <Image className="" src="/Group 6.png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[270px] h-[64px] text-left text-blue-800 mt-6'>
            Fully Automated Keyword 
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          You don’t need to group keywords. Our smart algorithms classify keywords.
          </p>
        </div>

        <div className='xl:mx-8 lg:mx-8 md:mx-8 sm:mx-0 my-8'>
          <Image className="" src="/Group 5 (1).png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[280px] h-[64px] text-left text-blue-800 mt-6'>
            Faster than Fastest Competitor
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[250px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          Performance is our core value. We have tired of years of experience on slow rank track.
          </p>
        </div>

        <div className='xl:ml-8 lg:ml-8 md:ml-8 sm:ml-0 my-8'>
          <Image className="" src="/Group 5 (2).png" width={40} height={40}/>
          <p className='text-2xl text-semibold w-[220px] h-[64px] text-left text-blue-800 mt-6'>
            Free migration from 40+ tools.
          </p>
          <p className='text-xl xl:text-xl md:text-xl sm:text-xl text-semibold xl:w-[296px] lg:w-[220px] md:w-[296px] sm:w-[296px] h-[78px] text-left text-gray-800 mt-6 pr-4'>
          Losing data is not acceptable. Eventhough It has API access or not, we will migrate your data.
          </p>
        </div>
        
      </div>


      <div className='flex justify-center items-center align-center my-24 mx-20 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col'> 

        <div className=''>
          <p className='text-blue-800 text-left mx-auto xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl text-3xl sm:text-3xl xl:w-[624px] lg:w-[624px] md:w-[524px] sm:w-[424px] font-semibold'>
            Trusted by the World’s Best Companies
          </p> 
        </div>

        <div className='mx-auto flex flex-col mt-6 '>
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-12 gap-y-12 mx-auto justify-items-start items-center my-auto">
            <Image className='' src="/PepsiCo svg.png" width={156} height={34}/>
            <Image className='' src="/GrandVision.png" width={187} height={24}/>
            <Image className='' src="/red bull svg.png" width={156} height={34}/>
          </div>
          <div class="pt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-12 gap-y-12 mx-auto justify-items-start items-center my-auto">
            <Image className='' src="/YVESROCHER.png" width={187} height={24}/>
            <Image className='' src="/beko svg (1).png" width={60} height={34}/>
            <Image className='' src="/WEBER.png" width={187} height={24}/>
          </div>
        </div>

      </div>

            <div class="lg:pb-32 md:pb-24 sm:pb-16 pb-10 xl:ml-24 mx-auto">
              <div className="container mb-20 relative bg-[url('/section-6.png')] -z-30 w-full bg-contain bg-cover justify-center text-center flex flex-col bg-no-repeat mt-16 pt-14 mb-14 mx-auto">
                <p class="pt-32 lg:text-[44px] md:text-4xl sm:text-3xl text-2xl font-bold text-white lg:pb-6 pb-4 font-[Source+Sans+Pro] lg:leading-[54px] ">
                    Bigger data = Better Trained Models
                </p>
                <p class="mb-10 font-[Source+Sans+Pro] font-semibold lg:text-2xl md:text-xl lg:text-lg text-sm text-white lg:max-w-[860px] md:max-w-[600px] sm:max-w-[400px] mx-auto">
                  We have great competitors that can provide you with data. Our main focus is not only providing data but also insights extracted from them. To create better machine learning models, we’re collecting more data.
                </p>
                <div class=" lg:grid lg:grid-cols-2 grid-cols-1 justify-center mx-auto gap-x-8">
                  <div class="lg:p-8 md:p-6 p-4 bg-white text-center lg:max-w-[515px] max-w-[400px] lg:-mb-14">
                    <p class=" text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold lg:pb-10 pb-6">
                      Keywords
                    </p>
                    <p class="text-blue-900 lg:text-[55px] lg:leading=[55px] md:text-5xl sm:text-4xl text-3xl font-semibold font-[Source+Sans+Pro] lg:pb-10 pb-6">
                      2.282.150.458
                    </p>
                    <div class="lg:flex gap-10 justify-center mx-auto">
                      <div class="flex items-center my-auto justify-center">
                      <Image className='' src="/Group 7.png" width={40} height={40}/>
                      <p class=" font-[Source+Sans+Pro] text-blue-900 lg:text-2xl md:text-xl sm:text-lg text-sm my-auto lg:pl-5 pl-3 pt-2">
                        87 Countries
                      </p>
                    </div>
                    <div class="flex items-center my-auto lg:pt-0 pt-4 justify-center">
                    <Image className='' src="/Group 7.png" width={40} height={40}/>
                      <p class=" font-[Source+Sans+Pro] text-blue-900 lg:text-2xl md:text-xl sm:text-lg text-sm my-auto lg:pl-5 pl-3 pt-2">
                        38 Languages
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:p-8 md:p-6 p-4 bg-white text-center lg:max-w-[515px] max-w-[400px] lg:-mb-14 mb-0 lg:mt-0 mt-4">
                  <p class=" text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md font-semibold lg:pb-7 pb-4">
                    Search Volume
                  </p>
                  <p class="text-blue-900 lg:text-[55px] md:text-5xl sm:text-4xl text-3xl font-semibold font-[Source+Sans+Pro] lg:pb-10 pb-6">
                    21,116,1 Billion
                  </p>
                  <div class="lg:flex gap-6 justify-center mx-auto">
                    <div class="flex items-center my-auto justify-center">
                    <Image className='' src="/Group 7.png" width={40} height={40}/>
                      <p class=" font-[Source+Sans+Pro] text-blue-900 lg:text-2xl md:text-xl sm:text-lg text-sm my-auto lg:pl-4 pl-3 pt-2">
                        4+ Billion Keywords
                      </p>
                    </div>
                    <div class="flex items-center my-auto lg:pt-0 pt-4 sm:justify-center">
                    <Image className='' src="/Group 7.png" width={40} height={40}/>
                      <p class=" font-[Source+Sans+Pro] text-blue-900 lg:text-2xl md:text-xl sm:text-lg text-sm my-auto lg:pl-4 pl-3 pt-2">
                        34TB Data
                      </p>
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

              <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 justify-center mx-auto container ">
                  <div class="bg-white lg:p-10 p-6 max-w-[650px] text-center lg:text-left">
                    <Image className='' src="/Group 9.png" width={40} height={40}/>
                    <p class="lg:pt-12 md:pt-10 sm:pt-6 pt-4 lg:leading-[36px] text-blue-900 font-bold lg:text-[28px] md:text-2xl sm:text-xl text-lg lg:pb-8 md:pb-6 sm:pb-4 pb-2 lg:max-w-[553px]">
                      Pixel Rank: Industry’s Response to Feature-Rich SERPS
                    </p>
                    <p class="text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md ">
                      Ranks belong to old school SEOs. To cope with 2021’s SERP landscape we need to measure pixels instead of ranks.
                    </p> 
                  </div>

                  <div class="bg-white lg:p-10 p-6 max-w-[650px] text-center lg:text-left">
                    <Image className='' src="/Group 9.png" width={40} height={40}/>
                    <p class="lg:pt-12 md:pt-10 sm:pt-6 pt-4 lg:leading-[36px] text-blue-900 font-bold lg:text-[28px] md:text-2xl sm:text-xl text-lg lg:pb-8 md:pb-6 sm:pb-4 pb-2 lg:max-w-[553px]">
                      Pixel Rank: Industry’s Response to Feature-Rich SERPS
                    </p>
                    <p class="text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md ">
                      Ranks belong to old school SEOs. To cope with 2021’s SERP landscape we need to measure pixels instead of ranks.
                    </p> 
                  </div>
                </div>

                <div class="grid lg:grid-cols-2 grid-cols-1 gap-8 justify-center mx-auto container">
                  <div class="bg-white lg:p-10 p-6 max-w-[650px] text-center lg:text-left">
                    <Image className='' src="/Group 9.png" width={40} height={40}/>
                    <p class="lg:pt-12 md:pt-10 sm:pt-6 pt-4 lg:leading-[36px] text-blue-900 font-bold lg:text-[28px] md:text-2xl sm:text-xl text-lg lg:pb-8 md:pb-6 sm:pb-4 pb-2 lg:max-w-[553px]">
                      Pixel Rank: Industry’s Response to Feature-Rich SERPS
                    </p>
                    <p class="text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md ">
                      Ranks belong to old school SEOs. To cope with 2021’s SERP landscape we need to measure pixels instead of ranks.
                    </p> 
                  </div>

                  <div class="bg-white lg:p-10 p-6 max-w-[650px] text-center lg:text-left">
                    <Image className='' src="/Group 9.png" width={40} height={40}/>
                    <p class="lg:pt-12 md:pt-10 sm:pt-6 pt-4 lg:leading-[36px] text-blue-900 font-bold lg:text-[28px] md:text-2xl sm:text-xl text-lg lg:pb-8 md:pb-6 sm:pb-4 pb-2 lg:max-w-[553px]">
                      Pixel Rank: Industry’s Response to Feature-Rich SERPS
                    </p>
                    <p class="text-gray-600 lg:text-2xl md:text-xl sm:text-lg text-md ">
                      Ranks belong to old school SEOs. To cope with 2021’s SERP landscape we need to measure pixels instead of ranks.
                    </p> 
                  </div>
                </div>
              </div>



          <div class="lg:pb-32 md:pb-24 sm:pb-16 pb-10 xl:ml-24 mx-auto  justify-center items-center align-center">
              <div className="container mb-20 absolute bg-[url('/section-6.png')] -z-30 w-full bg-contain bg-cover justify-center text-center flex flex-col bg-no-repeat mt-16 pt-14 mb-14 mx-auto">
                <p class="mx-auto text-white font-[Source+Sans+Pro] font-semibold lg:text-[54px] md:text-4xl md:text-3xl text-2xl lg:leading-[54px] text-center lg:max-w-[660px] max-w-[300px] mx-auto pb-6">
                  Get Your Custom Analysis in 60 Seconds For Free
                </p>
                <p class="lg:text-2xl md:text-xl sm:text-lg text-sm font-[Source+Sans+Pro] text-white lg:max-w-[700px] md:max-w-[600px] lg:max-w-[700px] max-w-[200px] mx-auto pb-10 ">
                  Don’t spend hours to find eligible keywords to track. Don’t waste yourself in Excel to group those keywords. AI is ready to help you.
                </p>
                <div class="mx-auto relative lg:pb-10 md:pb-6 pb-4">
                  <input placeholder="Enter your domain" class="mx-auto lg:py-8 md:py-6 sm:py-4 py-2 pl-8 rounded-[64px] text-gray-600 lg:w-[644px] max-w-[350px] cursor-pointer focus:outline-none"/>
                  <button class="mx-auto transition duration-600 lg:flex hidden bg-blue-900 text-white font-[Source+Sans+Pro] p-5 absolute right-3 focus:outline-none rounded-[56px] top-3 focus:bg-blue-800 hover:bg-blue-800">
                    Start instant demo
                  </button>
                </div>
                <button class="mx-auto transition duration-600 lg:hidden flex text-blue-900 lg:w-[644px] max-w-[350px] bg-white font-[Source+Sans+Pro] lg:p-5 md:p-4 p-2 focus:outline-none rounded-[56px] top-3 focus:bg-blue-300 hover:bg-blue-200 mx-auto z-30 cursor-pointer">
                  Start instant demo
                </button>
                <ul class="mx-auto list-disc lg:flex gap-x-6 text-center justify-center lg:mt-0 mt-6 mb-48">
                  <li class="text-white lg:text-lg text-md">14 Days Free Trial</li>
                  <li class="text-white lg:text-lg lg:ml-6 text-md">Free Historical Data Migration For All Accounts</li>
                </ul>
              </div>
          </div>


          <div class="lg:flex md:flex container lg:justify-between justify-center mx-auto pt-96">
          <div class="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row gap-32">
            <div class="xl:w-11/12 pt-96 lg:w-11/12 md:w-11/12 sm:w-6/12">
              <div class="relative">
              <Image className='' src="/Shapes.png" width={551} height={699}/>
              <div className='flex '>
              <div>
                <h1 class="absolute top-1/3 mb-3 pb-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Company
                </h1>
                <h1 class="absolute top-1/3 mt-3 pb-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  About
                </h1>
                <h1 class="absolute top-1/3 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Blog
                </h1>
                <h1 class="absolute top-1/3 mt-11 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Carrer
                </h1>
                <h1 class="absolute top-1/3 mt-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Contact
                </h1>
                <h1 class="absolute top-1/3 mt-24 pb-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm ">
                  Help
                </h1>
                <h1 class="absolute top-1/3 mt-28 pb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Knowledge Base
                </h1>
              </div>
              <div>
                <h1 class="absolute top-1/3 mt-36 pb-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Product
                </h1>
                <h1 class="absolute top-1/3 mt-40 pb-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Features
                </h1>
                <h1 class="absolute top-1/3 mt-44 pb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  CLI
                </h1>
                <h1 class="absolute top-1/3 mt-48 pb-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white font-semibold text-sm">
                  Pricing
                </h1>
                </div>
                </div>
              </div>
            </div>
          </div>
              <div>
            <div class="xl:w-[405px] lg:w-[405px] md:w-[405px] sm:w-[310px] 3xl:pt-48 2xl:pt-48 xl:pt-48 lg:pt-48 md:pt-4 sm:pt-4 flex flex-col justify-center items-center mx-auto mt-96">
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
                <div class="gap-x-4 grid grid-cols-3 py-12 w-2/3">
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
              </div>
            </div>

            </div>



           



      </>
    );
  };
  
  export default Index;