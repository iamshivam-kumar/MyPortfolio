import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div><div style={{ backgroundColor: '#00cccc', filter: 'brightness(90%)' }}>
            <hr /><h1 id="projects-section" style={{ textAlign: 'center', color: '#ffff66' }}>ℙ𝕣𝕠𝕛𝕖𝕔𝕥</h1><hr />
        </div>
            {/* <div className='projects-grid' style={{ backgroundColor: ' #dcdcdc', filter: 'brightness(100%)' }}> */}
            <div className='projects-grid'  style={{background: 'url("https://tse2.mm.bing.net/th?id=OIP.lIRgrN_WE67eIfApu3wGwwHaGL&pid=Api&P=0&h=180")' , backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', filter:'brightness(80%)'}}>
                <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.kuUMSfpMWMAjwj-gdzj-MAHaFj&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center'}}>𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼</h5>
                    <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="#"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="#"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin: '20px', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.kZLl70U3rq5gWOdXo8At3wHaFj&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center' }}>𝐌𝐨𝐯𝐢𝐞 𝐀𝐩𝐩</h5>
                    <div style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="#"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="https://github.com/iamshivam-kumar/MOVIE_APP.git"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.FzPaU-ww_yjH8xcHqKF2ygHaDc&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center' }}>𝐒𝐡𝐨𝐩𝐞𝐞</h5>
                    <div className="card-body" style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="https://appscrip-task-shivamkumar.vercel.app/"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="https://github.com/iamshivam-kumar/Appscrip-task-shivamkumar.git"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse2.mm.bing.net/th?id=OIP.tGAGggXV-b2IAICI4Z-HowHaDt&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center' }}>𝐄-𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐞</h5>
                    <div className="card-body" style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="#"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="https://github.com/iamshivam-kumar/E-Commerce.git"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse1.mm.bing.net/th?id=OIP.Q89n1i007pl8RB4klVf-CwHaEK&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center' }}>𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐀𝐩𝐩</h5>
                    <div className="card-body" style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="https://weather-app-eight-orpin.vercel.app/"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="https://github.com/iamshivam-kumar/Weather_App.git"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem', margin: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
                    <img className="card-img-top" src="https://tse3.mm.bing.net/th?id=OIP.iFKo93lIeX31gPNpBVOfYAHaFj&pid=Api&P=0&h=180https://tse3.mm.bing.net/th?id=OIP.iFKo93lIeX31gPNpBVOfYAHaFj&pid=Api&P=0&h=180" alt="Card image cap" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                    <h5 style={{ textAlign: 'center' }}>𝐂𝐨𝐯𝐢𝐝 𝐓𝐫𝐚𝐜𝐤𝐞𝐫</h5>
                    <div className="card-body" style={{ display: 'flex', marginBottom: '20px', justifyContent: 'space-around' }}>
                        <Link to="https://covid-tracker-two-lac.vercel.app/"><button className="card-button">​🇻​​🇮​​🇸​​🇮​​🇹</button></Link>
                        <Link to="https://github.com/iamshivam-kumar/Covid-Tracker.git"><button className="card-button">​🇸​​🇴​​🇺​​🇷​​🇨​​🇪​ ​🇨​​🇴​​🇩​​🇪​</button></Link>
                    </div>
                </div>
            </div></div>
    )
}

export default Project