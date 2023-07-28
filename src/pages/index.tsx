import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ProjectsContainer from '../components/ProjectsContainer'; // Assuming you have these components defined
import Navigation from '~/components/Navigation/navigation';
import PortfolioHeader from '~/components/portfolioHeader';
import About from '~/components/about';
import Timeline from '~/components/Timeline';
import BackgroundParticles from '~/components/sceneComponent';

const Home = () => {


  return (
    <>
      <Head>
        <title>Daniel&apos;s Portfolio</title>
        <meta name="description" content="Daniel Diaz Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen">
        <Navigation />
        <div className="flex flex-col items-center justify-center w-full snap-mandatory snap-y">
          {true ?
            <BackgroundParticles className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" /> :
            <div className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />}
          <PortfolioHeader className="snap-start" />
          <About className="snap-start" />
          <Timeline />
          {/*Add a component that will tell that projects coming soon*/}
          <div id="#projects" className="flex flex-col items-center justify-center w-full h-[100vh]">
            <div className="text-4xl font-bold text-white">Coming soon</div>
          </div>

          {/*<ProjectsContainer className="snap-start" />*/}
        </div>
      </div>
    </>
  );
};

export default Home;
