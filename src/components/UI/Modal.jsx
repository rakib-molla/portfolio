import { prototype } from 'postcss/lib/comment';
import portfolios from '../../assets/data/portfolioData';
import { Link } from 'react-router-dom';

const Modal = ({ activeID, setShowModal }) => {

    const portfolio = portfolios.find(portfolio => portfolio.id == activeID);

    return (
        <div className='w-full h-full fixed mt-[70px] top-0 left-0  z-40 bg-headingColor bg-opacity-40' id='modal'>
            <div className='w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5'>
                <div className=''>
                    <figure>
                        <img className='rounded-[8px] w-full h-[200px]' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>
                <div>
                    <h2 className='text-2xl text-headingColor font-[700] my-2'>{portfolio.title}</h2>
                    <p className='text-[15px] leading-6 text-smallTextColor'>
                        {portfolio.description}
                    </p>
                    <div className='mb-2 flex items-center gap-3 flex-wrap '>
                        <h4 className='text-headingColor text-[18px] text-[700]'>Technologies: </h4>
                        {
                            portfolio.technologies.map((item, index)=>(
                                
                                <span key={index} className='bg-gray-500 px-2 rounded-[5px] text-[14px] leading-0'>
                                {item}
                                </span>
                            ))
                        }
                    </div>
                    <div className=' flex items-center gap-3 flex-wrap my-2'>
                        <article>
                            {portfolio.details}
                        </article>
                    </div>
                    <a>
                        <a href={portfolio.demo} target='_blank' className='bg-primaryColor ms-2 text-white py-2 px-4 my-8 rounded-[8px] hover:bg-black hover:text-white'>Demo</a>
                        <a href={portfolio.server} target='_blank' className='bg-primaryColor ms-2 text-white py-2 px-4 my-8 rounded-[8px] hover:bg-black hover:text-white'> Server </a>
                        <a href={portfolio.client} target='_blank' className='bg-primaryColor ml-2 text-white py-2 px-4 my-8 rounded-[8px] hover:bg-black hover:text-white'> Client </a>
                        </a>
                </div>
                <button onClick={()=>setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>x</button>
            </div>
        </div>
    );
};

export default Modal;