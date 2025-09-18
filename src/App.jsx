import './App.css'
import { useState, useEffect, useRef } from "react";
import dp from './assets/image/dp.jpeg';
import HTML from './assets/image/HTML.jpg';
import CSS from './assets/image/css.jpg';
import js from './assets/image/js.jpg';
import React from './assets/image/react1.jpg';
import mongodb from './assets/image/mongodb.jpg'
import node from './assets/image/node.jpg';
import ex from './assets/image/ex.png';
import git from './assets/image/git.jpg';
import bootstrap from './assets/image/bootstrap.jpg';
import chatgpt from './assets/image/chatgpt.jpg';
import linus from './assets/image/linux.jpg';
import tailwind from './assets/image/tailwind.jpg';
import github from './assets/image/git hub.jpg';
import coffee from './assets/image/coffee.png';
import car from './assets/image/car.png';
import pet from './assets/image/pet.png';
import ecommerce from './assets/image/ecommerce.png';
import books from './assets/image/books.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blur, setBlur] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newBlur = Math.min(scrollY / 40, 10);
      setBlur(newBlur);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  useEffect(() => {
    setTimeout(() => {
      Aos.init({
        duration: 1000,
        offset: 200,
        once: false,
      });
    }, 100);
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <div className='nav-cont'>
          <h1>MK</h1>
        </div>
          <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
          <div className={`nav-text ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection(homeRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(skillsRef)}>Skills</button>
          <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </nav>

      <div
        className="home-pg"
        ref={homeRef}
        style={{ filter: `blur(${blur}px)` }}
      >

        <div>
          <h2 className="typing-box">
            <h1 className="typing">Hi Myself Krishnan</h1>
            <h2 className="typing2">&lt;&gt; I am  MERN Stack Developer... &lt;/&gt;</h2>
          </h2>
        </div>
      </div>
      <div className='about-pg' ref={aboutRef}>
        <h1 className='about-h1' data-aos="fade-up">About</h1>

        <div className="about-img" data-aos="fade-right" data-aos-delay="200">
          <img src={dp} alt="" />
        </div>

        <div className='about-text' data-aos="fade-left" data-aos-delay="400">
          <p>
           Hi, I’m M. Krishnan, a passionate MERN Stack Developer who loves turning creative ideas into functional and responsive web applications. With hands-on experience in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, I enjoy building clean user interfaces, robust backends, and scalable solutions.

I’ve worked on projects like E-commerce platforms, dashboards, task management apps, and business websites—always focusing on smooth navigation, cross-device compatibility, and optimized performance.

Beyond coding, I believe in continuous learning, problem-solving, and teamwork. My goal is to create applications that not only work flawlessly but also provide an engaging user experience.
          </p>
        </div>
      </div>
      <div className="skill-pg" ref={skillsRef} data-aos="fade-up">
        <h1> Skills</h1>
        <div className='skill-cont'>
          <div className='use' data-aos="fade-right">Using Now
            <div className='HTML'><img src={HTML} alt="" /></div>
            <div className='CSS'><img src={CSS} alt="" /></div>
            <div className='js'><img src={js} alt="" /></div>
            <div className='React'><img src={React} alt="" /></div>
            <div className='mongodb'><img src={mongodb} alt="" /></div>
          </div>
          <div className='Lerning' data-aos="fade-left">Learning
            <div className='node'><img src={node} alt="" /></div>
            <div className='ex'><img src={ex} alt="" /></div>
            <div className='linus'><img src={linus} alt="" /></div>
            <div className='tailwind'><img src={tailwind} alt="" /></div>
          </div>
          <div className="Familiar" data-aos="fade-up">Familiar
            <div className='git'><img src={git} alt="" /></div>
            <div className='github'><img src={github} alt="" /></div>
            <div className='bootstrap'><img src={bootstrap} alt="" /></div>
            <div className='chatgpt'><img src={chatgpt} alt="" /></div>
          </div>
        </div>
      </div>
      <div className='projects-pg' ref={projectsRef} >
        <div className='pj-head' data-aos="fade-up"><h1>Projects</h1></div>
        <div className='pj-grid' data-aos="fade-up">
          <div className='pj-1' data-aos="fade-right" onClick={() => window.open("https://krishnan026.github.io/coffee-shop/")}><img src={coffee} alt="" /></div>
          <div className='pj-2' data-aos="fade-up" onClick={() => window.open("https://krishnan026.github.io/vintage-car-Garage/")}><img src={car} alt="" /></div>
          <div className='pj-3' data-aos="fade-left" onClick={() => window.open("https://krishnan026.github.io/petshop/")}><img src={pet} alt="" /></div>
          <div className='pj-4' data-aos="fade-right" onClick={() => window.open("https://krishnan026.github.io/citrus--ecommerce--js/")}><img src={ecommerce} alt="" /></div>
          <div className='pj-5' data-aos="fade-left" onClick={() => window.open("https://krishnan026.github.io/Books/")}><img src={books} alt="" /></div>
        </div>

      </div>
      <div className="contact-pg" ref={contactRef} data-aos="fade-up">
        <h1>Contact</h1>
        <div className='contact-cont'>
          <div className='contact-left'><i onClick={() => window.open("https://www.facebook.com/krishnan2626")} class="fa fa-facebook-square"></i><i onClick={() => window.open("https://www.instagram.com/krishnan_2_6/")} class="fa fa-instagram"></i><i onClick={() => window.open("https://github.com/krishnan026")} class="fa fa-git-square"></i><i onClick={() => window.open("https://wa.me/917904048657?text=Hi%20Krishnan%2C%20I%20saw%20your%20portfolio!")} class="fa fa-whatsapp"></i></div>
          <div className='contact-right'><div><h4>Email</h4><a href="mailto:manickamkrishnan80@gmail.com?subject=Interview%20Opportunity&body=Hi%20Krishnan,">
            <button className='mail-btn'>Mail</button>
          </a></div> <div  className='re-d'><h4>Resume</h4><button className='download-btn' onClick={() => window.open("https://drive.google.com/file/d/1tw64myuWf1HNQJrlyOv50ZoYFZci6T6H/view?usp=drive_link")}>Download</button></div></div>
        </div>
      </div>
    </>
  );
}
export default App;