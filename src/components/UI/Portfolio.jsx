import { useEffect, useState } from 'react';
import data from '../../assets/data/portfolioData';
import Modal from './Modal';
const Portfolio = () => {

    const [nextItem, setNextItem] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const loadMoreHandle = () => {
        setNextItem(prev => prev + 3);
    }

    const showModalHandler = (id)=>{
        setShowModal(true);
        setActiveID(id)
    }

   useEffect(()=>{
        if(selectTab == 'all'){
            setPortfolios(data)
        }

        if(selectTab == 'front-end'){
            const filterData = data.filter(item => item.category == 'front-end')
            setPortfolios(filterData)
        }
        if(selectTab == 'full-stack'){
            const filterData = data.filter(item => item.category == 'full-stack')
            setPortfolios(filterData)
            // console.log('ux design');
        }

   },[selectTab])

    return (
        <section id='portfolio'>
            <div className='container'>
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2rem] font-[700]'>
                            My Recent  Projects
                        </h3>
                    </div>
                    <div className='flex gap-3'>
                        <button onClick={()=>setSelectTab('all')}  className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            All
                        </button>
                        <button onClick={()=>setSelectTab('front-end')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                        front-end
                        </button>
                        <button onClick={()=>setSelectTab('full-stack')} className='text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>
                            Full Stack 
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12'>
                    {
                        portfolios?.slice(0, nextItem)?.map((portfolio, index) => (
                            <div key={index} data-aos='fade-zoom-in' data-aos-duration='1000' data-aos-delay='100' className='group max-w-full sm:w-[48.5%] md:w-[32.2%] lg:w-[32.2%] relative z-[1] rounded-[8px]'>
                                <figure>
                                    <img className='rounded-[8px] ' src={portfolio.imgUrl} alt="" />
                                </figure>

                                <div className='w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]'>
                                    <div className='w-full h-full flex items-center justify-center '>
                                        <button onClick={()=>showModalHandler(portfolio.id)} className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>See Details</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='text-center mt-6'>
                    {
                        nextItem < data.length && data.length > 6 && (
                        <button onClick={loadMoreHandle} className='text-white bg-primaryColor  hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                            Load More
                        </button>

                        )}

                </div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
            }
        </section>
    );
};

export default Portfolio;