import Head from 'next/head';
import Authentication from '../form-layout';
import Image from 'next/image';
import Img from '/image/images.jpg';
import DateSection from '../date/Date';
import FileUpload from '../upload/FileUpload.jsx';

export const StepOne = () => {

    return (
        <form>
            <div className="flex">
                <div className="w-1/2 mt-40 hidden md:block">
                    <Image src={Img} alt="form-image" />
                </div>
                <div className="w-full h-screen bg-gray-900">
                    <div className="m-10 h-5/6">
                        <span className="text-center font-semibold text-7xl before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-white relative inline-block left-1/3">
                            <span className="text-gray-900 relative">
                                Sign UP
                            </span>
                        </span>

                        <div className="flex mt-20 justify-center items-center w-100">
                            <div className="mr-10">
                                <p className="text-white font-semibold">First Name</p>
                                <input type="text" className='w-60 h-14 p-2 mt-3 rounded-xl inline-transparent focus:outline-transparent
                  border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  '/>
                            </div>
                            <div className="">
                                <p className="text-white font-semibold">Last Name</p>
                                <input type="text" className='w-60 h-14 p-2 mt-3 rounded-xl' />
                            </div>
                        </div>

                        <div className="flex mt-10 justify-center items-center w-100">
                            <div className="mr-10">
                                <p className="text-white font-semibold">Date of Birth</p>
                                <div className="bg-white flex items-center justify-center mt-3 space-x-4 w-60 h-14 p-2 rounded-xl">
                                    <DateSection />
                                </div>
                            </div>
                            <div className="">
                                <p className="text-white font-semibold">Email Address</p>
                                <input type="text" className='w-60 h-14 p-2 mt-3 rounded-xl' />
                            </div>
                        </div>

                        <div className='flex w-100 mt-10 justify-center'>
                            <div className='w-60 flex flex-col mr-10 '>
                                <p className="text-white font-semibold">Upload CV</p>
                                <div className="mt-3 rounded-lg ">
                                    <FileUpload />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-white font-semibold">Contact Address</p>
                                <input type="text" className='w-60 h-14 p-2 mt-3 rounded-xl' />
                            </div>
                        </div>
                        <div className="mt-14 text-center">
                            <button className="bg-transparent text-blue-700 font-semibold py-2 px-6 border border-blue-500 hover:border-transparent text-lg rounded-xl hover:border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100">
                                Next Step
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export const StepTwo = () => {
    return (
        <form className="w-screen" >
            <div className="flex">
                <div className="w-1/2 mt-40 hidden md:block">
                    <Image src={Img} alt="form-image" />
                </div>
                <div className="w-full h-screen bg-gray-900">
                    <div className="m-10 h-5/6">
                        <span className="text-center font-semibold text-7xl before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-white relative inline-block left-1/3">
                            <span className="text-gray-900 relative">
                                Sign UP
                            </span>
                        </span>

                        <div className="pl-11 mt-16">
                            <span className="pt-10 text-gray-300">Step 2/3</span>
                            <p className="text-white font-semibold text-4xl  mt-1">Message</p><br />
                            <hr className="w-4/5" />
                        </div>

                        <div className="mt-10 pl-11">
                            <p className="text-white font-semibold mb-3">message</p>
                            <textarea className="h-60 w-4/5 rounded-2xl p-3"></textarea>
                        </div>
                        <div className="flex justify-start mt-5 text-white">
                            <p className="pl-11 mr-7">
                                <input type="checkbox" className="default:ring-2 mr-3" />The number one choice
                            </p>
                            <p>
                                <input type="checkbox" className="default:ring-2 mr-3" />The number two choice
                            </p>
                        </div>

                        <div className="mt-14 flex justify-around items-center w-5/6">
                            <button className="bg-transparent text-blue-700 font-semibold py-2 px-6 border border-blue-500 hover:border-transparent text-lg rounded-xl hover:border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100">
                                Next Step
                            </button>
                            <button className="bg-transparent text-blue-700 font-semibold py-2 px-6 border border-blue-500 hover:border-transparent text-lg rounded-xl hover:border-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100">
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export const StepThree = () => {
    return (
        <form>
            <div>
                <Image src={Img} alt="form-image"
                />
            </div>
            <div>
                {/* step */}
            </div>
            <form>
                {/* content */}
                {/* button */}
            </form>
        </form>
    )
}

export default function Home() {
    return (
        <Authentication>
            <div>
                <Head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                    {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet"></link> */}
                </Head>
                <StepOne />
                {/* <StepTwo/> */}
            </div>
        </Authentication>
    )
}