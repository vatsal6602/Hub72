import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useRef, useEffect } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.normalizeScroll(true)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const page = useRef(null)


  const imageArray = [
    { name: 'sophie auger', role: 'Account executive', url: 'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg' },
    { name: 'carl godbout', role: 'Business Lead', url: 'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg' },
    { name: 'camille briere', role: 'Copywriter', url: 'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg' },
    { name: 'claire robert', role: 'Designer', url: 'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg' },
    { name: 'arnaud doyon', role: 'Developer', url: 'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg' },
    { name: 'pierre-luc paiement', role: 'Project Manager', url: 'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg' },
    { name: 'melanie laviolette', role: 'Marketing Specialist', url: 'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg' },
    { name: 'michele riendeau', role: 'Sales Representative', url: 'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg' },
    { name: 'beatrice roussin', role: 'Strategist', url: 'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg' },
    { name: 'chantal g', role: 'Account Director', url: 'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg' },
    { name: 'mylene s', role: 'Graphic Designer', url: 'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg' },
    { name: 'maxime', role: 'Associate Creative Director', url: 'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg' },
    { name: 'joel', role: 'Creative Director', url: 'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg' },
    { name: 'hugo joseph', role: 'Art Director', url: 'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg' },
  ]
  const imageArray2 = [
    { name: 'sophie auger', role: 'Account executive', url: 'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg' },
    { name: 'carl godbout', role: 'Business Lead', url: 'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg' },
    { name: 'camille briere', role: 'Copywriter', url: 'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg' },
    { name: 'claire robert', role: 'Designer', url: 'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg' },
    { name: 'arnaud doyon', role: 'Developer', url: 'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg' },
    { name: 'pierre-luc paiement', role: 'Project Manager', url: 'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg' },
    { name: 'melanie laviolette', role: 'Marketing Specialist', url: 'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg' },
    { name: 'michele riendeau', role: 'Sales Representative', url: 'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg' },
    { name: 'beatrice roussin', role: 'Strategist', url: 'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg' },
  ]

  useEffect(() => {
  imageArray.forEach(img => {
    const preload = new Image();
    preload.src = img.url;
  });
}, []);

  useGSAP(() => {
  if (window.innerWidth < 1024) {
    // Small screen: auto-change every 1s
    let index = 0;
    const interval = setInterval(() => {
      imageRef.current.src = imageArray[index].url;
      index = (index + 1) % imageArray.length;
    }, 1000);

    ScrollTrigger.create({
      trigger: "#page2",
      end: "top 50%",
      onEnter: () => {
        page.current.style.backgroundColor = "black";
        page.current.style.color = "white";
        page.current.style.transition = "all 0.5s ease";
      },
      onLeaveBack: () => {
        page.current.style.backgroundColor = "white";
        page.current.style.color = "black";
        page.current.style.transition = "all 0.5s ease";
      },
    });

    return () => clearInterval(interval);
     // cleanup
  } else {
    // Large screen: scroll-driven logic
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 1%",
        end: "top -150%",
        pin: true,
        pinSpacing: false,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex].url;
        },
        onLeave: () => {
          page.current.style.backgroundColor = "black";
          page.current.style.color = "white";
          page.current.style.transition = "all 0.5s ease";
        },
        onEnterBack: () => {
          page.current.style.backgroundColor = "white";
          page.current.style.color = "black";
          page.current.style.transition = "all 0.5s ease";
        },
      },
    });
  }
});



  return (
    <div ref={page} className='parent pt-[80px]'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='lg:relative fixed overflow-hidden lg:h-[20vw] h-[27vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[20vw] lg:top-[10vw] top-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" loading='lazy'/>
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-0 mt-[18vh]'>
            <h1 className='lg:text-[20vw] text-[18vw] text-center uppercase lg:leading-[18vw] leading-[16vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>
          <div className='lg:pl-[40%] p-3 lg:mt-0 mt-4 pr-[4%]'>
            <p className='lg:text-5xl mt-[10vh] text-xl leading-tight lg:ml-20'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div id='page2' className="h-auto">
        <div className="mt-[30vh]">
          {imageArray2.map((img) => (
            <div key={img.name} className="relative flex sm:items-start items-center justify-between border-t-1 border-white hover-highlight">
              <div className="p-2 lg:text-1px text-[12px]">{img.role}</div>
              <div className="lg:text-[40px] text-[20px] p-2 uppercase">{img.name}</div>
              <img src={img.url} alt={img.name} loading="lazy" className='absolute hidden sm:block -top-28 left-[20vw] w-32 h-40 object-cover shadow-xl rounded-md z-10 bg-black' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Agence