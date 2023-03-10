import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "./navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>React</title>
        <meta name="description" content="Generated by create-t3-app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
      <div id="root">
        <div className="bg-primary w-full overflow-hidden">
          <div className="sm:px-16 px-6 flex justify-center items-center">
            <div className="xl:max-w-[1280px] w-full">
              <nav className="w-full flex py-6 justify-between items-center navbar">
                <img src="https://modernhoobank.netlify.app/assets/logo.efc6c435.svg" alt="hoobank" className="w-[124px] h-[32px]" />
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    <li className="main__text font-normal cursor-pointer text[16px] mr-10 text-white ">
                      <a href="#home">Home</a>
                    </li>
                    <li className="main__text font-normal cursor-pointer text[16px] mr-10 text-white ">
                    <a href="#features">Features</a>
                    </li>
                    <li className="main__text font-normal cursor-pointer text[16px] mr-10 text-white ">
                    <a href="#product">Product</a>
                    </li>
                    <li className="main__text font-normal cursor-pointer text[16px] mr-10 text-white ">
                    <a href="#clients">Clients</a>
                    </li>
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                  <img src="https://modernhoobank.netlify.app/assets/menu.e0613cf3.svg" alt="menu" className="w-[28px] h-[28px] object-contain" />
                </div>
                <div className="hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
                  <ul className="list-none flex flex-col justify-end items-center flex-1">
                    <li className="font-poppins font-normal cursor-pointer text[16px] mb-4 text-white ">
                    <a href="#home">Home</a>
                    </li>
                    <li className="font-poppins font-normal cursor-pointer text[16px] mb-4 text-white ">
                    <a href="#">Features</a>
                    </li>
                    <li className="font-poppins font-normal cursor-pointer text[16px] mb-4 text-white ">
                    <a href="#">Product</a>
                    </li>
                    <li className="font-poppins font-normal cursor-pointer text[16px] mb-4 text-white ">
                    <a href="#">Clients</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="bg-primary flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
              <section id="home" className="flex md:flex-row flex-col mt-6">
                <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
                  <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
                    <img src="https://modernhoobank.netlify.app/assets/Discount.61d9dc08.svg" alt="discount" className="w-[32px] h-[32px]" />
                    <p className="main__text font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
                      <span className="text-white">20% </span>
                      Discount For
                      <span className="text-white"> 1 Months </span>
                      Account
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <div>
                      <h1 className="flex-1 main__text font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                        The Next
                        <br className="sm:block hidden"/>
                      </h1>
                      <h1 className=" flex-1 main__text font-semibold ss:text-[72px] text-[52px]  ss:leading-[100px] leading-[75px] text-gradient">
                        Generation
                      </h1>
                    </div>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                      <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer">
                        <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
                          <div className="flex justify-center items-start flex-row">
                            <p className="main__text font-medium text-[18px] leading-[23px]">
                              <span className="text-gradient">Get</span>
                            </p>
                            <img src="https://modernhoobank.netlify.app/assets/arrow-up.012ff21b.svg" alt="arrow" className="w-[23] h-[23px] object-contain" />
                          </div>
                          <p className="main__text font-medium text-[18px] leading-[23px]">
                            <span className="text-gradient">Started</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className=" main__text font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                  Payment method.
                  </h1>
                  <p className="main__text font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                    Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
                    </p>
                </div>
                <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
                  <img src="https://modernhoobank.netlify.app/assets/robot.352cd501.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                  <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
                  <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient"></div>
                  <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
                </div>
                <div className="ss:hidden flex justify-center items-center">
                </div>
              </section>
            </div>
          </div>
          <div className="bg-primary sm:px-16 px-6 flex justify-center items-start">
            <div className="xl:max-w-[1280px] w-full">
              <section className="flex justify-center items-center flex-row flex-wrap sm:mt-20 mt-6">
                <div className="flex-1 flex flex-row justify-center sm:justify-start items-center ">
                  <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
                  3800+
                  </h4>
                  <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                  User Active
                  </p>
                </div>
                <div className="flex-1 flex flex-row justify-center sm:justify-start items-center ">
                  <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
                  <p>
                  230+
                  </p>
                  </h4>
                  <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                  Trusted by Company
                  </p>
                </div>
                <div className="flex-1 flex flex-row justify-center sm:justify-start items-center ">
                  <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
                    <p>$230M+</p>
                  </h4>
                  <p className="font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                  Transaction
                  </p>
                </div>
              </section>
              <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6 mt-10">
                <div className="flex-1 flex justify-center items-start flex-col">
                  <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                  You do the business, 
                  <br className="sm:block hidden" />
                  we will handle the money.
                  </h2>
                  <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                  With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                  </p>
                  <div>
                    <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-10">
                    Get Started
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
                  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                      <img src="https://modernhoobank.netlify.app/assets/Star.b8bf87ea.svg" alt="icon" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                      Rewards
                      </h4>
                      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                      The best credit cards offer some tantalizing combinations of promotions and prizes
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                      <img src="https://modernhoobank.netlify.app/assets/Shield.6d9e87e5.svg" alt="icon" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                      100% Secured
                      </h4>
                      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                      We take proactive steps make sure your information and transactions are secure.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row p-6 rounded-[20px] mb-6 feature-card">
                    <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
                      <img src="https://modernhoobank.netlify.app/assets/Send.454b3199.svg" alt="icon" className="w-[50%] h-[50%] object-contain" />
                    </div>
                    <div className="flex-1 flex flex-col ml-3">
                      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                      Balance Transfer
                      </h4>
                      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                      A balance transfer credit card can save you a lot of money in interest charges.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="product" className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
               <div className="flex-1 flex flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
                <img src="https://modernhoobank.netlify.app/assets/bill.fd47dad8.png" alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
                <div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient"></div>
                <div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient"></div>
               </div>
               <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                Easily control your 
                <br className="sm:block hidden" />
                billing & invoicing
                </h2>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                  <p aria-label="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat." role="heading">
                  Vivamus vehicula tortor et est gravida, quis rutrum dui gravida. Quisque iaculis nisl ante, nec lacinia quam congue sed. Integer quis mattis eros. Ut viverra.
                  </p>
                </p>
                <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                  <img src="https://modernhoobank.netlify.app/assets/apple.994d47a8.svg" alt="appstore" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                  <img src="https://modernhoobank.netlify.app/assets/google.3035153f.svg" alt="googleplay" className="w-[128px] h-[42px] object-contain  cursor-pointer" />
                </div>
               </div>
              </section>
              <section className="flex md:flex-row flex-col sm:py-16 py-6">
              <div className="flex-1 flex justify-center items-start flex-col">
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                Find a better card deal 
                <br className="sm:block hidden" />
                in few easy step
                </h2>
                <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                  <p aria-label="Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat." role="heading">
                  Vivamus vehicula tortor et est gravida, quis rutrum dui gravida. Quisque iaculis nisl ante, nec lacinia quam congue sed. Integer quis mattis eros. Ut viverra.
                </p>
                </p>
                <div>
                  <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] mt-10">
                  Get Started
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
                <img src="https://modernhoobank.netlify.app/assets/card.af071def.png" alt="card" className="w-[100%] h-[100%]" />
              </div>
              </section>
              <section id="clients" className="sm:py-16 py-6 flex justify-center items-center flex-col relative mt-8">
                 <div className="absolute z-[0] w-[60%] h-[60%] -right-[60%] rounded-full blue__gradient"></div>
                 <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                  <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                  What people are 
                  <br className="sm:block hidden" />
                  saying about us
                  </h1>
                  <div className="w-full md:mt-0 mt-6">
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
                      <p aria-label="Everything you need to accept card payments and grow your business anywhere on the planet." role="heading">
                      Everything you need to accept card payments and grow your business anywhere on the planet.
                      </p>
                    </p>
                  </div>
                 </div>
                 <div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
                  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                    <img src="https://modernhoobank.netlify.app/assets/quotes.a87d5e6d.svg" alt="double_quotes" className="w-[42px] h-[27px]  object-contain" />
                    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                      <p aria-label="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.">
                      Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                      </p>
                    </p>
                    <div className="flex flex-row ">
                     <img src="https://modernhoobank.netlify.app/assets/people01.a772086b.png" alt="Herman Jensen" className="w-[48px] h-[48px] rounded-full" />
                     <div className="flex flex-col ml-4">
                      <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
                      Herman Jensen
                      </h4>
                      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
                        <p aria-label="Founder & Leader" role="heading">
                        Founder & Leader
                        </p>
                      </p>
                     </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                    <img src="https://modernhoobank.netlify.app/assets/quotes.a87d5e6d.svg" alt="double_quotes" className="w-[42px] h-[27px]  object-contain" />
                    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                      <p aria-label="Money makes your life easier. If you're lucky to have it, you're lucky." role="heading">
                      Money makes your life easier. If you're lucky to have it, you're lucky.
                    </p>
                    </p>
                    <div className="flex flex-row ">
                      <img src="https://modernhoobank.netlify.app/assets/people02.ee8ce82b.png" alt="Steve Mark" className="w-[48px] h-[48px] rounded-full" />
                    <div className="flex flex-col ml-4">
                      <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
                      Steve Mark
                      </h4>
                      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
                        <p aria-label="Founder & Leader" role="heading">
                        Founder & Leader
                        </p>
                      </p>
                    </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
                    <img src="https://modernhoobank.netlify.app/assets/quotes.a87d5e6d.svg" alt="double_quotes" className="w-[42px] h-[27px]  object-contain" />
                    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                      <p aria-label="It is usually people in the money business, finance, and international trade that are really rich." role="heading">
                      It is usually people in the money business, finance, and international trade that are really rich.
                      </p>
                    </p>
                    <div className="flex flex-row ">
                      <img src="	https://modernhoobank.netlify.app/assets/people03.d9f4f98a.png" alt="Kenn Gallagher" className="w-[48px] h-[48px] rounded-full" />
                      <div className="flex flex-col ml-4">
                        <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
                        Kenn Gallagher
                        </h4>
                        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
                          <p aria-label="Founder & Leader" role="heading">
                          Founder & Leader
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                 </div>
              </section>
              <section className="flex justify-center items-center my-4">
                 <div className="flex justify-center items-center flex-wrap w-full">
                  <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                  <img src="https://modernhoobank.netlify.app/assets/airbnb.ac0ba47e.png" alt="airbnb" className="sm:w-[192px] w-[100px] object-contain" />
                  </div>
                  <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                    <img src="https://modernhoobank.netlify.app/assets/binance.ef218256.png" alt="binance" className="sm:w-[192px] w-[100px] object-contain" />
                  </div>
                 <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                  <img src="https://modernhoobank.netlify.app/assets/coinbase.fd06c89f.png" alt="coinbase" className="sm:w-[192px] w-[100px] object-contain" />
                 </div>
                 <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px]">
                  <img src="https://modernhoobank.netlify.app/assets/dropbox.fb49a0e9.png" alt="dropbox" className="sm:w-[192px] w-[100px] object-contain" />
                 </div>
                 </div>
              </section>
              <section className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
                <div className="flex-1 flex flex-col">
                  <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
                  Let's try our service now
                  </h2>
                  <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
                  Everything you need to accept card payments and grow your business anywhere on the planet.
                  </p>
                </div>
                <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
                  <button type="button" className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] undefined">
                  Get Started
                  </button>
                </div>
              </section>
              <section id="footer" className="flex justify-center items-center sm:py-16 py-6 flex-col">
                 <div className="flex justify-center items-start  md:flex-row flex-col mb-8 w-full">
                  <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src="https://modernhoobank.netlify.app/assets/logo.efc6c435.svg" alt="hoobank" className="w-[266px] h-[72px] object-contain" />
                    <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-4 max-w-[310px]">
                    A new way to make the payments easy, reliable and secure.
                    </p>
                  </div>
                  <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                      <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                      Useful Links
                      </h4>
                      <ul>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Content
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        How it Works
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Create
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Explore
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Terms and Services
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                      <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                      Community
                      </h4>
                      <ul>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Help Center
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Partners
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Suggestions
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Blog
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Newsletter
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                      <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                      Partner
                      </h4>
                      <ul>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Our Partner
                        </li>
                        <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0">
                        Become a Partner
                        </li>
                      </ul>
                    </div>
                  </div>
                 </div>
                 <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
                  <p className="font-poppins font-medium text-[18px] leading-[27px] text-white text-center">
                  Copyright 2023 HooBank. All Rights Reserved.</p>
                  <div className="flex flex-row md:mt-0 mt-6">
                    <img src="https://modernhoobank.netlify.app/assets/instagram.a54e883a.svg" alt="social-media-1" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    <img src="https://modernhoobank.netlify.app/assets/facebook.b1172216.svg" alt="social-media-2" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    <img src="https://modernhoobank.netlify.app/assets/twitter.8f349e28.svg" alt="social-media-3" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                    <img src="https://modernhoobank.netlify.app/assets/linkedin.3be30c66.svg" alt="social-media-4" className="w-[21px] h-[21px] object-contain cursor-pointer mr-0" />
                  </div>
                 </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      </body>
    </>
  );
};

export default Home;
