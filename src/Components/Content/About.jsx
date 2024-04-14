import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/profile.jpeg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
        Greetings, I'm Iranna Patil, a dedicated React Native Developer with a fervor for crafting exceptional mobile experiences. Graduating with a Bachelor's in Computer Science and Engineering from N B Navale Sinhgad College of Engineering, Solapur, I embarked on a journey marked by innovation and excellence. My passion for technology ignited during my tenure at Codeworld Infotech, where I delved into the realms of React Native, Expo, and Redux-Toolkit, setting the stage for my professional career.
          <br />
          My current role at Bee Logical Software Solutions, Pune, sees me at the forefront of mobile application development, where I meticulously blend creativity and technical prowess to deliver seamless solutions across Android and iOS platforms. Leveraging my expertise in JavaScript, TypeScript, and a myriad of frameworks including React Native, I thrive in optimizing performance and functionality, ensuring timely project delivery while maintaining the highest standards of quality.  <br />
          When I'm not coding, you can find me exploring new locations for an outing, hiking, or trying out new recipes in my kitchen. I'm a firm believer in work-life balance and strive to maintain a healthy lifestyle.
          <br/>
          Beyond the realm of coding, I am driven by a quest for continuous learning and growth, constantly seeking new challenges to broaden my skill set. My crowning achievement thus far has been leading my team, "Next_Innovation," to victory in India’s biggest technical competition, the Smart India Hackathon 2022, where our innovative solution garnered national recognition.
          <br/>
          Outside of work, you'll find me exploring the great outdoors, indulging in my love for adventure sports, or experimenting with new recipes in the kitchen. I firmly believe in the importance of work-life balance and strive to maintain a harmonious blend of professional excellence and personal fulfillment in all aspects of my life. Let's collaborate and create something extraordinary together!
        </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About