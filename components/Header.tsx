'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
      <motion.div 
        className='flex flex-row items-center'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
      >
        {/* SOCIAL ICONS */}
        <SocialIcon 
          url='https://www.github.com/aryan-mehta05' 
          fgColor='gray' 
          bgColor='transparent' 
        />
        <SocialIcon 
          url='https://www.linkedin.com/in/aryannmehta/' 
          fgColor='gray' 
          bgColor='transparent' 
        />
        <SocialIcon 
          url='https://www.instagram.com/ary_n_meth/' 
          fgColor='gray' 
          bgColor='transparent' 
        />
      </motion.div>

      <motion.div 
        className='flex flex-row items-center text-gray-300 cursor-pointer'
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon 
          className='cursor-pointer'
          network='email' 
          fgColor='gray' 
          bgColor='transparent' 
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch!</p>
      </motion.div>
    </header>
  );
};

export default Header;