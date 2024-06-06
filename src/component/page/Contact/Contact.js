import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setTimeout(() => {
            emailjs
                .sendForm('service_y0cosg8', 'template_7mmjkte', form.current, {
                    publicKey: 'KMiuPUdzm9qW24_Rq',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        alert('Your message has been sent successfully!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }, 3000);
    };

    return (
        <div>
            <div style={{ backgroundColor: '#ccffff' }}>
            <hr /><h1 id="projects-section" style={{ textAlign: 'center', color: 'green' }}>ℂ𝕠𝕟𝕥𝕒𝕔𝕥</h1><hr />
            </div>
            {/* <div style={{ backgroundColor: '#8FBC8F', filter: 'brightness(150%)' }}> */}
            <div style={{background:'url("https://tse4.mm.bing.net/th?id=OIP.R5H-1lvL6kYEtsFykIOTJwHaEy&pid=Api&P=0&h=180")' , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter:'brightness(50%)'}}>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact'>
                        <div>
                            <img
                                className='image2'
                                // src='https://tse2.mm.bing.net/th?id=OIP.2S17bjFhXIUIMENZzM5thAHaEp&pid=Api&P=0&h=180'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01tRaE9-5ok2KSNoj7l1HsVkAHvOcztjMBQ&s'
                                alt='Contact Us'
                            />
                        </div>
                        <div className='container'>
                            <h1 style={{ textAlign: 'center' }}>Let's Contact</h1>
                            <label>Name</label>
                            <input type="text" name="to_name" />
                            <label>Mobile</label>
                            <input type='text' name='from_number' />
                            <label>Email</label>
                            <input type="email" name="from_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" className="submit-button" style={{ marginLeft: '10px' }} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
