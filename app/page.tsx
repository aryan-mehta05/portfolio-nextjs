import About from '@/components/About';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Aryan&apos;s Portfolio</title>
      </Head>
      
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* ABOUT */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* EXPERIENCE */}

      {/* SKILLS */}

      {/* PROJECTS */}

      {/* CONTACT ME */}

    </div>
  );
};
