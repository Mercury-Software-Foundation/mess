import React from 'react';
import MainLayout from '../layout/MainLayout';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Section from '../components/Usage';
import { AnimatedTestimonials } from '../components/contributionCards';
import { BackgroundBeams } from '../components/contributionCards/backgroundBeans';
import { HeroParallaxDemo } from '../components/ourPartners/products';
import Buttons from '../components/ourcomponentssection/button';
import Footer from '../components/Footer';
import Card from '../components/ourcomponentssection/Card';
import LoginForm from '../components/ourcomponentssection/login';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const handleGoogleLogin = (formData: { username: string; password: string }) => {
    console.log("Form Submitted", formData);
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub Sign-In clicked");
  };

  const externalProviders = [
    {
      name: "Google",
      icon: <FcGoogle className="mr-2" />,
      onClick: handleGoogleSignIn,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="mr-2" />,
      onClick: handleGithubLogin,
    },
  ];
  const testimonials = [
    {
      quote:
        "An experienced visionary, the founder of Mercury embodies the spirit of innovation, transforming challenges into opportunities and inspiring others to reach for the stars.",
      name: "Roshan Kumar Gujarathi",
      designation: "Artructure  of Mercury ",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736230601/RoshankPhoto_a5ihdo.jpg",
    },
    {
      quote:
        "In a short span of time, he achieved what seemed impossible, rising to greater heights with unwavering determination—an inspiration for every developer striving to turn ambition into reality",
      name: "Praveen vuddagiri",
      designation: "Software Developer ",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736417751/praveen_hijvgl.jpg",
    },
    {
      quote:
        " A creator of innovative packages, and a mentor to new talent, he leads with expertise and inspires with his dedication to building both exceptional code and exceptional teams.",
      name: "Avinash Koduri",
      designation: "Web Developer at Vithi IT Solutions",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736228451/AvinashPhoto_zfe1iy.jpg",
    },
    {
      quote:
        "Despite being new to the field, his rapid learning and mastery of GSAP have allowed him to create breathtaking animations, proving that passion and a drive for excellence can turn any newcomer into a standout talent.",
      name: "Manikanta Kurapati",
      designation: "Frontend Developer at Vithi IT Solutions",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736229238/ManikantaPhoto_2_lxqkn4.jpg",
    },
    {
      quote:
        "Though new to the team, his rapid learning and passion for frontend development are already inspiring others to push their limits, proving that the drive to grow can make a difference from day one.",
      name: "Mani Sudheer Yadlapalli",
      designation: "Frontend Developer at Vithi IT Solutions",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736229249/ManisudheeePhoto_orj8iz.jpg",
    },
    {
      quote:
        "With creativity in her code and passion in her heart, she crafts seamless experiences, proving that a frontend developer isn't just a builder of interfaces but a creator of connections.",
      name: "Sowmya Boorla",
      designation: "Frontend Developer at Vithi IT Solutions",
      src: "https://res.cloudinary.com/dystdzzi0/image/upload/v1736235100/IMG_20240609_192728_biziyx.jpg",
    },
  ];
  return (
    <MainLayout>
      <div  className="relative w-full h-[100vh] flex items-center justify-center -top-28 z-10 overflow-auto no-scrollbar">
        <HeroBanner />
      </div>
      <div className='h-auto overflow-scroll no-scrollbar'>

      <Section
        slides={[
          { text: <Buttons/> },
          { text:  <Card/> },
          { text:   <LoginForm
            onSubmit={(data) => console.log(data)}
            externalProviders={[
              { name: "Google", icon: <FcGoogle />, onClick: handleGoogleLogin },
              { name: "GitHub", icon: <FaGithub  />, onClick: handleGithubLogin },
            ]}
            config={{
              showGoogle: true,
              showGithub: true,
              showForgotPassword: true,
              showSignUp: true,
            }}
            usernameConfig={{
              label: "Email Address",
              type: "email",
            }}
          />
           }
         
        ]}
      />
      </div>
      <div>
      <HeroParallaxDemo/>
      </div>
      <div className="h-[100vh] w-full  bg-neutral-950 relative flex flex-col items-center justify-center z-50 no-scrollbar">
        <div className="absolute z-10">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
        <BackgroundBeams />
      </div>
      <div>
        <Footer/>
      </div>
    </MainLayout>
  );
}
