import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import '../App.css';
import styles from './index.module.css';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { BackgroundGradientAnimation } from '../components/bgGradient';
import CodeOutputLayout from '../components/Sample';
import Navbar from '../components/Navbar';
import { AnimatedTestimonials } from '../components/contributionCards';
import { BackgroundBeams } from '../components/contributionCards/backgroundBeans';
import Usage from '../components/Usage';
import OurWork from '../components/Usage/SampleScroll';
import Section from '../components/Usage';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { AuroraBackground } from '../components/Usage/aurora-background';
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <meta name="description" content="@mercury-js/core is a rapid API generation package that simplifies backend service development by generating Mongoose models, CRUD operations, GraphQL typedefs, and resolvers from a JSON model. It also supports pre- and post-event hooks and access control via profiles, enabling field-level and operation-level permissions." />
      <div className="container">

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Mercury Js Tutorial - 10min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <body className="">

      {/* Hero Section */}
      <div className="relative w-full h-[100vh]">
        <BackgroundGradientAnimation />
        <div className="absolute top-0 w-full h-[100vh] flex items-center justify-center z-10">
          <div className="text-white text-center">
            <HeroBanner />
          </div>
        </div>
      </div>
      <div className=''>    
      
      <Section
        slides={[
          { text: "SLIDE ONE" },
          { text: "SLIDE TWO" },
          { text: "SLIDE THREE" },
          { text: "SLIDE FOUR" },
        ]}
      />
      </div>
      <div>
        {/* <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>  */}
      </div>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center ">
        <div className="absolute z-10">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        <BackgroundBeams />
      </div>



    </body>
  );
}
// <Layout
//   title={`${siteConfig.tagline}`}
//   description="Description will go into a meta tag in <head />"
// >
//   {/* <HomepageHeader />
//   <main>
//     <HomepageFeatures />
//   </main> */}
// </Layout>
