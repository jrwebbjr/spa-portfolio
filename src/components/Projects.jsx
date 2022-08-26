import { ReactComponent as GithubIcon } from '../../src/static/icons8-github-squared.svg';

export default function Projects(){
    return(
        <div>
            <p className='flex justify-center items-center font-voodoo text-[26px] md:text-5xl md:p-10'>
                <ul className='flex flex-col justify-evenly items-center md:gap-8'>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl lg:hover:text-7xl'>
                  <a href="https://google.com" target="blank">Apply</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/interview-tracker-app-backend">
                    <div className='hover:text-red-700'>
                      <GithubIcon />
                    </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl lg:hover:text-7xl'>
                    <a href="https://google.com" target="blank">Retrospective</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/Retrospective">
                      <div className='hover:text-red-700'>
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl lg:hover:text-7xl'>
                    <a href="https://google.com" target="blank">Emoji Matchup</a>
                    <a className='hover:text-blue-800' href="https://github.com/jrwebbjr/Emoji-Matchup" target="blank">
                      <div className='hover:text-red-700'>
                        <GithubIcon />
                      </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800 hover:text-4xl lg:hover:text-7xl'>
                    <a href="https://google.com" target="blank">The Healing Chi</a>
                    <a classname="hover:text-blue-800" href="https://github.com/Nobuns-inc/Yoga-App">
                    <div className='hover:text-red-700'>
                      <GithubIcon />
                    </div>
                    </a>
                  </li>
                </ul>
              </p>
        </div>
    )
}