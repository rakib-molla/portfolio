import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-[#12141e] py-12 w-full'>
            <div className='container'>
                <div className='sm: flex items-center justify-between md:gap-5'>
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem] capitalize'>
                            Do You want more beautiful product ?
                        </h2>
                        <a target='_blank' href="https://www.fiverr.com/rakib_molla">
                            <button  className='bg-primaryColor text-white font-[500] flex items-center gap-3 hover:bg-smallTextColor ease-id duration-300 py-2 px-4 rounded-[8px] ms-3'> <i className='ri-mail-line'>Hire Me</i></button>
                        </a>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <p className='text-gray-200 leading-7 mt-4 sm:mt-0'>
                        Responsive Design: Ensure that your website is responsive and adapts to different screen sizes and devices. Use responsive design techniques, such as fluid layouts and CSS media queries, to optimize the website's appearance on mobile devices, tablets, and desktops. <br />

                        Performance Optimization: Optimize your website's performance by minimizing the file size of assets (images, scripts, stylesheets), leveraging caching techniques, and optimizing code. Users appreciate fast-loading websites, so ensure your website loads quickly and efficiently.
                        </p>
                        <div className='flex  items-center  gap-4 flex-wrap md:gap-8 mt-10'>
                            <span className='text-gray-300 font-[600] text-[15px]'>Follow Me:

                                <span className='w-[35px] h-[35px] bg-[#121433] rounded-[50px] cursor-pointer text-center ml-4'>
                                    <a href="https://github.com/rakib-molla" className='text-gray-300 font-[500] text-[18px] '><i className="ri-github-line"></i></a>
                                </span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#1b1e29] py-3 mt-14'>
                <div className='container'>
                    <div className='flex items-center justify-center sm:justify-center'>
                        <div className='hidden sm:block'>
                            <div className='flex items-center gap-[10]'>
                                <span className='w-[35px] h-[36px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center '>
                                    M
                                </span>
                                
                                <div className='leading-[20px] ml-2'>
                                    <h2 className='text-xl text-white font-[700]'>Rakib Molla</h2>
                                    <p className='text-white text-[18px] font-[500]'> Personal Portfolio Website</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-white text-center mt-5'>
                            Copyright {year} Develop by Md Rakib Molla - All right reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;