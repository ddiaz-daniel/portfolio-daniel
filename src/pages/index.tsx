import Head from 'next/head';
import React, { useEffect } from 'react';
import ProjectsContainer from '../components/ProjectsContainer'; // Assuming you have these components defined
import Navigation from '~/components/Navigation/navigation';
import PortfolioHeader from '~/components/portfolioHeader';
import About from '~/components/about';
import Timeline from '~/components/Timeline';
import BackgroundParticles from '~/components/sceneComponent';
import { ProjectFilterProvider } from '~/components/ProjectsContainer/projectFilterContext';

const Home = () => {

  //get rounte and scroll to section after page load
  useEffect(() => {
    const fullHref = typeof window !== 'undefined' ? `${window.location.href}` : "";
    const route = fullHref.split('#')[1];
    if (route) {
      scrollToSection(`#${route}`);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <Head>
        <title>Daniel&apos;s Portfolio</title>
        <meta name="description" content="Daniel Diaz Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen">
        <Navigation />
        <div className="flex flex-col items-center justify-center snap-mandatory snap-y">
          {true ?
            <BackgroundParticles className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" /> :
            <div className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />}
          <PortfolioHeader className="snap-start" />
          <About className="snap-start" />
          <Timeline />
          <ProjectFilterProvider>
            <ProjectsContainer className="snap-start" />
          </ProjectFilterProvider>
        </div>
      </div>
    </>
  );
};

export default Home;
