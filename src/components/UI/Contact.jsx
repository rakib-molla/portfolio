import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ss7fbbg', 'template_1wjvx7c', form.current, 'QUUiG9-O2PzFFihdn')
            .then((result) => {
                if(result.status === 200){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            
            }, (error) => {
                console.log(error.text);
            });
    };

  
    return (
        <section id='contact' className='pb-16 '>
            <div className='container'>
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-5 text-center'>Get In Touch</h2>
                <div className='md:flex justify-between items-center'>
                    <div className='w-full md:w-1/2 h-[600px] sm:h-[450px]'>
                        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2972.306476430985!2d90.38813677161833!3d23.734174642306115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c1f25e613d%3A0xaad562eec578f8ff!2sArts%20Faculty%2C%20Dhaka%201205!5e1!3m2!1sen!2sbd!4v1687719487108!5m2!1sen!2sbd" className='border-0 w-full h-full' allowFullScreen='' loading="lazy" ></iframe>
                    </div>
                    <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <div className='w-full'>
                            <form ref={form} onSubmit={sendEmail}>

                                <div className='mb-5'>
                                    <input type="text" name="user_name" required placeholder='Enter Your Name' className='w-full p-3 focus:outline-none rounded-[5px]' />
                                </div>
                                <div className='mb-5'>
                                    <input type="email" name="user_email" required placeholder='Enter Your Email' className='w-full p-3 focus:outline-none rounded-[5px]' />
                                </div>
                                <div className='mb-5'>
                                    <textarea name="message" required placeholder='Write Your Message' className='w-full p-3 focus:outline-none rounded-[5px]' rows="3"></textarea>
                                </div>
                                <button type='submit' value='Send' className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-200'>Send Message</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;