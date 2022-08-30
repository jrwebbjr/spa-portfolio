import resume from '../static/resume.pdf';

export default function FindMe(){
    return(
        <div>
            <ul className='flex flex-col justify-evenly items-center mt-40 font-voodoo-bold md:gap-5'>
                  <li className='hover:text-7xl hover:text-blue-800'>
                    <a href={resume} target="blank">Resumé</a>
                  </li>
                  <li className='hover:text-7xl hover:text-blue-800'>
                    <a href="https://www.linkedin.com/in/joewebbjr/" target="blank">Linkdin</a>
                  </li>
                  <li className='hover:text-7xl hover:text-blue-800'>
                    <a href="https://github.com/jrwebbjr" target="blank">Github</a>
                  </li>
                  <li className='hover:text-7xl hover:text-blue-800'>
                    <a href="https://twitter.com/jrwebbjr" target="blank">Twitter</a>
                  </li>
                  <li className='hover:text-7xl hover:text-blue-800'>
                    <a href="https://www.instagram.com/iamjrwebb/" target="blank">Instagram</a>
                  </li>
                </ul>
        </div>
    )
}