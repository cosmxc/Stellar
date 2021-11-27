import Signup from './views/signup';
import mockup from './assets/imgs/mockup.png';
import logo from './assets/imgs/logo.png';
import mail from './assets/imgs/mail.svg';
import phone from './assets/imgs/phone.svg';
import { useState } from 'react';
import 'animate.css';

function App() {
  const [nav, setNav] = useState(false)
  const [top, setTop] = useState(false)

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setNav(true)
      setTop(true)
    } else {
      setNav(false)
      setTop(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  return (
    <div className="App">
      <header className={nav ? 'navbar active' : 'navbar animate__animated animate__slideInDown '}>
        <div className="logo">
          <img alt="logo" src={logo}></img>
          <h1>Stellar</h1>
        </div>
        <ul>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#request"><li>Request</li></a>
          <a href="#donate"><li>Donate</li></a>
        </ul>
      </header>

      <div className="bg" id="home">
        <a href="#top"><div className={top ? 'stt active animate__animated animate__slideInUp' : 'stt '}><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 3l12 18h-24z" /></svg></div></a>
        <div className="intro">
          <h1 className=" animate__animated animate__slideInLeft">We've got your back!</h1><br></br>
          <p className=" animate__animated animate__slideInLeft">If you are a front-liner who's having a hard time with traveling from your home to your work place, we will cover up to 50$ of your cab, uber, or lyft ride.</p>
          <a href="#request"><button className="animate__animated animate__slideInLeft">Get Started</button></a>
          <img alt="mockup" src={mockup}></img>
        </div>
      </div>

      <div className="about animate__animated animate__zoomIn" id="about">
        <div className="title">
          <h1>Stellar is continuous project</h1>
          <p>The commitment and service of frontline workers is HEROISM.</p>
        </div>
        <div className="about-content">
          <p>The COVID-19 pandemic resulted in an increase in psychological distress among frontline workers. Our goal is to create an initiative to help Front-liners travel to their destinations safely in the wake of the current situation. Seeing all the news and headlines about them made us realize how hard they work and that we should do something for them in return.</p>
          <p>Using taxi services are a great alternative to public transportation, but we all know that not everyone has the disposable income to use them on a regular basis. To reduce the frustration and stress of the frontline workers, we will help them by giving them free safe rides towards to their destinations. So, if you're a frontline worker, go fill up the request form with all the details required along with a picture of the receipt and your work ID, which will be reviewed. Once approved, we will be reimbursing your ride fare!</p>
        </div>
      </div>

      <div className="landing">
        <div className="pros">
          <h1>Process</h1>
          <div className="pros-content">
            <div className="cont"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="taxi" role="img" viewBox="0 0 512 512" class="svg-inline--fa fa-taxi fa-w-16 fa-2x"><path fill="currentColor" d="M462 241.64l-22-84.84c-9.6-35.2-41.6-60.8-76.8-60.8H352V64c0-17.67-14.33-32-32-32H192c-17.67 0-32 14.33-32 32v32h-11.2c-35.2 0-67.2 25.6-76.8 60.8l-22 84.84C21.41 248.04 0 273.47 0 304v48c0 23.63 12.95 44.04 32 55.12V448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-40.88c19.05-11.09 32-31.5 32-55.12v-48c0-30.53-21.41-55.96-50-62.36zM96 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm20.55-112l17.2-66.36c2.23-8.16 9.59-13.64 15.06-13.64h214.4c5.47 0 12.83 5.48 14.85 12.86L395.45 240h-278.9zM416 352c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z" class=""></path></svg><p>Ride a cab</p></div><svg width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
            <div className="cont"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="id-card" role="img" viewBox="0 0 576 512" class="svg-inline--fa fa-id-card fa-w-18 fa-2x"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z" class=""></path></svg><p>Take photo of files</p></div><svg width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
            <div className="cont"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" role="img" viewBox="0 0 576 512" class="move svg-inline--fa fa-file-signature fa-w-18 fa-2x"><path fill="currentColor" d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z" className="move"></path></svg><p>Fill up the form</p></div><svg width="24" height="24" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" /></svg>
            <div className="cont"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-check" role="img" viewBox="0 0 640 512" class="move svg-inline--fa fa-user-check fa-w-20 fa-2x"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" className="move"></path></svg><p>Done!</p></div>
          </div>
        </div>
      </div>

      <Signup />

      <div className="donate" id="donate">
        <div className="intro">
          <h1>Donation Is An Act<br></br> Of A Soft Heart.</h1><br></br>
          <p>If you want to help our front-liners who needs help with their travel expenses so they can continue being a hero during this pandemic, this is your chance and it is highly appreciated.</p>
          <a href="https://paypal.com" rel="noreferrer" target="_blank"><button>PayPal</button></a>
          <a href="https://venmo.com" rel="noreferrer" target="_blank"><button>Venmo</button></a>
        </div>
      </div>

      <footer>
        <div className="footer-content">

          <div className="links dev">
            <div className="title">ABOUT THE DEVELOPER</div>
            <p>A 17 year-old high school student mainly made this project with react.js. The idea came from the current situation in this pandemic, she thought why not make something that would help the essential workers in return.</p>
          </div>

          <div className="links">
            <div className="title">LINKS</div>
            <ul className="footer-links">
              <li><a href="#home" className="btn btn-default" rel="nofollow noopener">Home</a></li>
              <li><a href="#about" className="btn btn-default" rel="nofollow noopener">About</a></li>
              <li><a href="#request" className="btn btn-default" rel="nofollow noopener">Request</a></li>
              <li><a href="#donate" className="btn btn-default" rel="nofollow noopener">Donate</a></li>
            </ul>
          </div>

          <div className="links contact">
            <div className="title">CONTACT</div>
            <ul>
              <li><img src={mail} alt="svg"></img><p>contact@stellar.com</p></li>
              <li><img src={phone} alt="svg"></img><p>+1-234-5678</p></li>

            </ul>
          </div>

        </div>
        <p className="copyright">© Stellar 2021. All Rights Reserved.</p>
      </footer>
    </div >
  );
}

export default App;
