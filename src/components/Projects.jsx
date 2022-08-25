import { ReactComponent as GithubIcon } from '../../src/static/icons8-github-squared.svg';

export default function Projects(){
    return(
        <div>
            <p className='flex justify-center items-center font-voodoo text-[26px] md:text-5xl md:p-10'>
                <ul className='flex flex-col justify-evenly items-center md:gap-8'>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800'>
                    Apply
                    <a className='hover:text-blue-800' >
                    <div className='hover:fill-red-700'>
                        <GithubIcon href="https://github.com/jrwebbjr/interview-tracker-app-backend" target="blank" />
                    </div>
                    </a>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800'>
                    The Healing Chi
                    <a href="https://github.com/Nobuns-inc/Yoga-App"></a>
                    <div className='hover:fill-red-700'>
                        <GithubIcon />
                    </div>
                  </li>
                  <li className='flex justify-evenly items-center hover:font-voodoo-bold hover:text-blue-800'>
                    Retrospective
                    <a href="https://github.com/jrwebbjr/Retrospective"></a>
                    <div className='hover:fill-red-700'>
                        <GithubIcon />
                    </div>
                  </li>
                </ul>
              </p>
        </div>
    )
}