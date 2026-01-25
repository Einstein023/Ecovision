import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const gradientEffect = 'bg-gradient-to-r from-primary-clr to-secondary-clr bg-clip-text text-transparent';
const card = [
  {
    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>`,
    title: "Real-Time Analytics",
    description: "Monitor encironmental metrics as they happen with live data streams and instant visualizations."
  },
  {
    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>`,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze patterns and provide predictive environmental insights."
  },
  {
    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>`,
    title: "Data Export",
    description: "Export comprehensive reports in multiple formats for detailed analysis and presentation."
  }
]

const hiddenNavStyle = {
  reveal: 'bg-stone-900/70 px-5 flex items-center justify-between border-stone-800 py-3 list-none fixed top-20 left-0 w-full z-50 opacity-100 shadow-lg shadow-stone-900/50 transition-all duration-300 animate-fadeInDown'
};

const primaryNavstyle = {
  reveal: 'p-5 flex items-center justify-between fixed top-0 left-0 w-full z-50 bg-stone-950/70 backdrop-blur-md shadow-lg shadow-stone-900/50'
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const word = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const text1 = "Visualize Our";
const text2 = "Planet's Future";


export function App() {
  const [isVisible, setIsVisible] = useState(false);
  // const revealRef = React.createRef();

  useEffect(() => {
    function handleScroll() {
      const revealPosition = 300; // Adjust this value to set the scroll threshold
      const scrollPosition = window.scrollY;
      if (scrollPosition > revealPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <div className="bg-stone-950 h-fit w-fit">
      <header>
      <motion.nav className={`${isVisible ? primaryNavstyle.reveal : "bg-stone-950 flex justify-between items-center h-fit w-full pt-6 pb-10 px-7"}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="flex items-center gap-1 text-3xl sm:text-2xl text-primary-clr">
          <img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/46db7c/leaf.png" alt="leaf"/>
          EcoVision
        </h1>
        <div className="flex items-center gap-6 list-none text-green-50">
          <div className='flex items-center gap-5'>
          <a href="features"><li className="opacity-50 relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer after:content-[''] after:absolute after:w-0 after:transition-all hover:text-secondary-clr after:h-1 after:bg-secondary-clr after:top-6 after:left-0 after:rounded-lg hover:after:w-full">Features</li></a>
          <a href="#insights"><li className="opacity-50 relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer after:content-[''] after:absolute after:w-0 after:transition-all hover:text-secondary-clr after:h-1 after:bg-secondary-clr after:top-6 after:left-0 after:rounded-lg hover:after:w-full">Insight</li></a>
          <li className="opacity-50 relative transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer after:content-[''] after:absolute after:w-0 after:transition-all hover:text-secondary-clr after:h-1 after:bg-secondary-clr after:top-6 after:left-0 after:rounded-lg hover:after:w-full">Tools</li>
          </div>
          <Link to="/dashboard">
          <button className="ml-2 px-6 py-3 sm:px-4 sm:py-2 text-stone-950 font-semi-bold bg-gradient-to-r from-primary-clr to-secondary-clr rounded-3xl hover:cursor-pointer hover:shadow-lg hover:shadow-secondary-clr/50 transition-all">Launch Dashboard</button>
          </Link>
        </div>
      </motion.nav>

      {/* // £££££££££££££££££££ HIDDEN NAV £££££££££££££££££££££££££££££ */}

      <nav className={`${isVisible ? hiddenNavStyle.reveal : 'hidden'}`}>
        <div className="flex gap-3 items-center">
          <img width="35" height="35" src="https://img.icons8.com/glyph-neue/64/46db7c/leaf.png" alt="leaf"/>
          <li className="opacity-50 transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr">Overview</li>
          <li className="opacity-50 transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr">Analysis</li>
          <li className="opacity-50 transition-all hover:text-primary-clr hover:opacity-100 hover:cursor-pointer hover:text-secondary-clr">Export</li>
        </div>
          <Link to="/dashboard">
          <button className="ml-2 px-6 py-3 sm:px-4 sm:py-2 text-stone-950 font-semi-bold bg-gradient-to-r from-primary-clr to-secondary-clr rounded-3xl hover:cursor-pointer hover:shadow-lg hover:shadow-secondary-clr/50 transition-all">Dashboard</button>
          </Link>
      </nav>
      
      <div className="flex items-center justify-center h-fit">
        <div className="bg-stone-900 px-5 py-3 sm:px-3 sm:py-2 w-fit text-white rounded-3xl justify-center flex items-center gap-3 border-1 border-primary-clr">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#14bb7b" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
      <p className="font-semi-bold">Powered by Advanced AI Analytics</p>
        </div>
    </div>
    </header>

    {/* £££££££££££££££££££££££££ HEROSECTION STARTS HERE £££££££££££££££££££££££££££££££££ */}

    <main className="px-20 sm:px-4 md:px-10 lg:px-20 mt-15">
      <section className="relative flex flex-col gap-7 items-center mb-35 sm:mb-20 md:mb-35">
        {/* ££££££££££££££££££££££££££££££££ BACKGROUND SVG STARTS HERE £££££££££££££££££££££££££££££ */}
        <img className="absolute top-10 right-20 animate-float" src="data:image/png;base64,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" alt="lightning-bolt"></img>
      <img className="absolute bottom-10 left-30 animate-float" src="data:image/png;base64,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" alt="combo-chart--v1"></img>
      {/* <img className="absolute top-0 left-30 animate-float" width="100" height="100" src="https://img.icons8.com/ios/100/46db7c/sparkling.png" alt="sparkling"/> */}
      <img className="absolute bottom-0 right-40 animate-float" width="100" height="100" src="https://img.icons8.com/isometric-line/100/46db7c/forest.png" alt="forest"/>

        <motion.h1 
        variants={container}
  initial="hidden"
  animate="visible"
        className="font-heading text-center text-5xl md:text-8xl w-250">
          <div>{
          text1.split("").map((text, index) => (
            <motion.span variants = {word} key={index}>{text}</motion.span>
          ))
        }</div>
        <div>
    {text2.split("").map((char, index) => (
      <motion.span
        variants={word}
        transition={{ delay: 0.6 }} // delay second line
        key={index}
        className="bg-gradient-to-r from-primary-clr to-secondary-clr bg-clip-text text-transparent"
      >
        {char}
      </motion.span>
    ))}
  </div>
        </motion.h1>
        <div className="text-base sm:text-lg md:text-xl text-center flex flex-col w-full">
        <p>Real-time environmental data transformed into <span className="bg-gradient-to-r from-primary-clr to-secondary-clr bg-clip-text text-transparent">accountable insights.</span></p>
        <p>Monitor. analysis, and export critical climate metrics with precision.</p>
        </div>

        {/* ££££££££££££££££££££££££££££££££££££££££££££££ */}

        <div className="mt-3 flex items-center justify-center gap-5 sm:gap-3">
          <Link to="/dashboard">
          <button className="px-5 py-4 sm:px-4 sm:py-3 text-stone-950 rounded-4xl font-bold bg-gradient-to-r from-primary-clr to-secondary-clr flex items-center gap-3 hover:shadow-lg hover:shadow-primary-clr/50 transition">
            Explore Dashboard
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
          </button>
          </Link>
          <button className="px-5 py-4 sm:px-4 sm:py-3 rounded-4xl font-bold border-1 border-secondary-clr/50 text-white flex items-center gap-3 hover:border-secondary-clr transition">
            Watch Demo
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
          </button>
        </div>
      </section>
      {/* £££££££££££££££££££££££££££££££££££££££££££££££ FEATURES SECTION STARTS HERE £££££££££££££££££££££££££££££££££££££££££££££ */}
      <section id="features">
        <h1 className="font-heading text-center text-5xl sm:text-3xl md:text-4xl lg:text-5xl w-full mb-5">Advanced <span className="bg-gradient-to-r from-primary-clr to-secondary-clr bg-clip-text text-transparent">Environmental</span> Monitoring</h1>
        <p className="opacity-70 text-center text-base sm:text-lg md:text-xl">Comprehensive data visualization powered by cutting-edge AI technology</p>

      <motion.div
          initial="hidden"
  whileInView="visible"
  whileInHover="hover"
  variants={{
    hidden: {},
    visible: {
      transition: {
        duration: 0.45,
        ease: "easeOut",
        staggerChildren: 0.4
      }
    },
  }}className="my-5 flex flex-col justify-center items-center gap-3 items-start md:flex-row ">{card.map((card, cardIndex) =>(
          <motion.div
          variants={{
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }}
          key={cardIndex} className="mt-10 bg-gradient-to-br from-stone-900 to-stone-800 px-7 py-7 sm:px-5 sm:py-5 rounded-3xl hover:border-1 hover:border-primary-clr hover:-translate-y-6 hover:bg-primary-clr hover:shadow-lg hover:shadow-primary-clr/50 ease-in-out transition-all">
            <div className="w-8 h-6 bg-gradient-to-r from-primary-clr to-secondary-clr flex items-center justify-center rounded-xl mb-5 md:w-12 h-12">
              <div className="w-7 h-7" dangerouslySetInnerHTML={{ __html: card.imgSrc }}></div>
            </div>
            <h2 className="font-bold text-lg mb-1">{card.title}</h2>
            <p className="opacity-70">{card.description}</p>
          </motion.div>
        ))}</motion.div>
      </section>

      <section id="#insights" className='pt-29 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center'>
        <div className='flex items-start flex-col gap-6'>
        <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-heading'><span className={gradientEffect}>Interactive</span> <div>Data Exploration</div></h1>
          <motion.p 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.4}}
           className='opacity-70 text-xl sm:text-lg'>Dive deep into environmental data with our initutive visualization tools. Track carbon emissions, temperature changes, renewable energy adoption, and more.</motion.p>
          <motion.ul 
          initial="hidden"
  whileInView="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        duration: 1,
        ease: "easeIn",
        staggerChildren: 0.5,
      }
    }
  }}
          className='list-disc marker:text-primary-clr opacity-70 text-xl sm:text-base md:text-lg list-inside flex flex-col gap-1'>
            <motion.li
            variants = {{
              hidden: {opacity: 0, x: -50},
              visible: {opacity:1, x: 0},
            }}
            >Carbon Footprint Tracking</motion.li>
            <motion.li
            variants = {{
              hidden: {opacity: 0, x: -50},
              visible: {opacity:1, x: 0},

            }}
            >Climate Pattern Analysis</motion.li>
            <motion.li
            variants = {{
              hidden: {opacity: 0, x: -50},
              visible: {opacity:1, x: 0}
            }}
            >Renewable Energy Metrics</motion.li>
          </motion.ul>
        </div>
        <div>
          <motion.img 
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 1, delay: 0.7}}
          className="w-400 max-w-full md:w-400 rounded-xl backdrop-blur-md shadow-lg shadow-primary-clr/30" src="./weather.jpg" />
        </div>
      </section>
      <section className='my-50 flex items-center justify-center'>
        <div className='bg-gradient-to-br from-primary-clr/50 to-stone-900 text-center rounded-2xl py-15 px-10 sm:py-10 sm:px-5 flex flex-col items-center gap-7'>
          <h1 className='text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-heading'>Ready to Make an <div className={gradientEffect}>Impact<span className='text-green-50'>?</span></div></h1>
          <p className='opacity-70 text-xl sm:text-lg w-180 sm:w-full md:w-180'>Join thousands of organisation using EcoVision to trace and improve their enviromental impact</p>
          <Link to="/dashboard">
          <motion.button 
          whileTap={{ scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17}}
          className="px-5 py-4 sm:px-4 sm:py-3 text-stone-950 rounded-4xl font-bold bg-gradient-to-r from-primary-clr to-secondary-clr flex items-center gap-1 hover:shadow-lg hover:shadow-primary-clr/50 hover:scale-105 transition-all">
            Start Monitoring Now
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
</svg>
          </motion.button>
          </Link>
        </div>
      </section>
    </main>
  <footer className='border-t border-stone-900 flex items-center justify-center py-6 sm:py-4 text-sm sm:text-base px-4'>
    <p className='opacity-70'>&copy; 2026 Ecovision. All rights reserved</p>
  </footer>
    </div>
  )
}

