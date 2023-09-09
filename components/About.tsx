'use client';

import { motion } from 'framer-motion';
import React from 'react';
import aryanLong from '../assets/aryan-long.png';
import Image from 'next/image';

type Props = {}

const About = (props: Props) => {
  return (
    <div
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <div className='-mb-20 md:mb-0 flex-shrink-0 overflow-hidden'>
        <Image
          className='w-60 aspect-square md:w-60 md:aspect-auto rounded-full object-cover md:rounded-lg'
          alt='profile-image'
          src={aryanLong}
          height="2400"
          width="2400"
        />
      </div>
      
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src='https://drive.google.com/file/d/12Z04dEb3giYdyhizg5cNTTGfYiwRhnpb/view?usp=sharing'
        className=' w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      /> */}

      <motion.div 
        initial={{
          x: 500,
          opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            duration: 2,
        }}
        viewport={{ once: true }}
        className='space-y-10 px-0 md:px-10'
      >
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
          background
        </h4>
        <p className='text-base'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corporis ullam adipisci facilis fugiat quibusdam deserunt quam nam ipsa. Vero ipsa excepturi libero provident, corrupti, ad, neque totam commodi iusto nulla id assumenda reprehenderit! Molestiae quos accusantium saepe laudantium suscipit deleniti eius, ad libero hic, voluptas debitis magni illum impedit enim tenetur labore eos! Eum voluptatibus magni excepturi numquam natus illo commodi autem nobis modi quos quibusdam ea magnam asperiores sequi, placeat voluptas molestiae consequuntur repudiandae fugiat? Laborum nihil aliquam impedit modi cupiditate odio quia facilis nemo harum a culpa repudiandae dolores eius alias quam, laudantium dolor consequuntur praesentium, eos voluptatum distinctio facere voluptatibus magnam. Sed quam commodi voluptate aspernatur veniam ipsum quas, ut cum fugit voluptates optio voluptatibus laboriosam at nihil perferendis aliquam architecto eligendi provident non consectetur facere accusamus dolorem officia! Ipsam in hic doloremque debitis quia voluptatum placeat sed obcaecati, ducimus repudiandae dolorum nostrum at deserunt aspernatur vel repellendus impedit fugiat veritatis sequi voluptatibus error accusantium, magni harum. Explicabo laudantium nobis commodi nisi ratione sapiente, vitae autem natus, labore eveniet, ab sint.
        </p>
      </motion.div>
    </div>
  );
};

export default About;