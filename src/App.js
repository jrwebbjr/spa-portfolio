import React from 'react';
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import FindMe from './components/FindMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';
import resume from './static/resume.pdf';
import { ReactComponent as GithubIcon } from '../src/static/icons8-github-squared.svg';
import { ReactComponent as Eye } from '../src/static/fineliner_eye-01.svg';
import { ReactComponent as Skull } from '../src/static/voodoo_skull-01.svg';
import { ReactComponent as Asterix } from '../src/static/fineliner_asterix-02.svg';
import { ReactComponent as Bolt } from '../src/static/fineliner_electric-03.svg';
import { ReactComponent as Star } from '../src/static/fineliner_star-05.svg';


function App() {

  const [view, setView] = useState(AboutMe)

  return (
    <>
      <div className='w-screen h-screen flex bg-woodgrain bg-cover overflow-scroll lg:bg-woodgrain lg:bg-cover lg:overflow-hidden'>
        <div className=''>
          <section className='w-max h-max flex justify-center'>
            <div className='hidden shadow-md shadow-red-700 lg:bg-pi-red lg:w-[300px] lg:h-[300px] lg:flex lg:justify-center lg:items-center lg:rotate-6'>
              <h1 className='font-manic bg-scribble bg-contain text-[20px] m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis omnis exercitationem ut distinctio quia, quo blanditiis, veritatis aliquam laboriosam quaerat rerum doloremque pariatur repudiandae fugit suscipit provident quibusdam tempora.</h1>
            </div>
            <div className='hidden shadow-md shadow-blue-400 lg:bg-pi-blue lg:w-[300px] lg:h-[300px] lg:-ml-[260px] lg:flex lg:flex-col lg:-rotate-[15deg] lg:pl-[35px] lg:pt-2'>
              <ol className='font-manic text-xl text-gray-600 list-disc'> Todo:
                <li>Make a portfolio that looks like a sloppy desk.</li>
                <li>Get a Job</li>
              </ol>
            </div>
            <div className='hidden shadow-md shadow-purple-500 lg:bg-pi-purple lg:w-[300px] lg:h-[300px] lg:-ml-[200px] lg:mt-10 lg:flex lg:items-center lg:rotate-12'>
              <h1 className='lg:font-voodoo lg:text-[50px] lg:m-5'>Stop Wasting Post It Notes!</h1>
            </div>
            <div className='bg-pi-yellow w-[360px] h-[360px] mt-[100px] flex items-center z-50 md:w-[650px] md:h-[650px] shadow-md shadow-yellow-600 lg:w-[300px] lg:h-[300px] lg:-ml-[400px] lg:mt-10 lg:pt-5 lg:-rotate-[4deg]'>
              <div className='flex justify-evenly items-center md:w-[650px] md:h-[650px] p-2'>
                <h1 className='font-voodoo-bold text-[120px] w-[250px] md:text-[200px] md:w-[400px] lg:text-[100px] lg:w-[250px] leading-none flex'>Joe Webb Jr.</h1>
                <div className='flex justify-center mt-[180px] fill-black md:w-max md:h-auto md:mt-[280px] lg:mt-[140px] lg:w-auto'>
                  <Skull />
                </div>
              </div> 
            </div> 
            <div className='w-[360px] h-[360px] md:w-[650px] md:h-[650px] lg:hidden'></div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
            <div className='bg-pi-green flex items-center z-40 w-[360px] h-[360px] md:w-[650px] md:h-[650px] shadow-md shadow-green-800 lg:w-[300px] lg:h-[300px] lg:mt-0 lg:pt-5 lg:ml-1 lg:rotate-[4deg]'>
              <div className='flex items-center justify-center w-[360px] h-[360px] md:w-[650px] md:h-[650px]'>
                <div className='flex items-center justify-center w-[360px] h-[360px] md:w-[650px] md:h-[650px] lg:w-[300px] lg:h-[300px]'>
                  <div className='z-10 sm-hidden md:w-[145px] md:h-[150px] md:-mt-[400px] md:-mr-[80px] md:bg-slate-600 md:opacity-10 md:-rotate-[57deg] md:border-dotted md:border-slate-600 md:border-x-8 lg:w-[120px] lg:h-[75px] lg:-mt-[150px]'>
                  </div>
                  <div className='z-0 flex w-[360px] h-[360px] border-white border-x-[25px] bg-joe bg-center bg-contain md:w-[400px] md:h-[500px] justify-center items-center md:-rotate-6 md:flex md:justify-center md:items-center md:shadow-untaped lg:w-[220px] lg:h-[220px] lg:mr-5' alt='Image of Joe Webb'>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
          <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
          <div className='bg-pi-green flex items-center w-[360px] h-[360px] md:w-[650px] md:h-[650px] md:shadow-md md:shadow-green-800 lg:hidden'>
              <div className='flex items-center justify-center w-[360px] h-[360px] md:w-[650px] md:h-[650px]'>
                <div className='flex items-center justify-center w-[360px] h-[360px] md:w-[650px] md:h-[650px] lg:w-[300px] lg:h-[300px]'>
                  <div className='z-10 sm-hidden md:w-[145px] md:h-[150px] md:-mt-[400px] md:-mr-[80px] md:bg-slate-600 md:opacity-10 md:-rotate-[57deg] md:border-dotted md:border-slate-600 md:border-x-8 lg:w-[50px] lg:h-[60px]'>
                  </div>
                  <div className='z-0 w-[360px] h-[360px] border-white border-x-[25px] bg-joe bg-center bg-contain md:w-[400px] md:h-[500px] justify-center items-center md:-rotate-6 md:flex md:justify-center md:items-center md:shadow-untaped lg:w-[220px] lg:h-[220px]' alt='Image of Joe Webb'>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
            <div className='bg-pi-blue w-[360px] h-[360px] flex flex-col justify-center items-center md:w-[650px] md:h-[650px] shadow-md shadow-blue-400 lg:hidden'>
              <h1 className='flex justify-center items-center font-voodoo-bold text-5xl pt-4 md:text-7xl'>
                <Asterix className='m-3 h-[30px] w-auto md:h-[45px]' />
                About Me
                <Asterix className='m-3 h-[30px] w-auto md:h-[45px]' />
              </h1>
              <p className='flex justify-center items-center font-voodoo text-[26px] md:text-5xl md:p-10'>I am a fullstack software engineer with a passion for front end development and design. I enjoy being creative through many outlets including software development, art, photography, music, and woodworking. I enjoy spending time with my family along with hiking, fishing, and playing golf.
            </p>
            </div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
            <div className='bg-pi-red w-[360px] h-[360px] justify-center items-center pt-4 md:w-[650px] md:h-[650px] shadow-md shadow-red-700 lg:hidden'>
              <h1 className='flex justify-center items-center font-voodoo-bold text-5xl pt-4 md:text-7xl md:pt-10'>
                <Bolt className='m-3 h-[30px] md:h-[45px] w-auto' />
                Skills
                <Bolt className='m-3 h-[30px] md:h-[45px] w-auto' />
              </h1>
              <p className='font-voodoo text-[26px] md:text-5xl md:p-10'><div className="flex justify-center">
            <ul className="flex flex-col items-center">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.JS</li>
                <li>Express.JS</li>
                <li>MongoDB</li>
                <li>React</li>
            </ul>
            <ul className="flex flex-col items-center">
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Mongoose</li>
                <li>Git</li>
                <li>Github</li>
                <li>NoSQL Databases</li>
                <li>Agile Scrum Methodologies</li>
            </ul>
        </div>
        </p>
            </div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
            <div className='bg-pi-purple w-[360px] h-[360px] flex flex-col items-center md:w-[650px] md:h-[650px] shadow-md shadow-purple-500 lg:hidden'>
              <h1 className='flex justify-center items-center font-voodoo-bold text-5xl pt-4 md:text-7xl md:pt-10'>
                <Star className='m-3 h-[30px] w-auto md:h-[45px]' />  
                Projects
                <Star className='m-3 h-[30px] w-auto md:h-[45px]' />
              </h1>
              <p className='flex justify-center items-center font-voodoo text-[26px] md:text-5xl md:p-10'>
                <ul className='flex flex-col justify-evenly items-center md:gap-8'>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl md:hover:text-7xl'>
                    <a href="https://google.com">Apply</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/interview-tracker-app-backend" target="blank">
                      <div className='hover:text-red-700'>
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl md:hover:text-7xl'>
                    <a href="https://google.com">Retrospective</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/Retrospective" target="blank">
                      <div className='hover:text-red-700'>
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl md:hover:text-7xl'>
                  <a href="https://google.com">Emoji Matchup</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/Emoji-Matchup" target="blank">
                      <div className='hover:text-red-700'>
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                </ul>
              </p>
            </div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
            <div className='bg-pi-yellow w-[360px] h-[360px] flex flex-col items-center md:w-[650px] md:h-[650px] shadow-md shadow-yellow-600 lg:hidden'>
              <h1 className='flex justify-center items-center font-voodoo-bold text-5xl pt-4 md:text-7xl md:pt-10'>
                <Eye className='m-3 w-auto h-[40px] md:h-[60px]' />
                Find Me
                <Eye className='m-3 w-auto h-[40px] md:h-[60px]' />
                </h1>
              <p className='flex justify-center items-center font-voodoo text-[26px] md:text-5xl md:p-10'>
                <ul className='flex flex-col justify-evenly items-center md:gap-5'>
                  <li className='hover:font-voodoo-bold hover:text-blue-800'>
                    <a href={resume} target="blank">Resumé</a>
                  </li>
                  <li className='hover:font-voodoo-bold hover:text-blue-800'>
                    <a href="https://www.linkedin.com/in/joewebbjr/" target="blank">Linkdin</a>
                  </li>
                  <li className='hover:font-voodoo-bold hover:text-blue-800'>
                    <a href="https://github.com/jrwebbjr" target="blank">Github</a>
                  </li>
                  <li className='hover:font-voodoo-bold hover:text-blue-800'>
                    <a href="https://twitter.com/jrwebbjr" target="blank">Twitter</a>
                  </li>
                  <li className='hover:font-voodoo-bold hover:text-blue-800'>
                    <a href="https://www.instagram.com/iamjrwebb/" target="blank">Instagram</a>
                  </li>
                </ul>
              </p>
            </div>
            <div className='w-[360px] h-[100px] md:w-[650px] md:h-[200px] lg:hidden'></div>
          </section>  
          <section className='hidden lg:flex'>
            <div className='flex flex-col bg-white w-[800px] h-[1000px] -rotate-[10deg] -mt-10 items-center gap-10'>
              <div className='flex gap-20 mt-12'>
                <button onClick={() => setView(AboutMe)} className='font-manic text-black hover:text-blue-800  focus:text-red-700 text-8xl hover:text-[105px]'>About ME</button>
                <button onClick={() => setView(Skills)} className='font-manic text-black hover:text-blue-800 focus:text-red-700 text-8xl hover:text-[105px] mt-[120px]'>Skills</button>
              </div>
              <div className='flex gap-20'>
                <button onClick={() => setView(Projects)} className='font-manic text-black hover:text-blue-800 focus:text-red-700 text-8xl hover:text-[105px]'>Projects</button>
                <button onClick={() => setView(FindMe)} className='font-manic text-black hover:text-blue-800 focus:text-red-700 text-8xl hover:text-[105px] mt-[120px]'>Find Me</button>
              </div>
            </div>
          </section>
        </div>
        <section className='hidden ml-10 lg:flex lg:w-[800px] lg:h-[1000px] lg:bg-white lg:-rotate-[5deg]'>
          <div className='flex justify-center w-[900px] h-[1200px] m-10 font-voodoo-bold text-5xl leading-[75px]'>
            {view}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
