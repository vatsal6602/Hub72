import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg'
  },{
    image1: 'https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  },{
    image1: 'https://k72.ca/uploads/caseStudies/BEST/BEST_site_Thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg'
  }
]
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.from('.hero',{
      height: "65px",
      stagger: {
        amount: 0.4
      },
      scrollTrigger:{
        trigger: '.lol',
        markers: false,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
    window.addEventListener("load", () => {
      ScrollTrigger.refresh()
    })
    
  })

  return (
    <div className='lg:p-4 p-2'>
      <div className='pt-[45vh] mt-[50px]'>
        <h2 className='text-black font-[font2] leading-[0.8] lg:text-[13vw] text-7xl uppercase'>work</h2>
      </div>
      <div className='lg:mb-10 lol'>
        {projects.map(function(elem, idx){
          return <div key={idx} className='hero w-full lg:h-[550px] h-[650px] mb-2 flex lg:flex-row flex-col lg:gap-3 gap-2'>
          <ProjectCard image1={elem.image1} image2={elem.image2}/>
        </div>
        })}
      </div>
    </div>
  )
}

export default Projects